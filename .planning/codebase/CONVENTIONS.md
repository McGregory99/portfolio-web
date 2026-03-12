# Coding Conventions

**Analysis Date:** 2026-03-12

## Naming Patterns

**Files:**
- Components use PascalCase: `Header.js`, `ProjectItem.js`, `ExperienceItem.js`
- Pages use camelCase or PascalCase: `page.js`, `layout.js`
- CSS uses camelCase: `globals.css`

**Functions:**
- Component functions use PascalCase (React convention): `Header()`, `ProjectItem()`, `ExperienceItem()`
- Regular functions use camelCase: `displayName`, `developerName`

**Variables:**
- Constants (config objects) use camelCase: `experiences`, `projects`, `socialLinks`, `developerName`, `jobTitle`
- Variables scoped within components use camelCase: `image`, `domain`, `displayName`

**Types:**
- Not detected (JavaScript, not TypeScript)

## Code Style

**Formatting:**
- ESLint v9 configured via `eslint.config.mjs`
- Uses "next/core-web-vitals" preset
- 4-space indentation (observed in code)
- No Prettier configuration detected; uses ESLint defaults

**Linting:**
- Tool: ESLint v9 with `@eslint/eslintrc` v3
- Configuration: `eslint.config.mjs` at project root
- Preset: `next/core-web-vitals` (enforces Next.js best practices and Core Web Vitals)
- Run command: `npm run lint` (configured as `next lint`)

## Import Organization

**Order:**
1. Next.js framework imports: `import Image from "next/image"`
2. Standard library/framework imports: `import Link from "next/link"`
3. Local component imports: `import Header from "./components/Header"`
4. CSS/styling imports: `import "./globals.css"`

**Path Aliases:**
- Not detected (no path aliases configured)
- Relative imports used: `./components/Header`, `./components/ExperienceItem`

## Error Handling

**Patterns:**
- Conditional null/empty checks in JSX: `if (!project || !project.image || !project.domain) { return null; }`
- Silent fallback for missing data (returns `null` without logging)
- No try-catch blocks detected in current codebase
- No error boundaries detected

## Logging

**Framework:** Not detected (no logging library)

**Patterns:**
- `new Date().getFullYear()` used inline for dynamic content
- No structured logging observed
- No debug or info logging calls detected

## Comments

**When to Comment:**
- JSDoc blocks used for component documentation
- Example: `/** * Header component for the portfolio website * Displays the developer's name, profile picture, and social media links */`
- Inline comments for non-obvious logic: `// Extract just the domain name part from the full URL for display`
- Commented-out code blocks preserved: Lines 21-34 in `page.js`, lines 62-77 in `page.js`, line 68 in `ExperienceItem.js`

**JSDoc/TSDoc:**
- Used to document component purpose and props
- Pattern: `/** * [Component Name] * [Description] */` above component function
- Applied to: `Header.js`, `ProjectItem.js`, `ExperienceItem.js`

## Function Design

**Size:**
- Small to medium functions (30-90 lines)
- Main page component (`page.js`) is ~150 lines, includes both logic and JSX
- Component functions rarely exceed 50 lines

**Parameters:**
- Destructured props: `function Header()`, `function ProjectItem({ project })`
- Preference for destructuring over accessing `props.x`

**Return Values:**
- Functions return JSX directly (React functional components)
- Some functions return `null` for conditional rendering

## Module Design

**Exports:**
- Default exports used consistently: `export default function Header() { }`
- All components are default exports

**Barrel Files:**
- Not detected (no `index.js` files exporting multiple components)
- Each component file exports itself directly

## Styling

**Framework:** Tailwind CSS v4 with @tailwindcss/postcss v4

**Pattern:**
- Inline utility classes (Tailwind): `className="flex items-center gap-2 md:gap-8"`
- CSS custom theme variables in `globals.css`: `--color-foreground`, `--color-accent`
- Responsive design: `text-sm md:text-xl` (mobile-first with medium breakpoint)
- Hover and transition states: `hover:scale-110`, `hover:shadow-lg`, `hover:-translate-y-1`, `transition-transform`

---

*Convention analysis: 2026-03-12*
