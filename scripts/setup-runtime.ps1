$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$nodeVersion = (Get-Content -LiteralPath (Join-Path $projectRoot '.node-version') -Raw).Trim()
$package = Get-Content -LiteralPath (Join-Path $projectRoot 'package.json') -Raw | ConvertFrom-Json
$npmVersion = $package.packageManager -replace '^npm@', ''
if ($nodeVersion -notmatch '^\d+\.\d+\.\d+$' -or $npmVersion -notmatch '^\d+\.\d+\.\d+$') {
    throw 'Expected exact stable Node.js and npm versions in project configuration.'
}

$architecture = if ($env:PROCESSOR_ARCHITECTURE -eq 'ARM64') { 'arm64' } else { 'x64' }
$archiveName = "node-v$nodeVersion-win-$architecture.zip"
$downloadRoot = "https://nodejs.org/dist/v$nodeVersion"
$archivePath = Join-Path $env:TEMP "porto-$archiveName"
$checksumPath = Join-Path $env:TEMP "porto-node-v$nodeVersion-SHASUMS256.txt"

Write-Output "Downloading Node.js $nodeVersion from nodejs.org..."
curl.exe --fail --location --silent --show-error "$downloadRoot/SHASUMS256.txt" --output $checksumPath
if ($LASTEXITCODE -ne 0) { throw 'Node.js checksum download failed.' }

$checksumLine = Get-Content -LiteralPath $checksumPath | Where-Object { $_.Trim().EndsWith(" $archiveName") }
if (-not $checksumLine) { throw 'Archive not listed in official Node.js checksums.' }
$expected = ($checksumLine.Trim() -split '\s+')[0]
if (-not (Test-Path -LiteralPath $archivePath) -or
    (Get-FileHash -LiteralPath $archivePath -Algorithm SHA256).Hash.ToLowerInvariant() -ne $expected) {
    curl.exe --fail --location --silent --show-error "$downloadRoot/$archiveName" --output $archivePath
    if ($LASTEXITCODE -ne 0) { throw 'Node.js download failed.' }
}
$actual = (Get-FileHash -LiteralPath $archivePath -Algorithm SHA256).Hash.ToLowerInvariant()
if ($actual -ne $expected) { throw 'Node.js SHA256 checksum mismatch.' }

$extractRoot = Join-Path $env:TEMP ("porto-node-v$nodeVersion-" + [Guid]::NewGuid().ToString('N'))
Add-Type -AssemblyName System.IO.Compression.FileSystem
[IO.Compression.ZipFile]::ExtractToDirectory($archivePath, $extractRoot)
$sourceRoot = Join-Path $extractRoot "node-v$nodeVersion-win-$architecture"
$signature = Get-AuthenticodeSignature -LiteralPath (Join-Path $sourceRoot 'node.exe')
if ($signature.Status -ne 'Valid' -or $signature.SignerCertificate.Subject -notmatch 'OpenJS Foundation') {
    throw 'Node.js executable does not have a valid OpenJS Foundation signature.'
}

$runtimeRoot = Join-Path $projectRoot ".tools\node-v$nodeVersion"
New-Item -ItemType Directory -Path $runtimeRoot -Force | Out-Null
Copy-Item -Path (Join-Path $sourceRoot '*') -Destination $runtimeRoot -Recurse -Force
$nodeExecutable = Join-Path $runtimeRoot 'node.exe'
$npmCli = Join-Path $runtimeRoot 'node_modules\npm\bin\npm-cli.js'
$env:PATH = "$runtimeRoot;$env:PATH"
& $nodeExecutable $npmCli install --global "npm@$npmVersion" --prefix $runtimeRoot --no-audit --no-fund
if ($LASTEXITCODE -ne 0) { throw 'npm installation failed.' }

& $nodeExecutable --version
& $nodeExecutable $npmCli --version
Write-Output 'Project runtime ready. Use .\scripts\npm.cmd for project npm commands.'
