@echo off
setlocal
set /p NODE_VERSION=<"%~dp0..\.node-version"
set "RUNTIME=%~dp0..\.tools\node-v%NODE_VERSION%"
if not exist "%RUNTIME%\node.exe" (
  powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup-runtime.ps1"
  if errorlevel 1 exit /b 1
)
if not exist "%RUNTIME%\node_modules\npm\bin\npm-cli.js" (
  powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup-runtime.ps1"
  if errorlevel 1 exit /b 1
)
set "PATH=%RUNTIME%;%PATH%"
set "NPM_CONFIG_PREFIX=%RUNTIME%"
"%RUNTIME%\node.exe" "%RUNTIME%\node_modules\npm\bin\npm-cli.js" %*
exit /b %ERRORLEVEL%
