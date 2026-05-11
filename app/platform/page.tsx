import type { Metadata } from 'next';

import SeoHubPage from '@/components/seo/seo-hub-page';

import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Flip images by device & platform',
  description:
    'Flip or mirror photos on iPhone, Android, Instagram, TikTok, WhatsApp, and more using your browser.',
  alternates: { canonical: '/platform' },
  openGraph: { url: absoluteUrl('/platform') },
};

export default function PlatformHubPage() {
  return <SeoHubPage category="platform" />;
}
