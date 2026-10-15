# wiffletree.com

Marketing website for [Wiffletree](https://github.com/Vyttle-LLC/wiffletree): a single landing page built with Next.js and exported as a static site.

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run lint
npx tsc --noEmit
```

## Build

```sh
npm run build   # static export to out/
```

`out/` is plain HTML, CSS and JS. Preview it with any static server, for example `npx serve out`.

Use Node 20, the version Netlify builds with. Locally, Node 24 has intermittently killed `next build` during its TypeScript step.

## Deploy

Netlify builds from `netlify.toml`: `npm run build` on Node 20, publishing `out/`. Connect the repo in Netlify and point the `wiffletree.com` domain at the site. There is no server and no environment variables.

## Editing

- **Copy and data** live in `src/lib/content.ts`: links, the install command, principles, gallery tabs and captions, event-log rows, rig cards.
- **Design tokens** are CSS custom properties at the top of `src/app/globals.css`. Signal red appears only inside the logo files; don't use it in UI.
- **Animations** are CSS keyframes in `globals.css`. Their timing constraints are commented where they live (`globals.css`, `HeroRig.tsx`, `RigLanes.tsx`).
- **Screenshots** in `public/screens/` are 1280×820 exports from the app. Re-export them when the UI changes.
- **Social image** `public/og.png` (1200×630) was composed from the lockup, the hero copy and the coordinator screenshot. Recompose it if those change.
