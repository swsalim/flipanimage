import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(input = '') {
  const suffix = input === '' ? '' : input.startsWith('/') ? input : `/${input}`;

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    const host = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
    if (host) {
      return `https://${host}${suffix}`;
    }
  }
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    const host = process.env.NEXT_PUBLIC_VERCEL_URL;
    if (host) {
      return `https://${host}${suffix}`;
    }
  }

  const base = (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
  return `${base}${suffix}`;
}

export function imageKitLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src[0] === '/') src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(',');
  let urlEndpoint = `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}`;
  if (urlEndpoint[urlEndpoint.length - 1] === '/') {
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  }

  return `${urlEndpoint}/${src}?tr=${paramsString}`;
}
