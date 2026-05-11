import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

import type { SeoPageConfig } from '@/content/seo-pages';
import { pathnameForPage } from '@/content/seo-pages';

import { absoluteUrl } from '@/lib/utils';

export function metadataForSeoPage(page: SeoPageConfig): Metadata {
  const canonicalPath = pathnameForPage(page);
  const url = absoluteUrl(canonicalPath);

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      locale: 'en_US',
      type: 'website',
      siteName: siteConfig.siteName,
      images: [
        {
          url: siteConfig.openGraph.image,
          width: Number(siteConfig.openGraph.width),
          height: Number(siteConfig.openGraph.height),
          alt: siteConfig.openGraph.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      creator: siteConfig.creator,
      images: [siteConfig.openGraph.image],
    },
  };
}
