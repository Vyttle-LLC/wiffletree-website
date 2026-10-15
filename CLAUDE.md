# CLAUDE.md

## Project

Marketing website for **Wiffletree**, a native Mac workspace where Claude and Codex agents work as a team. One landing page, ported from a hand-built static `index.html`.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript (strict mode)
- **Styling:** CSS custom properties in `src/app/globals.css` and inline `style`; no Tailwind
- **Fonts:** Instrument Sans, Geist Mono (via `next/font/google`)
- **Deployment:** Netlify (static site, publish dir: `out/`, Node 20)

## Commands

- `npm run dev` — start dev server
- `npm run build` — static export to `out/`
- `npm run lint` — run ESLint
- No test suite configured

## Project Structure

- `src/app/` — layout (metadata, fonts), page, `globals.css` (tokens, keyframes, responsive rules)
- `src/components/` — one component per page section, plus small shared pieces
- `src/lib/content.ts` — repeated data and links

## Coding Conventions

- **Components:** `export default function` pattern, inline prop types
- **Server/Client:** server components by default; `"use client"` only for `CopyButton`, `RigLanes` and `ScreenGallery`
- **Path alias:** `@/*` → `src/*`
- **Colors:** use CSS custom properties (`var(--text)`) via inline `style`; never use signal red outside the logo files
- **Responsive overrides** in `globals.css` use `!important` to beat inline styles
- **Animation rules** that set only timing must use longhands; the CSS minifier rewrites a name-less `animation` shorthand to `none`
- **Repeated data and links:** import from `@/lib/content`, not hardcoded per section
