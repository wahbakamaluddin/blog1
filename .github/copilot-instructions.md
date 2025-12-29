# Copilot Instructions for AI Agents

## Project Overview
- **Framework:** Next.js (App Router, TypeScript)
- **UI:** Tailwind CSS, custom color and font variables in `app/globals.css`
- **Package Manager:** pnpm (see `pnpm-workspace.yaml`)
- **Deployment:** Vercel (see README)

## Key Structure
- `app/` — Main app directory, uses Next.js App Router
  - `layout.tsx` — Root layout, applies global styles and SideNav
  - `globals.css` — Tailwind and custom CSS variables
  - `ui/` — Shared UI components (e.g., `sidenav/`, `fonts.ts`)
  - `general/`, `projects/`, `security/` — Route segments, each with its own `page.tsx`
- `public/` — Static assets
- `next.config.ts` — Next.js config
- `eslint.config.mjs` — ESLint config (uses `next/core-web-vitals` and `next/typescript`)
- `postcss.config.mjs` — Tailwind via PostCSS

## Patterns & Conventions
- **Navigation:**
  - Side navigation is in `app/ui/sidenav/sidenav.tsx`, with links defined in `NavLinks.tsx`.
  - Social media icons in `SocMedIcons.tsx`.
- **Fonts:**
  - Custom font setup in `app/ui/fonts.ts` using `next/font/google`.
- **Styling:**
  - Use Tailwind classes and custom CSS variables (see `globals.css`).
  - Dark mode supported via CSS media query.
- **Pages:**
  - Each route segment (`general`, `projects`, `security`) has its own `page.tsx`.
  - Some pages embed external content via `<iframe>`.
- **Component Import Paths:**
  - Use `@/` alias for absolute imports from `app/`.

## Developer Workflows
- **Start Dev Server:**
  - `pnpm dev` (preferred), or `npm run dev`, `yarn dev`, `bun dev`
- **Lint:**
  - `pnpm lint` (uses ESLint config in `eslint.config.mjs`)
- **Build:**
  - `pnpm build`
- **Deploy:**
  - Vercel (see README)

## Integration & External Dependencies
- **Icons:**
  - Uses `@heroicons/react` and `lucide-react` for icons.
- **Fonts:**
  - Uses `next/font/google` for Poppins font.
- **No backend or API routes** are present in this codebase.

## Examples
- To add a new navigation link, update the `links` array in `NavLinks.tsx`.
- To add a new page, create a new folder in `app/` with a `page.tsx` file.
- To update global styles, edit `app/globals.css`.

## References
- See `README.md` for getting started, build, and deployment instructions.
- See `app/layout.tsx` for the main layout and SideNav integration.
- See `app/ui/sidenav/` for navigation and social icons.

---
For more, see Next.js [App Router docs](https://nextjs.org/docs/app).