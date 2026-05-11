export type { FAQItem, HowToStep, SeoCategory, SeoPageConfig, SeoSection } from './types';
export {
  categorySegment,
  pathnameForPage,
  getAllSeoPages,
  getPageByPath,
  getPagesByCategory,
  resolveRelatedPages,
  getAllSeoPathnames,
} from './registry';
