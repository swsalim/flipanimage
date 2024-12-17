import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  title: 'Flip your images online for free',
  description: 'Flip an image horizontally or vertically for free',
  siteName: 'Flip Image',
  url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  openGraph: {
    image: '/images/og-default.png',
    imageAlt: 'Banner for flipanimage.xyz',
    width: '1200',
    height: '630',
  },
  creator: '@swsalim',
};