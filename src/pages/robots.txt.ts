import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const indexable = site && process.env.VERCEL_ENV !== 'preview';
  return new Response(indexable
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', site)}\n`
    : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
