// @ts-check
import { defineConfig } from 'astro/config';

// Works on both:
//   - GitHub Pages default: https://spartan-tyres.github.io/website/  (defaults below)
//   - Custom domain:        set SITE_URL + SITE_BASE in the build env.
//       SITE_URL=https://spartantyres.co.uk SITE_BASE=/
// All internal links use import.meta.env.BASE_URL, so flipping env is enough.
const site = process.env.SITE_URL ?? 'https://spartan-tyres.github.io';
const base = process.env.SITE_BASE ?? '/website';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
