import { defineConfig } from 'astro/config';

// Keep the known production URL as a fallback so a missing variable cannot
// silently block indexing. Override when connecting a custom domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://abogadamica.vercel.app/',
  output: 'static',
});
