import { getPagesByCategory } from '@/content/seo-pages';

import SeoCategorySlugPage from '@/components/seo/seo-category-slug-page';

import { seoCategorySlugMetadata } from '@/lib/seo/slug-metadata';

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPagesByCategory('guide').map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  return seoCategorySlugMetadata('guide', params);
}

export default async function GuideSlugPage({ params }: Props) {
  const { slug } = await params;
  return <SeoCategorySlugPage category="guide" slug={slug} />;
}
