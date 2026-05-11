import type { Metadata } from 'next';

import SeoHubPage from '@/components/seo/seo-hub-page';

import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Use cases for flipping images',
  description:
    'Fix mirrored selfies, flip product shots, scanned documents, and more with free browser-based mirroring.',
  alternates: { canonical: '/use-cases' },
  openGraph: { url: absoluteUrl('/use-cases') },
};

export default function UseCasesHubPage() {
  return <SeoHubPage category="use-case" />;
}
