export type SeoCategory = 'tool' | 'guide' | 'platform' | 'use-case' | 'compare';

export type FAQItem = {
  category: string;
  question: string;
  answer: string;
};

export type HowToStep = {
  name: string;
  text: string;
};

export type SeoSection = {
  heading: string;
  body: string;
};

export type SeoPageConfig = {
  category: SeoCategory;
  slug: string;
  title: string;
  /** Meta description (~150–165 chars typical in search previews) */
  description: string;
  h1: string;
  /** Opening paragraph directly under H1 */
  intro: string;
  /** Extra paragraph below intro (supports thin-content depth without one giant blob) */
  introSecondary?: string;
  /** Short bullets beside or under the hero; quick wins for skim readers */
  takeawayBullets?: string[];
  /** Longer teaser on hub listing cards (prefer 2–4 full sentences); falls back to intro if omitted */
  listingBlurb?: string;
  sections?: SeoSection[];
  steps?: HowToStep[];
  faq: FAQItem[];
  /** Optional FAQ block heading/copy (scoped to programmatic pages) */
  faqEyebrow?: string;
  faqTitle?: string;
  faqIntro?: string;
  keywords: string[];
  relatedPaths: string[];
  /** Suggested starting flip in the embedded tool */
  initialFlip?: 'horizontal' | 'vertical';
};

const segmentByCategory: Record<SeoCategory, string> = {
  tool: 'tools',
  guide: 'guides',
  platform: 'platform',
  'use-case': 'use-cases',
  compare: 'compare',
};

export function pathnameForPage(page: SeoPageConfig): string {
  return `/${segmentByCategory[page.category]}/${page.slug}`;
}

export function categorySegment(category: SeoCategory): string {
  return segmentByCategory[category];
}
