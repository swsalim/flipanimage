import Link from 'next/link';

import { getPagesByCategory, pathnameForPage } from '@/content/seo-pages';
import { hubCopy } from '@/content/seo-pages/hub-content';
import type { SeoCategory } from '@/content/seo-pages/types';
import { Check } from 'lucide-react';

export default function SeoHubPage({ category }: { category: SeoCategory }) {
  const pages = getPagesByCategory(category);
  const copy = hubCopy[category];

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-violet-50/80 via-white to-white pb-20 pt-10 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/50 via-transparent to-transparent dark:from-violet-900/30"
      />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <nav className="mb-10 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="font-medium hover:text-violet-600 dark:hover:text-violet-400">
            Home
          </Link>
          <span aria-hidden className="mx-2 text-gray-300 dark:text-gray-600">
            /
          </span>
          <span className="text-gray-900 dark:text-gray-100">{copy.headline}</span>
        </nav>

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            {copy.headline}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {copy.intro}
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-gray-600 dark:text-gray-400">
            {copy.introSecondary}
          </p>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {copy.supportingSections.map((block) => (
            <article
              key={block.heading}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950/60">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50">{block.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                {block.body}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-16 scroll-mt-8 pt-4" aria-labelledby="hub-list-head">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-6 dark:border-gray-800">
            <div>
              <h2
                id="hub-list-head"
                className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                Pick a page and go
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Tap through—each card opens a fuller walkthrough plus the flip tool. Same uploader
                everywhere; copy changes so you’re not guessing.
              </p>
            </div>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {pages.map((page) => {
              const teaser = page.listingBlurb ?? `${page.intro} ${page.introSecondary ?? ''}`;
              const compact =
                teaser.length > 260 ? `${teaser.slice(0, 257).replace(/\s+\S*$/, '')} …` : teaser;
              return (
                <li key={pathnameForPage(page)}>
                  <Link
                    href={pathnameForPage(page)}
                    className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-violet-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950/50 dark:hover:border-violet-900/70">
                    <span className="flex items-start gap-3">
                      <span className="inline-flex rounded-lg bg-violet-100 p-2 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300">
                        <Check className="size-4 shrink-0" aria-hidden strokeWidth={2} />
                      </span>
                      <span>
                        <span className="font-display block text-lg font-bold leading-snug text-gray-900 transition group-hover:text-violet-700 dark:text-gray-100 dark:group-hover:text-violet-300">
                          {page.h1}
                        </span>
                      </span>
                    </span>
                    <span className="mt-4 block flex-1 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                      {compact}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
