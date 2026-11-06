
# Indigo's AI-Powered Portfolio Website

Welcome to my modern, fully AI-generated portfolio website! This project showcases the seamless integration of cutting-edge AI technologies to create a beautiful, responsive, and feature-rich portfolio.

## 🤖 Built with AI Innovation

This entire portfolio website was created using **Sticky AI**, an intelligent AI assistant that bridges the gap between design and development by seamlessly connecting to:

- **Figma** - For pixel-perfect design integration and UI component management
- **Google Gemini** - For intelligent content generation and optimization
- **Claude (Anthropic)** - For advanced code generation, problem-solving, and architectural decisions

The result is a harmonious blend of stunning design aesthetics and robust, production-ready code—all powered by artificial intelligence.

## 🎯 Features

- **Responsive Design** - Beautiful on all devices (mobile, tablet, desktop)
- **Modern UI Components** - Built with shadcn/ui and Tailwind CSS
- **Performance Optimized** - Fast loading times and smooth interactions
- **Accessibility First** - Inclusive design that works for everyone
- **Interactive Sections** - Certifications, Experience, Skills, and more

## 🚀 Getting Started

### Prerequisites
- Node.js 26.13.0 LTS (see `.nvmrc` and `.node-version`)
- npm 12.2.2

### Installation & Running

On Windows, the project can install its pinned Node.js and npm versions without
administrator access. This verifies the official Node.js archive checksum and
OpenJS executable signature, then installs the runtime under the ignored
`.tools` directory:

```powershell
.\scripts\npm.cmd ci
.\scripts\npm.cmd run dev
```

The first command sets up the runtime automatically. Use `.\scripts\npm.cmd`
for the commands below when using this local runtime. The system Node.js
installation is managed separately.

Install dependencies:
```bash
npm ci
```

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the port specified in your terminal).

### Build for Production

```bash
npm run build
```

### Dependency and security checks

```bash
npm run check
npm outdated
```

`npm run check` checks TypeScript across all source components, builds the
production site, and runs `npm audit`, failing on any reported vulnerability.
`package-lock.json` records the reviewed dependency tree; use `npm ci` for
reproducible installations. Weekly dependency updates are configured in
`.github/dependabot.yml` for repositories hosted on GitHub.

On Windows PowerShell with script execution disabled, use `npm.cmd` in place
of `npm` (for example, `npm.cmd ci` and `npm.cmd run check`).

See the [6 November 2026 security update report](docs/security-update-2026-11-06.md)
for the audit results, compatibility checks, and pending Node.js security release.

## 📚 Tech Stack

- **Frontend Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Design System**: Figma-integrated components

## ✨ About This Project

This portfolio represents the future of web development—where human creativity meets artificial intelligence. Every line of code, every component, and every design decision was optimized through AI-assisted development, resulting in a website that embodies both artistic vision and technical excellence.

---

*Powered by Sticky AI, Figma, Google Gemini, and Claude Anthropic*

