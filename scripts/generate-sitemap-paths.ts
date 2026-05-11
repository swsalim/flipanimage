import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { getAllSeoPathnames } from '../content/seo-pages/registry';

const LEGAL = ['/legal/privacy-policy', '/legal/terms-and-conditions'];
const paths = [...new Set([...getAllSeoPathnames(), ...LEGAL])].sort();

const out = resolve(process.cwd(), '.sitemap-paths.json');
writeFileSync(out, JSON.stringify(paths), 'utf-8');
