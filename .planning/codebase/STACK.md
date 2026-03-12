# Technology Stack

**Analysis Date:** 2026-03-12

## Languages

**Primary:**
- JavaScript - Used throughout the application for all application logic
- JSX - Used in React components for UI rendering

**Secondary:**
- CSS - Used for styling via Tailwind CSS

## Runtime

**Environment:**
- Node.js - Runtime environment (version not pinned in repository)

**Package Manager:**
- npm - Primary package manager
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 15.3.1 - Full-stack React framework with server-side rendering and static generation
  - Entry points: `app/layout.js`, `app/page.js`
  - Uses Next.js App Router (app/ directory)
  - Turbopack enabled for development builds via `next dev --turbopack`

**UI & Rendering:**
- React 19.0.0 - UI library for building components
- React DOM 19.0.0 - React rendering for web

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework
- @tailwindcss/postcss 4 - PostCSS plugin for Tailwind
- PostCSS - CSS preprocessor with Tailwind plugin

**Web Fonts:**
- Next.js Font Google - Integrated Google Fonts: `Inter` (variable font) and `Geist Mono`
  - Configured in `app/layout.js` with font variables

**Development & Build:**
- Next.js 15.3.1 - Handles build and dev server
- ESLint 9 - Code linting
- eslint-config-next 15.3.1 - Next.js ESLint configuration
- @eslint/eslintrc 3 - ESLint compatibility layer for flat config

## Key Dependencies

**Critical:**
- next 15.3.1 - Framework that bundles all core functionality
- react 19.0.0 - UI framework
- tailwindcss 4 - Styling engine

**Build & DevTools:**
- @tailwindcss/postcss 4 - CSS processing
- eslint 9 - Linting (enforced via next lint)
- eslint-config-next 15.3.1 - Next.js best practices linting

## Configuration

**Environment:**
- `.env*` files supported but not tracked (as per `.gitignore`)
- No environment variables currently used in codebase
- Configuration is minimal - Next.js uses sensible defaults

**Build:**
- `next.config.mjs` - Next.js configuration (currently empty/minimal)
- `postcss.config.mjs` - PostCSS configuration with Tailwind plugin
- `jsconfig.json` - JavaScript path aliases: `@/*` maps to project root
- `eslint.config.mjs` - ESLint configuration extending "next/core-web-vitals"

**Path Aliases:**
- `@/*` resolves to project root, allowing imports like `@/app/components/Header`

## Platform Requirements

**Development:**
- Node.js (version not specified, supports npm)
- npm (or compatible package manager)
- Code editor (no specific requirements)

**Production:**
- Node.js runtime (for server-side rendering and API routes)
- Vercel-ready (`.vercel` directory in `.gitignore` indicates Vercel deployment target)
- Alternatively: any Node.js hosting that supports Next.js

## Build & Run Scripts

**Available Commands:**
```bash
npm run dev       # Start dev server with Turbopack (port 3000)
npm run build     # Create production build
npm start         # Start production server
npm run lint      # Run ESLint
```

## Asset Pipeline

**Image Handling:**
- Next.js Image component used throughout for optimization
- Static images stored in `public/` directory:
  - `/profile.png` - Developer profile picture
  - `/social/*.svg` - Social media icons
  - `/company_logo/*.png` - Company logos
  - `/projects_logo/*.png` - Project logos

---

*Stack analysis: 2026-03-12*
