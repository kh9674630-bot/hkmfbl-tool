# Deployment Guide for hkmfbl-tool

## Build
npm run build

This creates a static export in the `out/` directory.

## Deploy to Cloudflare Pages
npx wrangler pages deploy out --project-name hkmfbl --branch main --commit-dirty=true

## Configuration
- cloudflare.toml: publish = "out"
- next.config.ts: output: 'export'
- out/_redirects: handles SPA routing + static assets

## Troubleshooting
- If CSS/JS returns 404: ensure out/ is deployed, not .next/
- If Chinese characters garbled: check file encoding is UTF-8
