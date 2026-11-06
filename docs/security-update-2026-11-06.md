# Dependency security update - 6 November 2026

The npm dependency audit was reduced from **9 vulnerable packages** (1 critical,
6 high, 1 moderate, 1 low) to **0 reported vulnerabilities**. All direct
production and development packages now match their latest stable npm registry
versions at the time of this update. The package lock was regenerated without
`--force` or `--legacy-peer-deps`.

## Runtime

- Project runtime: Node.js **26.13.0 LTS**, npm **12.2.2**.
- Global npm was also updated from 12.2.1 to 12.2.2.
- Windows denied replacing `D:\Program Files\nodejs\node.exe`; the system
  runtime remains **26.12.1**. The project has a separate verified runtime under
  `.tools/node-v26.13.0`, excluded from Git.
- Use `.\scripts\npm.cmd` on Windows to run with the project runtime.
  The wrapper prepends that runtime to PATH for npm and its child processes.
- The bootstrap validates the archive against official SHA256 checksums and
  checks the executable's valid OpenJS Foundation Authenticode signature.
- `.node-version`, `.nvmrc`, package engines and `packageManager` record
  the versions. `.npmrc` rejects unsupported Node/npm versions on install.

**Pending upstream security release:** Node.js has announced HIGH severity
fixes for its 26.x, 24.x and 22.x lines on or shortly after **11 November 2026**.
Those patches are not available as of this review on 6 November. Version
26.13.0 is the newest available LTS; the project and system runtime need another
update when the security release is published. npm audit checks npm packages
and does not establish that the Node.js runtime has no vulnerabilities.
[Official Node.js security announcement](https://nodejs.org/en/blog/vulnerability/november-2026-security-releases).

## Main upgrades

| Package | Before | After |
| --- | --- | --- |
| React / React DOM | 18.3.1 | 19.3.1 |
| Vite | 6.4.2 | 8.3.6 |
| React Vite plugin | 4.7.0 | 6.2.1 |
| Tailwind CSS / Vite plugin | 4.1.12 | 4.3.4 |
| React Router | 7.13.0 | 8.5.1 |
| Motion | 12.23.24 | 14.9.1 |
| MUI | 7.3.5 | 9.5.0 |
| Lucide React | 0.487.0 | 1.70.0 |
| Recharts | 2.15.2 | 3.10.1 |
| React Resizable Panels | 2.1.7 | 4.18.1 |
| React DayPicker | 8.10.1 | @daypicker/react 10.0.2 |

All Radix UI packages and other outdated direct dependencies were also updated.
React and React DOM are now required application dependencies rather than
optional peers. React-is matches React's version for Recharts compatibility.
Unused react-popper and @popperjs/core direct dependencies were removed because
react-popper's latest version does not support React 19. The old pnpm override
forcing Vite 6.3.5 was removed; npm with package-lock.json is the documented
package manager.

## Vulnerable packages resolved

| Package | Severity | Before | After |
| --- | --- | --- | --- |
| tar | critical | 7.5.13 | Removed from dependency tree |
| vite | high | 6.4.2 | 8.3.6 |
| react-router | high | 7.13.0 | 8.5.1 |
| postcss | high | 8.5.13 | 8.5.32 |
| nanoid | high | 3.3.12 | 3.3.20 |
| source-map-js | high | 1.2.1 | 1.2.2 |
| browserslist | high | 4.28.2 | Removed from dependency tree |
| baseline-browser-mapping | moderate | 2.10.24 | Removed from dependency tree |
| @babel/core | low | 7.29.0 | Removed from dependency tree |

See [baseline audit](security-audit-before.json) and
[final audit](security-audit-after.json) for the advisory details and scan data.

## Compatibility changes

- Migrated the calendar to DayPicker v10 component slots and CSS class names.
- Migrated resizable groups and separators to the v4 API, including separator
  orientation styling.
- Updated Recharts tooltip and legend types and passed the complete tooltip
  payload array to custom formatters.
- Retained the existing GitHub and LinkedIn SVG vectors locally because Lucide
  v1 removed brand icons. The license is included in ATTRIBUTIONS.md.
- Added TypeScript checks for all source files, including UI components not
  currently imported by the portfolio homepage.
- Added weekly Dependabot npm updates with coordinated React, Radix, Tailwind
  and Vite groups.

## Validation

- Clean npm ci using the pinned project runtime: PASS (268 installed packages,
  275 audited packages, no engine errors or dependency resolution failures).
- Combined npm run check after the clean installation: PASS.
- TypeScript across all source files: PASS.
- Production build with Vite 8: PASS.
- npm audit including development dependencies: 0 reported vulnerabilities.
- npm outdated: empty result.
- npm ls: valid dependency tree with no invalid peer dependency entries.
- Chrome desktop (1440 x 1000) and mobile (390 x 844): portfolio rendered,
  all scroll-triggered sections became visible, no horizontal overflow,
  working experience anchor, and preserved social icons: PASS.
- DayPicker v10: date selection and next-month navigation: PASS.
- Resizable panels v4: horizontal and vertical keyboard resizing: PASS.
- Recharts v3: line chart, legend, tooltip and formatter payload: PASS.
- Uncaught browser JavaScript errors: 0.

The component migration harness was temporary and removed after testing.
Browser screenshots and results are retained locally in
`%TEMP%\porto-security-smoke`.

A pre-existing unrelated issue was observed: public/ has no CV PDF, so
/cv.pdf returns the HTML fallback instead of a PDF. No CV was supplied in this
project, so that content issue was left for the owner.

## Repeat the checks

On Windows:

```powershell
.\scripts\npm.cmd ci
.\scripts\npm.cmd run check
.\scripts\npm.cmd outdated
```

On other platforms, install the pinned Node/npm versions, then run
`npm ci` and `npm run check`.

Sources: [Node.js 26.13.0 LTS release](https://nodejs.org/en/blog/release/v26.13.0),
[Vite migration guide](https://vite.dev/guide/migration),
[DayPicker v8-to-v10 guide](https://daypicker.dev/upgrading-v8-to-v10),
and the npm registry/audit service.
