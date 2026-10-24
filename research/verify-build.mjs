import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

// Run after `npm run build`; pass --preview after a VERCEL_ENV=preview build.
const preview = process.argv.includes('--preview');
const origin = (process.env.SITE_URL || 'https://abogadamica.vercel.app/').replace(/\/$/, '');
for (const route of ['', 'familia/']) {
  const html = await readFile(new URL(`../dist/${route}index.html`, import.meta.url), 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one h1`);
  assert.ok(html.includes(`content="${preview ? 'noindex, nofollow' : 'index, follow'}"`), `${route}: robots`);
  assert.ok(html.includes(`rel="canonical" href="${origin}/${route}"`), `${route}: canonical`);
  assert.ok(html.includes(`${origin}/images/social-card.png`), `${route}: social image`);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(schema['@graph'].length, 4);
  const service = schema['@graph'].find(item => item['@type'] === 'LegalService');
  assert.equal(service.address, undefined);
  assert.equal(service.openingHours, undefined);
  assert.equal(service.sameAs.length, 3);
  assert.ok(!html.includes('Viamonte'), 'No physical address published');
  for (const match of html.matchAll(/(?:src|href)="(\/(?:images|_astro)\/[^"?#]+)"/g)) {
    await access(new URL(`../dist${match[1]}`, import.meta.url));
  }
}
const robots = await readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8');
assert.ok(robots.includes(preview ? 'Disallow: /' : 'Allow: /'));
const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
assert.ok(sitemap.includes(`<loc>${origin}/</loc>`));
assert.ok(sitemap.includes(`<loc>${origin}/familia/</loc>`));
console.log(`OK: ${preview ? 'Preview excluded' : 'Production indexable'}, two routes, canonicals, JSON-LD, assets and sitemap.`);
