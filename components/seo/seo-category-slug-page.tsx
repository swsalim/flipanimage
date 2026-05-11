import { notFound } from 'next/navigation';

import SeoPageTemplate from '@/components/seo/seo-page-template';

import { categorySegment, getPageByPath } from '@/content/seo-pages';
import type { SeoCategory } from '@/content/seo-pages/types';

export default async function SeoCategorySlugPage({
  category,
  slug,
}: {
  category: SeoCategory;
  slug: string;
}) {
  const pathname = `/${categorySegment(category)}/${slug}`;
  const page = getPageByPath(pathname);
  if (!page || page.category !== category) {
    notFound();
  }

  return <SeoPageTemplate page={page} />;
}
