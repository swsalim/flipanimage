import type { ComponentProps } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Logo } from '@/components/icons';

export type IconProps = React.HTMLAttributes<SVGElement>;

const navigation = {
  legal: [
    { name: 'Terms of service', href: '/legal/terms-and-conditions' },
    { name: 'Privacy policy', href: '/legal/privacy-policy' },
  ],
  projects: [
    {
      name: 'PFP Resizer',
      href: 'https://www.pfpresizer.com/',
    },
    {
      name: 'RGB to Pantone Converter',
      href: 'https://www.rgbtopantone.com/',
    },
    {
      name: 'Sudoku Unlimited',
      href: 'https://sudokuunlimited.com/',
    },
    {
      name: 'Random Number App',
      href: 'https://www.randomnumberapp.com/',
    },
    {
      name: 'Will It Rain Tomorrow?',
      href: 'https://www.willitraintomorrow.com/',
    },
    {
      name: 'Water a Day',
      href: 'https://www.wateraday.com/',
    },
    {
      name: 'Clinic Geek',
      href: 'https://www.clinicgeek.com/',
    },
    {
      name: 'Keyword Gap',
      href: 'https://www.keywordgap.com/',
    },
    {
      name: 'mainan.fun',
      href: 'https://www.mainan.fun',
    },
    {
      name: 'Indie World Map',
      href: 'https://www.indieworldmap.com/',
    },
    {
      name: 'Dental Clinics Malaysia',
      href: 'https://www.dentalclinicclosetome.my/',
    },
  ],
};

interface FooterProps extends ComponentProps<'footer'> {
  className?: string;
}

export default function Footer({ className, ...props }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-gray-900', className)} {...props}>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="size-9 text-white" />
            <p className="text-balance text-base/6 text-gray-100">
              Flip your images online for free
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:gap-8">
              <div className="md:mt-0">
                <h3 className="text-base/6 font-semibold text-gray-100">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base/6 text-gray-300 transition hover:text-violet-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-2 md:grid md:gap-8">
              <div className="md:mt-0">
                <h3 className="text-base/6 font-semibold text-gray-100">Our Projects</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.projects.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base/6 text-gray-300 transition hover:text-violet-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-base/6 text-gray-300">
            &copy; {currentYear}{' '}
            <a
              href="https://www.yuurrific.com?ref=flipanimage"
              className="font-medium text-violet-400 transition hover:text-violet-400"
              target="_blank">
              Yuurrific
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
