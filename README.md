# Product Landing Page (React + Vite)

A React/Vite recreation of a modern ecommerce-style landing page (inspired by mellowsleep.com), themed with muted sage, warm neutrals, soft minimalism, and Scandinavian spa tones.

## What's in this project

- `src/App.jsx` – Main page markup and content sections (ticker, nav, hero, product cards, story block, footer).
- `src/styles.css` – Global styling, theme tokens, layout rules, and responsive behavior.
- `src/main.jsx` – React entrypoint that mounts `App`.
- `vite.config.js` – Vite configuration (includes GitHub Pages base path).
- `.github/workflows/deploy.yml` – GitHub Actions workflow to build and deploy to GitHub Pages.

## Prerequisites

Before you can view the website locally, you need:

- **Node.js 20+** (recommended)
- **npm** (comes with Node)
- Network access that allows installing packages from npm registry

Check versions:

```bash
node -v
npm -v
```

## Install and run locally

From the project root:

```bash
npm install
npm run dev
```

Vite will print a local URL, typically:

- `http://localhost:5173/`

Open that URL in your browser to view the website.

## Build for production

```bash
npm run build
npm run preview
```

- `npm run build` outputs static files to `dist/`
- `npm run preview` serves the production build locally for final checking

## Deploying to GitHub Pages

This project is preconfigured for project-site deployment:

- Vite `base` is set to `/product-landing-page/` in `vite.config.js`
- Workflow file `.github/workflows/deploy.yml` builds and publishes `dist/`

### Required repository setup

1. Push this branch to GitHub.
2. In **GitHub → Settings → Pages**, set **Source** to **GitHub Actions**.
3. Ensure default branch is `main` (or update workflow trigger branch).
4. Push to `main` (or run workflow manually via **Actions → Deploy Vite site to GitHub Pages → Run workflow**).

After deploy succeeds, your site is available at:

- `https://<your-username>.github.io/product-landing-page/`

## Common issues

- **`vite: not found` when running `npm run dev`**
  - Run `npm install` first.
- **`403 Forbidden` during `npm install`**
  - Your environment/network policy is blocking npm package downloads.
  - Try running on a machine/network with full npm registry access.
- **Site loads but styles/assets are broken on GitHub Pages**
  - Confirm repository name matches `/product-landing-page/` or update `base` in `vite.config.js`.

## How to customize

- Update text/content in `src/App.jsx`
- Adjust colors, spacing, typography, and responsive behavior in `src/styles.css`
- Add image assets under `public/` and reference them in your components

## Scripts

- `npm run dev` – Start dev server
- `npm run build` – Build production bundle
- `npm run preview` – Preview production build locally
