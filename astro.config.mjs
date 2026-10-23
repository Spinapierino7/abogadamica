import { defineConfig } from 'astro/config';

// Set SITE_URL to the final HTTPS address when publishing.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  output: 'static',
});
