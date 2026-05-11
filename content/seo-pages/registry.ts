import type { SeoCategory, SeoPageConfig } from './types';
import { categorySegment, pathnameForPage } from './types';
import { comparePages } from './pages/compare';
import { guidePages } from './pages/guides';
import { platformPages } from './pages/platform';
import { toolPages } from './pages/tools';
import { useCasePages } from './pages/use-cases';

const allPages: SeoPageConfig[] = [
  ...toolPages,
  ...useCasePages,
  ...platformPages,
  ...guidePages,
  ...comparePages,
];

const pageByPath = new Map<string, SeoPageConfig>();
for (const page of allPages) {
  pageByPath.set(pathnameForPage(page), page);
}

export function getAllSeoPages(): SeoPageConfig[] {
  return allPages;
}

export function getPageByPath(pathname: string): SeoPageConfig | undefined {
  const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return pageByPath.get(normalized || '/');
}

export function getPagesByCategory(category: SeoCategory): SeoPageConfig[] {
  return allPages.filter((p) => p.category === category);
}

export function resolveRelatedPages(page: SeoPageConfig): SeoPageConfig[] {
  const resolved: SeoPageConfig[] = [];
  for (const path of page.relatedPaths) {
    const p = getPageByPath(path);
    if (p) resolved.push(p);
  }
  return resolved;
}

/** All indexable pathnames for sitemap (includes hubs + SEO detail pages + legal from static routes) */
export function getAllSeoPathnames(): string[] {
  const categories: SeoCategory[] = ['tool', 'use-case', 'platform', 'guide', 'compare'];
  const hubs = categories.map((c) => `/${categorySegment(c)}`);
  const detail = allPages.map(pathnameForPage);
  const home = ['/'];
  return [...new Set([...home, ...hubs, ...detail])].sort();
}

export { pathnameForPage, categorySegment } from './types';
