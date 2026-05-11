import type { Metadata } from 'next';

import SeoHubPage from '@/components/seo/seo-hub-page';

import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Image flip tools',
  description:
    'Free tools to flip and mirror JPG, PNG, WebP, and more — format-specific pages and directional flips.',
  alternates: { canonical: '/tools' },
  openGraph: { url: absoluteUrl('/tools') },
};

export default function ToolsHubPage() {
  return <SeoHubPage category="tool" />;
}
