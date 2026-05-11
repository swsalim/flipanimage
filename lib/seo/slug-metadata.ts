import type { Metadata } from 'next';

import type { SeoCategory } from '@/content/seo-pages/types';
import { categorySegment, getPageByPath } from '@/content/seo-pages';

import { metadataForSeoPage } from '@/lib/seo/metadata';

export async function seoCategorySlugMetadata(
  category: SeoCategory,
  params: Promise<{ slug: string }>,
): Promise<Metadata> {
  const { slug } = await params;
  const pathname = `/${categorySegment(category)}/${slug}`;
  const page = getPageByPath(pathname);
  if (!page || page.category !== category) {
    return { title: 'Not found' };
  }
  return metadataForSeoPage(page);
}
