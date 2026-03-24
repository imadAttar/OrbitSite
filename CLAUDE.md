# OrbitSite

Site vitrine pour Orbit IDE. React 19 + TypeScript + Vite + Tailwind CSS.
Deploy automatique sur GitHub Pages via GitHub Actions.

## Commands

```bash
npm run dev          # Dev server (localhost:5173)
npm run build        # TypeScript check + Vite production build
npx tsc --noEmit     # TypeScript typecheck only
```

## Stack

- React 19 + TypeScript (strict)
- Vite with Tailwind CSS v4 (@tailwindcss/vite)
- Single-page app, all components in src/App.tsx
- GitHub Pages deploy via .github/workflows/deploy.yml
- Base path: /OrbitSite/

## Conventions

- Tailwind utility classes only, no CSS modules
- Dark theme with orbit-blue/orbit-cyan color scheme
- French content, English code
- No GitHub links (repo is private)
- Download links point to GitHub Releases direct download URLs

## Do NOT

- Add links to the private GitHub repo
- Claim features that don't exist in Orbit IDE
- Use CSS frameworks other than Tailwind
- Create separate component files (keep in App.tsx for now)
