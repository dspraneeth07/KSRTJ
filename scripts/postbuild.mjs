/**
 * Writes robots.txt and sitemap.xml into dist/ after the Vite build.
 *
 * The canonical host is not known until Netlify assigns one, so it is read
 * from the build environment rather than hard-coded:
 *   · URL              — Netlify's production site address
 *   · DEPLOY_PRIME_URL — branch and deploy-preview address
 *   · VITE_SITE_URL    — manual override, and what the app itself reads
 *
 * Deploy previews and branch builds get a noindex robots.txt, so a preview
 * never competes with the live site in search results.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve(process.cwd(), 'dist');

const site = (process.env.VITE_SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '')
  .trim()
  .replace(/\/$/, '');

const isProduction = (process.env.CONTEXT || 'production') === 'production';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'yearly' },
  { path: '/contact', priority: '0.8', changefreq: 'yearly' },
  { path: '/training', priority: '0.8', changefreq: 'monthly' },
  { path: '/training/certificate-courses', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/vastu', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/jyotisha', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/numerology', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/spiritual', priority: '0.7', changefreq: 'yearly' },
];

const today = new Date().toISOString().slice(0, 10);

async function main() {
  if (!site) {
    // Without a host there is nothing valid to write: a sitemap of relative
    // URLs is rejected, and a robots.txt pointing nowhere is worse than none.
    await writeFile(path.join(DIST, 'robots.txt'), 'User-agent: *\nAllow: /\n', 'utf8');
    console.log('postbuild: no site URL in env — wrote a minimal robots.txt, skipped sitemap');
    return;
  }

  if (!isProduction) {
    await writeFile(path.join(DIST, 'robots.txt'), 'User-agent: *\nDisallow: /\n', 'utf8');
    console.log(`postbuild: ${process.env.CONTEXT} build — robots.txt set to noindex`);
    return;
  }

  const urls = routes
    .map(
      (r) =>
        `  <url>\n    <loc>${site}${r.path}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${r.changefreq}</changefreq>\n` +
        `    <priority>${r.priority}</priority>\n  </url>`,
    )
    .join('\n');

  await writeFile(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    'utf8',
  );

  await writeFile(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`,
    'utf8',
  );

  console.log(`postbuild: wrote sitemap.xml (${routes.length} routes) and robots.txt for ${site}`);
}

main().catch((err) => {
  console.error('postbuild failed:', err);
  process.exit(1);
});
