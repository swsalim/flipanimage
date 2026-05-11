import type { Metadata } from 'next';

import SeoHubPage from '@/components/seo/seo-hub-page';

import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Compare: simple flip alternatives',
  description:
    'Fast browser-based flipping compared to heavyweight design suites — mirror photos without extra apps.',
  alternates: { canonical: '/compare' },
  openGraph: { url: absoluteUrl('/compare') },
};

export default function CompareHubPage() {
  return <SeoHubPage category="compare" />;
}
