import { Suspense } from 'react';

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import { socialMediaPlatforms } from '@/config/platforms';
import { siteConfig } from '@/config/site';

import { absoluteUrl } from '@/lib/utils';

import { Container } from '@/components/container';
import Faqs from '@/components/faq';
import HeroGrid from '@/components/pages/homepage/hero-grid';
import WebsiteJsonLd from '@/components/structured-data/WebsiteJsonLd';
import { Wrapper } from '@/components/wrapper';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const DynamicGeneralFaq = dynamic(() => import('../../components/pages/homepage/faq'), {
  loading: () => <p>Loading...</p>,
});

export async function generateStaticParams() {
  return socialMediaPlatforms.map((platform) => ({
    slug: platform.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const platform = socialMediaPlatforms.find((p) => p.slug === slug);

  if (!platform) {
    notFound();
  }

  return {
    title: platform.title,
    description: platform.description,
    openGraph: {
      title: platform.title,
      description: platform.description,
      url: absoluteUrl(`/${slug}`),
      images: [
        {
          url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=Free ${platform.title}`),
          width: siteConfig.openGraph.width,
          height: siteConfig.openGraph.height,
          alt: platform.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: platform.title,
      description: platform.description,
      card: 'summary_large_image',
      creator: siteConfig.creator,
      images: [
        {
          url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=Free ${platform.title}`),
          width: siteConfig.openGraph.width,
          height: siteConfig.openGraph.height,
          alt: platform.title,
        },
      ],
    },
    alternates: {
      canonical: absoluteUrl(`/${slug}`),
    },
  };
}

const platformFAQMap: Record<
  string,
  () => Promise<{ category: string; question: string; answer: string }[]>
> = {
  facebook: () => import('@/config/faq').then((mod) => mod.facebookFAQ),
  linkedin: () => import('@/config/faq').then((mod) => mod.linkedinFAQ),
  instagram: () => import('@/config/faq').then((mod) => mod.instagramFAQ),
  twitter: () => import('@/config/faq').then((mod) => mod.twitterFAQ),
  discord: () => import('@/config/faq').then((mod) => mod.discordFAQ),
  telegram: () => import('@/config/faq').then((mod) => mod.telegramFAQ),
};

// Dynamic FAQ component that works for all platforms
const PlatformFaqs = async ({ platformName }: { platformName: string }) => {
  try {
    const getFAQ = platformFAQMap[platformName.toLowerCase()];

    if (!getFAQ) {
      return (
        <Wrapper className="bg-gray-50 dark:bg-gray-900" size="lg">
          <Container>
            <DynamicGeneralFaq />
          </Container>
        </Wrapper>
      ); // Or handle unsupported platform
    }

    const faqData = await getFAQ();
    return (
      <Wrapper className="bg-gray-50 dark:bg-gray-900" size="lg">
        <Container>
          <Faqs data={faqData} />
        </Container>
      </Wrapper>
    );
  } catch (error) {
    console.error(`Error loading FAQs for ${platformName}:`, error);
    return null;
  }
};

export default async function PlatformPage({ params }: PageProps) {
  const slug = (await params).slug;
  const platform = socialMediaPlatforms.find((p) => p.slug === slug);

  if (!platform) {
    notFound();
  }

  return (
    <>
      <WebsiteJsonLd company={siteConfig.siteName} url={absoluteUrl(`/${slug}`)} />
      <HeroGrid platform={platform.name.toLowerCase()} />
      <Suspense fallback={<div>Loading...</div>}>
        <PlatformFaqs platformName={platform.name} />
      </Suspense>
    </>
  );
}
