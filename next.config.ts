import type { NextConfig } from 'next';

import { socialMediaPlatforms } from './config/platforms';

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: 'https', hostname: 'ik.imagekit.io', port: '' }],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/legal/terms-and-conditions',
        permanent: true,
      },
      ...socialMediaPlatforms.map((platform) => ({
        source: `/${platform.name}`,
        destination: `/${platform.slug}`,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
