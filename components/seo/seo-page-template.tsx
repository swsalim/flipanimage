import Link from 'next/link';

import type { SeoPageConfig } from '@/content/seo-pages';
import { categorySegment, pathnameForPage, resolveRelatedPages } from '@/content/seo-pages';
import type { SeoCategory } from '@/content/seo-pages/types';
import { Check } from 'lucide-react';

import { siteConfig } from '@/config/site';

import { absoluteUrl, cn } from '@/lib/utils';

import { Container } from '@/components/container';
import ImageFlip from '@/components/image-flip';
import SeoFaqBlock from '@/components/seo/seo-faq-block';
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd';
import HowToJsonLd from '@/components/structured-data/HowToJsonLd';
import SoftwareApplicationJsonLd from '@/components/structured-data/SoftwareApplicationJsonLd';

function hubTitle(category: SeoCategory): string {
  switch (category) {
    case 'tool':
      return 'Tools';
    case 'guide':
      return 'Guides';
    case 'platform':
      return 'Platforms';
    case 'use-case':
      return 'Use cases';
    case 'compare':
      return 'Compare';
    default:
      return '';
  }
}

function categoryEyebrow(category: SeoCategory): string {
  switch (category) {
    case 'tool':
      return 'Flip tool · by format / direction';
    case 'guide':
      return 'How-to · learn first';
    case 'platform':
      return 'Phones & feeds';
    case 'use-case':
      return 'Solve a scenario';
    case 'compare':
      return 'Alternative workflow';
    default:
      return 'Flip Image';
  }
}

export default function SeoPageTemplate({ page }: { page: SeoPageConfig }) {
  const pathname = pathnameForPage(page);
  const related = resolveRelatedPages(page);
  const hubPath = `/${categorySegment(page.category)}`;
  const breadcrumbLeaf = page.h1.length > 52 ? `${page.h1.slice(0, 50)}…` : page.h1;

  const breadcrumbItems = [
    { position: 1, item: absoluteUrl('/'), name: 'Home' },
    { position: 2, item: absoluteUrl(hubPath), name: hubTitle(page.category) },
    { position: 3, item: absoluteUrl(pathname), name: breadcrumbLeaf },
  ];

  const initialOrientation = page.initialFlip ?? 'normal';

  return (
    <>
      <BreadcrumbJsonLd itemListElements={breadcrumbItems} />
      {page.steps && page.steps.length > 0 ? (
        <HowToJsonLd name={page.h1} description={page.description} steps={page.steps} />
      ) : null}
      <SoftwareApplicationJsonLd
        name={siteConfig.siteName}
        description={page.description}
        url={absoluteUrl(pathname)}
      />

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-violet-50/80 via-white to-white pb-14 pt-8 lg:pb-16 lg:pt-12 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/55 via-transparent to-transparent dark:from-violet-900/30"
        />
        <Container>
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={hubPath} className="hover:text-violet-600 dark:hover:text-violet-400">
                    {hubTitle(page.category)}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-gray-900 dark:text-gray-200">{breadcrumbLeaf}</li>
              </ol>
            </nav>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
              {categoryEyebrow(page.category)}
            </p>
            <h1 className="mt-3 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-[2.7rem] sm:leading-[1.1] dark:text-gray-50">
              {page.h1}
            </h1>

            <div className="mt-8 space-y-4 text-pretty text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>{page.intro}</p>
              {page.introSecondary ? <p>{page.introSecondary}</p> : null}
            </div>

            {page.takeawayBullets && page.takeawayBullets.length > 0 ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.takeawayBullets.map((line) => (
                  <div
                    key={line}
                    className="flex gap-3 rounded-xl border border-violet-200/70 bg-white/80 p-4 text-sm font-medium leading-snug text-gray-800 backdrop-blur-sm dark:border-violet-900/50 dark:bg-gray-950/50 dark:text-gray-200">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-violet-600 dark:text-violet-400"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            ) : null}

            <section
              aria-label="Flip image upload"
              className="relative mt-12 rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-lg shadow-violet-100/70 ring-1 ring-gray-950/5 sm:p-8 dark:border-gray-800 dark:bg-gray-950/60 dark:shadow-black/40 dark:ring-white/10">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                Upload · flip horizontal or vertical · download
              </p>
              <div className="mt-8">
                <ImageFlip key={pathname} initialOrientation={initialOrientation} />
              </div>
            </section>
          </div>
        </Container>
      </div>

      {(page.sections?.length ?? 0) > 0 || (page.steps?.length ?? 0) > 0 ? (
        <section className="border-t border-gray-100 bg-white py-14 dark:border-gray-800 dark:bg-gray-950/80">
          <Container>
            <div className="mx-auto flex max-w-4xl flex-col gap-14">
              {page.sections && page.sections.length > 0 ? (
                <div className="space-y-8">
                  {page.sections.map((section) => (
                    <article
                      key={section.heading}
                      className="rounded-2xl border border-gray-100 bg-gray-50/80 p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-950/40">
                      <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl dark:text-gray-50">
                        {section.heading}
                      </h2>
                      <p className="mt-4 whitespace-pre-wrap text-base leading-relaxed text-gray-600 dark:text-gray-400">
                        {section.body}
                      </p>
                    </article>
                  ))}
                </div>
              ) : null}

              {page.steps && page.steps.length > 0 ? (
                <div>
                  <div className="mb-10 max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
                      Quick workflow
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-50">
                      Here’s the order that works
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      Do these in sequence so what you download matches what you saw on screen.
                    </p>
                  </div>
                  <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.steps.map((step, idx) => (
                      <li
                        key={step.name}
                        className="relative flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950/50">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white dark:bg-violet-500">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-50">
                            {step.name}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {page.faq.length > 0 ? (
        <section className="border-t border-gray-100 bg-gradient-to-b from-gray-50 via-gray-50 to-white py-16 dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
          <Container>
            <SeoFaqBlock
              data={page.faq}
              eyebrow={page.faqEyebrow}
              title={page.faqTitle}
              intro={page.faqIntro}
            />
          </Container>
        </section>
      ) : null}

      {related.length > 0 ? (
        <aside
          className={cn(
            'border-t border-gray-100 py-14 dark:border-gray-800 dark:bg-gray-950/40',
            page.faq.length === 0 && 'bg-gray-50 dark:bg-gray-950',
          )}>
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
                Also helpful
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                Related pages worth a look
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                Flip jobs aren’t one-size-fits-all — if yours is close but not quite, one of these
                might nail it.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={pathnameForPage(r)}
                    href={pathnameForPage(r)}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:border-violet-300 hover:text-violet-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:border-violet-900/80 dark:hover:text-violet-300">
                    {r.h1}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </aside>
      ) : null}
    </>
  );
}
