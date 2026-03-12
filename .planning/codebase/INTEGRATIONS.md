# External Integrations

**Analysis Date:** 2026-03-12

## APIs & External Services

**Third-Party Integrations:**
- None detected - This is a static portfolio website with no external API calls

**Social Media Links:**
- LinkedIn - Direct link to profile (`https://linkedin.com/in/goyocancio`)
- GitHub - Direct link to profile (`https://github.com/McGregory99`)
- X (Twitter) - Direct link to profile (`https://x.com/goyo_is_a_dev`)
- YouTube - Direct link to channel (`https://www.youtube.com/@goyo_is_a_dev`)
  - Implementation: Static links in `app/components/Header.js` with hardcoded URLs

**Portfolio Projects:**
- BlockHead App - External portfolio project link (`https://blockheadapp.com`)
  - Implementation: Static link in `app/page.js`

## Data Storage

**Databases:**
- None - This is a static portfolio site with no backend data storage

**File Storage:**
- Local filesystem only - Static assets stored in `public/` directory
- No cloud storage integrations

**Caching:**
- Next.js built-in caching for static assets
- No external caching service

## Authentication & Identity

**Auth Provider:**
- None - No authentication system implemented
- Portfolio is public with no login/user management

## Monitoring & Observability

**Error Tracking:**
- None detected - No error tracking service integrated

**Logs:**
- Standard console logging via browser DevTools
- No centralized logging service

## CI/CD & Deployment

**Hosting:**
- Vercel (inferred from `.vercel/` in `.gitignore` and Next.js native support)
- Alternative: Any Node.js hosting platform supporting Next.js

**CI Pipeline:**
- None detected - No automated testing or CI configuration found

## Environment Configuration

**Required env vars:**
- None currently used - Application works with zero environment configuration

**Secrets location:**
- No secrets in codebase
- `.env*` files are ignored but can be used if needed in future

## Webhooks & Callbacks

**Incoming:**
- None - Static portfolio with no incoming webhooks

**Outgoing:**
- None - No outbound webhook calls

## Content Structure

**Data Format:**
- All content is hardcoded/static in JavaScript objects
- Work experiences stored in `app/page.js` as array of objects with properties: title, company, period, description, projects, technologies, image
- Projects stored in `app/page.js` as array of objects with properties: image, domain
- No dynamic content loading or CMS integration

**Static Content Location:**
- Professional experience data: `app/page.js` (lines 7-54)
- Projects portfolio: `app/page.js` (lines 57-78)
- Header/social information: `app/components/Header.js` (lines 10-39)

## Next.js Specific Features Used

**Image Optimization:**
- Next.js `Image` component with automatic optimization
- Images in: `app/components/Header.js`, `app/components/ExperienceItem.js`, `app/components/ProjectItem.js`

**Font Optimization:**
- Next.js `next/font/google` for Google Fonts
- Fonts: Inter (body text) and Geist Mono (monospace)
- Configured with font-display swap for performance

**Link Optimization:**
- Next.js `Link` component for client-side navigation
- Used in: `app/components/Header.js`, `app/components/ProjectItem.js`

**Metadata:**
- Static metadata in `app/layout.js` with title and description
- Language set to Spanish (`lang="es"`)

---

*Integration audit: 2026-03-12*
