'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Menu, X } from 'lucide-react';

import { featuredNav, primaryNav } from '@/config/nav';
import { siteConfig } from '@/config/site';

import useScroll from '@/lib/hooks/use-scroll';

import { Container } from '@/components/container';
import { Logo } from '@/components/icons';

export default function Navbar() {
  const scrolled = useScroll(50);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div
        className={`sticky top-[-1px] w-full ${
          scrolled
            ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/50'
            : 'bg-white/0'
        } z-30 transition-all`}>
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-x-2 text-xl">
            <Logo className="h-8 w-auto fill-violet-600" />
            <span className="text-base font-medium">{siteConfig.siteName}</span>
          </Link>
          <nav className="hidden items-center gap-x-5 lg:flex" aria-label="Main">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400">
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            className="-mr-2 inline-flex rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
            onClick={() => setOpen(true)}>
            <span className="sr-only">Open menu</span>
            <Menu className="size-6" aria-hidden />
          </button>
        </Container>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden" id="mobile-nav-drawer">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-xl dark:bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Menu</span>
              <button
                type="button"
                className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <nav className="flex flex-col gap-1 overflow-y-auto p-4 text-sm font-medium">
              <p className="mb-2 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Sections
              </p>
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-gray-800 hover:bg-violet-50 hover:text-violet-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-violet-400"
                  onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <p className="mb-2 mt-4 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Popular
              </p>
              {featuredNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-gray-800 hover:bg-violet-50 hover:text-violet-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-violet-400"
                  onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
