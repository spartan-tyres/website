// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Works on both:
//   - GitHub Pages default: https://spartan-tyres.github.io/website/  (defaults below)
//   - Custom domain:        set SITE_URL + SITE_BASE in the build env.
//       SITE_URL=https://spartan-tyres.com SITE_BASE=/
// All internal links use import.meta.env.BASE_URL, so flipping env is enough.
const site = process.env.SITE_URL ?? 'https://spartan-tyres.com';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
