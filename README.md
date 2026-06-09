# My PSEO Site — Astro Starter for Programmatic SEO

This is a minimal Astro starter template for programmatic SEO sites driven by a CSV file.

Quick start

```bash
npm install
npm run dev
```

Generate sitemap (run after build or locally):

```bash
npm run generate:sitemap
```

Deploy

- Push repo to GitHub and connect to Vercel. Configure `SITE` env var in Vercel to your domain.

Notes

- Replace `example.com` in `astro.config.mjs` and `public/robots.txt` with your real domain.
- Do not commit real AdSense publisher IDs or API keys.
- Ensure pages are substantive to avoid thin-content penalties.
