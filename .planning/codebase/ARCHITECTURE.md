# Architecture

**Analysis Date:** 2026-03-12

## Pattern Overview

**Overall:** Next.js Server-Side Rendering (SSR) with Component-Based UI Architecture

**Key Characteristics:**
- Server-rendered React application using Next.js App Router
- Composition of presentational components (Header, ExperienceItem, ProjectItem)
- Static content delivery with data defined in page components
- Responsive design using Tailwind CSS utility classes
- Client-side interactivity in leaf components (marked with "use client")

## Layers

**Presentation Layer:**
- Purpose: Render user-facing UI components and sections
- Location: `app/components/`, `app/page.js`, `app/layout.js`
- Contains: React functional components, styled layouts, form rendering
- Depends on: Next.js Image component, Next.js Link component, CSS utilities
- Used by: Server-rendered pages, client-side navigation

**Layout Layer:**
- Purpose: Define the root HTML structure, metadata, and global styling
- Location: `app/layout.js`
- Contains: RootLayout component with metadata, font configuration, global CSS imports
- Depends on: Next.js font system, global stylesheets
- Used by: All page routes

**Page Layer:**
- Purpose: Aggregate components and data into complete pages
- Location: `app/page.js`
- Contains: Home page with experience and project sections, data arrays, page composition
- Depends on: Presentation layer components
- Used by: Next.js routing system

**Styling Layer:**
- Purpose: Define theme, colors, and responsive breakpoints
- Location: `app/globals.css`
- Contains: Tailwind CSS theme configuration, custom color variables
- Depends on: Tailwind CSS framework
- Used by: All components via utility class names

## Data Flow

**Component Initialization:**

1. User requests `/` (home page)
2. Next.js App Router invokes `app/page.js` (Home component)
3. Home component maintains local state: `experiences` array, `projects` array
4. Home component renders layout structure with Header, sections, and components

**Experience Section Flow:**

1. Home component iterates over `experiences` array
2. Maps each experience object to ExperienceItem component via `.map()`
3. ExperienceItem destructures props (title, company, period, description, projects, technologies, image)
4. Component renders formatted job card with image, text, and technology badges

**Project Section Flow:**

1. Home component iterates over `projects` array with filtering logic
2. Each project object containing image and domain passed to ProjectItem component
3. ProjectItem extracts domain name using regex and renders clickable project card
4. Link navigates to project domain in new tab

**Header Initialization:**

1. Header component defines local data: `developerName`, `jobTitle`, `socialLinks`
2. Renders profile image, name, title, and social media icon links
3. Each social link is a Next.js Link component with target="_blank"

**State Management:**
- No global state management (Redux, Zustand, Context)
- Data embedded directly in component scope as variables
- Component props flow uni-directionally from parent to child
- No state mutation; components are pure functions receiving props

## Key Abstractions

**ExperienceItem Component:**
- Purpose: Encapsulate rendering of a work experience block
- Examples: `app/components/ExperienceItem.js`
- Pattern: Presentational component receiving destructured props, pure function
- Maps structured data (experience object) to formatted UI (styled card with sections)

**ProjectItem Component:**
- Purpose: Encapsulate rendering of a project card with link
- Examples: `app/components/ProjectItem.js`
- Pattern: Client component ("use client") for hover interactions
- Transforms data (domain URL) into display-friendly text and clickable elements

**Header Component:**
- Purpose: Encapsulate the site header with profile and navigation
- Examples: `app/components/Header.js`
- Pattern: Reusable presentational component with embedded data
- Handles profile image display and social media links

**RootLayout:**
- Purpose: Wrapper for all pages providing consistent HTML structure and metadata
- Examples: `app/layout.js`
- Pattern: Next.js layout component with font loading and global CSS
- Renders gradient background and applies typography configuration

## Entry Points

**Home Page:**
- Location: `app/page.js`
- Triggers: Route `/` (default Next.js route)
- Responsibilities: Aggregate and display portfolio content (experiences, projects), manage section layout, provide page structure

**Root Layout:**
- Location: `app/layout.js`
- Triggers: Wraps all routes in the application
- Responsibilities: Set HTML metadata, load Google Fonts, apply global styles, render body element with gradient background

**API Endpoints:**
- Not applicable - no API routes defined

## Error Handling

**Strategy:** Graceful degradation with null checks in rendering logic

**Patterns:**
- Conditional rendering in ProjectItem: checks for null/undefined project properties before rendering (line 128-130 in `app/page.js`)
- Empty array fallback: Experience and project arrays render with `.map()` which safely handles empty arrays
- Image fallback: Next.js Image component handles missing images gracefully
- No try-catch blocks; relies on React error boundaries (default Next.js behavior)

## Cross-Cutting Concerns

**Logging:** None currently implemented. Console methods not used.

**Validation:** Minimal - only null checks on project data before rendering. No schema validation (e.g., TypeScript, Zod).

**Authentication:** Not applicable - portfolio is public content, no authentication required.

**Internationalization:** Spanish content hardcoded in English codebase (metadata in Spanish, component text in Spanish/English mixed). No i18n framework (i18next, next-intl) implemented.

**Responsive Design:** Implemented via Tailwind CSS breakpoints (md:) throughout components. Breakpoint: `md` = 768px.

---

*Architecture analysis: 2026-03-12*
