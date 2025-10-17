# ScrollCraft

ScrollCraft is an interactive React front-end demo built with Vite, Tailwind CSS and GSAP. It showcases a parallax/scroll-driven experience and modular components for a stylized "scroll through the universe" UI.

This README provides quick setup, development and build instructions, an overview of the project structure, and notes about included assets (fonts, logos).

## Quick summary

- Tech: React (v19), Vite, Tailwind CSS, GSAP, OGL
- Routing: react-router-dom
- Build system: Vite
- Purpose: visual/interactive hero section and scroll-driven experience

## Prerequisites

- Node.js (LTS recommended) and npm or a compatible package manager
- Git (optional, for cloning or contribution)

Verify Node is available (example):

```bash
node -v
npm -v
```

## Install

From the repository root:

```bash
npm install
```

This will install the dependencies listed in `package.json` (React, GSAP, Tailwind, vite, etc.).

## Development (run)

Start the dev server with Vite:

```bash
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173).

## Build & Preview

Build a production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure (important files)

- `index.html` — App entry HTML.
- `src/main.jsx` — React app bootstrap.
- `src/App.jsx` — Router and top-level routes.
- `src/components/` — Reusable UI pieces (Hero, Navbar, UniverseScroll, etc.).
- `src/assets/` — Fonts, logos and static assets.
- `vite.config.js` — Vite configuration (React plugin, Tailwind plugin).
- `package.json` — Scripts and dependencies.

Notable components:

- `Hero.jsx` / `HeroForeground.jsx` — Landing hero and its foreground visuals.
- `UniverseScroll.jsx` — The scroll-driven experience page.
- `Navbar.jsx` — Top navigation used throughout.

## Fonts and third-party assets

The repository includes several font folders under `src/assets/fonts/` (Orbitron, Oxanium, Bebas_Neue, Cinzel_Decorative). Each font folder contains licensing files (OFL.txt). Respect their licences when redistributing.

## Development notes

- The app uses Tailwind CSS (configured via `tailwindcss` package and its Vite plugin). Styles are imported in `src/index.css`.
- GSAP is included for animations; you may see `@gsap/react` and `gsap` imports in components.
- 3D or WebGL elements use `ogl` where present.
- Routing is handled by `react-router-dom` (v7 API in use).

If you modify animations or scroll triggers, watch for cleanup of listeners and ScrollTrigger instances to avoid memory leaks during HMR.

## Linting

ESLint is configured and can be run with:

```bash
npm run lint
```

## Contributing

- Fork or branch the repository for feature work.
- Keep changes small and focused.
- Prefer adding component-level tests where practical.

If you want help adding features (e.g., accessibility improvements, performance optimizations, tests), open an issue or a PR with a description and small reproducible steps.

## Credits & license

- Project owner: Ninad-arakh
- Fonts: included fonts contain their own Open Font License files; see `src/assets/fonts/*/OFL.txt`.

The repository does not contain an explicit license file. Add `LICENSE` if you want to set a project license.

## Where to look next

- `src/components/Hero.jsx` — hero interaction and intersection observer example.
- `src/App.jsx` — routing setup.
- `vite.config.js` — plugin setup for React + Tailwind.

If you want, I can also:

- Add a `LICENSE` file (specify which license you want).
- Add a short developer guide for animation patterns used (GSAP + ScrollTrigger).
- Add scripts and CI configuration for linting and building.

---

Last updated: 2025-10-17
