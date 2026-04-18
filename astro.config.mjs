// @ts-check
import { defineConfig } from 'astro/config';

// TODO: replace with your actual domain once DNS is set up.
// This is used to generate absolute URLs (sitemaps, canonical tags, etc.).
export default defineConfig({
  site: 'https://YOUR-DOMAIN.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
