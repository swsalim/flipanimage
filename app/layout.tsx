import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';

import { siteConfig } from '@/config/site';

import { absoluteUrl, cn } from '@/lib/utils';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import LogoJsonLd from '@/components/structured-data/logo-json-ld';

import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  metadataBase: siteConfig.url,
  alternates: {
    canonical: '/',
  },
  authors: [
    {
      name: 'Yuyu',
      url: 'https://www.yuurrific.com',
    },
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.openGraph.image,
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: siteConfig.openGraph.imageAlt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icons/favicon-32x32.png',
    shortcut: '/icons/apple-touch-icon.png',
    apple: '/icons/apple-touch-icon.png',
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
    card: 'summary_large_image',
    creator: siteConfig.creator,
    images: [siteConfig.openGraph.image],
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="//ik.imagekit.io" />
        <link rel="preconnect" href="//scripts.simpleanalyticscdn.com" />
        <link rel="preconnect" href="//queue.simpleanalyticscdn.com" />
        <link rel="dns-prefetch" href="//queue.simpleanalyticscdn.com" />
        <link rel="dns-prefetch" href="//scripts.simpleanalyticscdn.com" />
        <link rel="dns-prefetch" href="//ik.imagekit.io" />
        <LogoJsonLd
          logo={absoluteUrl('/icons/logo.png')}
          url={absoluteUrl('/')}
        />
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          plusJakartaSans.variable
        )}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex grow flex-col justify-center">{children}</main>
        <Footer />
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        {/* <script async src="https://scripts.simpleanalyticscdn.com/auto-events.js"></script> */}
        <noscript>
          <Image
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
            width="1"
            height="1"
            unoptimized
          />
        </noscript>
      </body>
    </html>
  );
}