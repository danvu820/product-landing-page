# LunaCloud product landing page

A lightweight static website for a pillow product brand, inspired by modern DTC layouts.

## Pages

- `/` – primary marketing landing page
- `/contact/` – support contact form page
- `/tracking/` – order tracking entry page

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages (no 404 "Not found")

This repo includes `.github/workflows/deploy-pages.yml` to publish the static files directly with GitHub Actions.

1. Push to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually).
4. Open your Pages URL once deployment completes.
