# Codebase Structure

**Analysis Date:** 2026-03-12

## Directory Layout

```
portfolio-web/
├── app/                    # Next.js App Router directory
│   ├── components/         # Reusable React components
│   ├── layout.js          # Root layout component
│   ├── page.js            # Home page component
│   ├── globals.css        # Global styles and theme
│   └── favicon.ico        # Site favicon
├── public/                # Static assets served at root
│   ├── company_logo/      # Company logos
│   ├── projects_logo/     # Project thumbnails
│   ├── social/            # Social media icons
│   └── profile.png        # Developer profile photo
├── .planning/             # GSD planning documents
│   └── codebase/          # Codebase analysis documents
├── next.config.mjs        # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── jsconfig.json          # JavaScript path aliases
├── package.json           # Dependencies and scripts
├── package-lock.json      # Dependency lock file
├── eslint.config.mjs      # ESLint rules configuration
└── README.md              # Project documentation
```

## Directory Purposes

**app:**
- Purpose: Next.js application source code using App Router pattern
- Contains: Page components, layout components, global styles
- Key files: `page.js` (home route), `layout.js` (root wrapper)

**app/components:**
- Purpose: Reusable presentational React components
- Contains: Header, ExperienceItem, ProjectItem components
- Key files: `Header.js`, `ExperienceItem.js`, `ProjectItem.js`

**public:**
- Purpose: Static assets served directly at the domain root
- Contains: Images, icons, favicons
- Key files: `profile.png` (developer photo), company and project logos, social icons

**public/company_logo:**
- Purpose: Company logos displayed in experience section
- Contains: `grasp.png`, `kpmg.png`, `uva.png`

**public/projects_logo:**
- Purpose: Project thumbnail images
- Contains: `blockheadapp.png` and other project images

**public/social:**
- Purpose: Social media icons rendered in header
- Contains: `linkedin.svg`, `github.svg`, `x.svg`, `youtube.svg`

**.planning/codebase:**
- Purpose: Architecture and code analysis documents
- Contains: ARCHITECTURE.md, STRUCTURE.md, CONVENTIONS.md, TESTING.md, CONCERNS.md, STACK.md, INTEGRATIONS.md
- Generated: Yes (created by GSD mapping tool)
- Committed: Yes (documented architecture)

## Key File Locations

**Entry Points:**
- `app/page.js`: Home page route - renders portfolio sections (experiences, projects)
- `app/layout.js`: Root layout - provides HTML wrapper, metadata, fonts, global styles

**Configuration:**
- `next.config.mjs`: Next.js build and runtime configuration (currently empty)
- `postcss.config.mjs`: PostCSS build pipeline configuration (loads Tailwind CSS plugin)
- `jsconfig.json`: JavaScript module path aliases (`@/*` → root directory)
- `eslint.config.mjs`: ESLint linting rules and configuration
- `package.json`: Project dependencies, scripts, and metadata

**Core Logic:**
- `app/components/Header.js`: Navigation header with profile and social links
- `app/components/ExperienceItem.js`: Renders individual work experience card
- `app/components/ProjectItem.js`: Renders individual project card with link
- `app/globals.css`: Tailwind CSS theme and custom color variables

**Styling:**
- `app/globals.css`: Global CSS import of Tailwind, custom theme colors
- Tailwind CSS utility classes applied inline in JSX (no separate CSS files per component)

**Static Assets:**
- `public/profile.png`: Developer profile photo
- `public/company_logo/*.png`: Company/organization logos
- `public/projects_logo/*.png`: Project thumbnail images
- `public/social/*.svg`: Social media platform icons
- `app/favicon.ico`: Browser tab icon

## Naming Conventions

**Files:**
- Component files: PascalCase (e.g., `Header.js`, `ExperienceItem.js`)
- Page files: camelCase (e.g., `page.js`, `layout.js`)
- Configuration files: kebab-case with extensions (e.g., `next.config.mjs`, `postcss.config.mjs`, `eslint.config.mjs`)
- Global styles: `globals.css`
- Assets: kebab-case or snake_case depending on content (e.g., `company_logo/`, `projects_logo/`)

**Directories:**
- Feature directories: lowercase (e.g., `components/`, `public/`)
- Nested asset directories: snake_case (e.g., `company_logo/`, `projects_logo/`)

**Variables and Functions:**
- Component names: PascalCase (e.g., `Header`, `ExperienceItem`, `ProjectItem`)
- Function names: camelCase (e.g., `RootLayout`, `Home`)
- Constants: camelCase (e.g., `developerName`, `socialLinks`, `experiences`)
- Data objects: camelCase (e.g., `experience.title`, `project.image`)

**Types and Props:**
- No TypeScript - JavaScript only
- Props destructured in function parameters: `{ experience }`, `{ project }`

## Where to Add New Code

**New Feature (e.g., new portfolio section):**
- Primary code: `app/page.js` - add new section JSX and data array
- Component: Create new component in `app/components/NewSection.js`
- Tests: Not applicable (no test framework configured)

**New Component/Module:**
- Implementation: `app/components/ComponentName.js`
- Export: Named export: `export default function ComponentName(props) { ... }`
- Import in page: `import ComponentName from "./components/ComponentName"`
- Props pattern: Destructure in function parameters for clarity

**Utilities:**
- Shared helpers: No utilities directory currently exists. Create `app/lib/` or `app/utils/` if needed
- Example path: `app/lib/helpers.js`
- Export as named functions and import with curly braces: `import { helperFunction } from "@/lib/helpers"`

**Styling New Components:**
- Use Tailwind CSS utility classes inline in JSX
- Add custom colors to `app/globals.css` @theme block if needed
- Example: `className="bg-accent text-foreground rounded-lg p-4"`
- Responsive: Use `md:` prefix for tablet/desktop styles (e.g., `md:text-xl`)

**Static Assets:**
- Place images in `public/` subdirectories based on category
- Reference from JSX: `src="/category/filename.ext"`
- Use Next.js Image component: `<Image src="/path" alt="description" fill />`

**Configuration Changes:**
- Tailwind theme: Edit `app/globals.css` @theme block
- ESLint rules: Edit `eslint.config.mjs`
- Next.js behavior: Edit `next.config.mjs`
- Path aliases: Edit `jsconfig.json` paths object

## Special Directories

**app:**
- Purpose: Next.js App Router root directory
- Generated: No (manually created)
- Committed: Yes (source code)

**public:**
- Purpose: Static file serving
- Generated: No (manually created)
- Committed: Yes (static assets)

**node_modules:**
- Purpose: Installed npm dependencies
- Generated: Yes (created by `npm install`)
- Committed: No (ignored via .gitignore)

**.next:**
- Purpose: Next.js build output and cache
- Generated: Yes (created by `npm run build` or `npm run dev`)
- Committed: No (ignored via .gitignore)

**.git:**
- Purpose: Git repository metadata
- Generated: Yes (created by `git init`)
- Committed: Yes (essential for version control)

**.planning/codebase:**
- Purpose: GSD codebase analysis and planning documents
- Generated: Yes (created by mapping tools)
- Committed: Yes (referenced by planning tools)

---

*Structure analysis: 2026-03-12*
