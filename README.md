# CCUI Webapp — Beta

Lightweight React + Vite web frontend for the CCUI site. This repo contains a small client-side application using React Router for navigation and Tailwind-style class names for styling. The project is in early beta: stable enough to explore and develop, but expect breaking changes and rough edges.

Status: BETA

- Purpose: provide a simple multi-page front-end shell (layout, navigation, pages) for CCUI content and prototypes.
- Stability: feature-complete for routing and basic pages. UX, accessibility, and some components are still in progress.

## Quick start

Requirements
- Node.js 16+ (LTS recommended)
- npm (or yarn/pnpm)

Install

```bash
npm install
```

Run dev server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

## Routes / Pages

The app uses React Router (object-based routes in `src/routes.jsx`) with `App.jsx` as the shared layout. Current pages:

- `/` — Homepage
- `/advisors` — Board of Advisors
- `/contact` — Contact Us
- `/finlit` — Financial Literacy
- `/students` — Student Team
- `/services` — Services & Products
- `/support` — Support
- `/merch` — Merchandise

Shared layout: `src/App.jsx` renders the header/nav and a `<Outlet />` for child routes.

## Project structure

- `index.html` — Vite entry
- `src/main.jsx` — Router setup and app bootstrap
- `src/routes.jsx` — Route objects used by `createBrowserRouter`
- `src/App.jsx` — App layout (nav, footer, shared state)
- `src/pages/*` — Page components (one file per route)

## Development notes

- Keep `App.jsx` as the single layout when pages share navigation or global providers (auth, theme, state).
- When adding a new page component, export a default React component and add its route to `src/routes.jsx`.
- If the dev server fails to render, check the browser console and Vite terminal for import or runtime errors (a broken page export will prevent the router from mounting).

## Known issues

- Beta: many page components are placeholders — expand with real content.
- Styling is minimal; Tailwind or other utilities may need configuration.
- Routes are client-side only (no server-side rendering configured).

## Contributing

1. Fork the repo and create a feature branch.
2. Keep changes small and focused.
3. Open a pull request describing the change and any manual steps to test.

Report issues by opening GitHub issues including reproduction steps and console errors when applicable.

## License

MIT — see `LICENSE` (or add one) for details.

---

This README is a concise beta-stage guide — expand sections as the project matures.
