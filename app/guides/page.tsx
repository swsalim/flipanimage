import type { Metadata } from 'next';

import SeoHubPage from '@/components/seo/seo-hub-page';

import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Guides: flip & mirror images',
  description:
    'Learn how to flip, mirror, and fix selfies without installing heavy software.',
  alternates: { canonical: '/guides' },
  openGraph: { url: absoluteUrl('/guides') },
};

export default function GuidesHubPage() {
  return <SeoHubPage category="guide" />;
}
