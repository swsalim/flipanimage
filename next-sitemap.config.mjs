import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Canonical site origin for sitemap URLs. Set SITE_URL or NEXT_PUBLIC_BASE_URL in CI/production. */
const siteUrl =
  process.env.SITE_URL?.replace(/\/$/, '') ||
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') ||
  'http://localhost:3000';

const paths = JSON.parse(readFileSync(join(__dirname, '.sitemap-paths.json'), 'utf-8'));

function pathFields() {
  const lastmod = new Date().toISOString();
  return paths.map((path) => {
    const segments = path.split('/').filter(Boolean);
    const depth = segments.length;
    const priority =
      path === '/' ? 1 : depth === 1 ? 0.85 : depth === 2 ? 0.7 : 0.55;
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority,
      lastmod,
    };
  });
}

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  outDir: 'public',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  autoLastmod: false,
  exclude: ['/manifest.webmanifest', '/robots.txt', '/api/*'],
  additionalPaths: async () => pathFields(),
};

export default config;
