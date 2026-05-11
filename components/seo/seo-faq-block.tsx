import { ChevronDown } from 'lucide-react';

import FaqJsonLd from '@/components/structured-data/faq-json-ld';

export default function SeoFaqBlock({
  data,
  eyebrow,
  title,
  intro,
}: {
  data: { category: string; question: string; answer: string }[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <FaqJsonLd questionListElement={data} />
      <div className="mb-10 max-w-2xl border-l-[3px] border-violet-500 pl-6">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            {eyebrow}
          </p>
        ) : (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            FAQ
          </p>
        )}
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-50">
          {title ?? 'Questions before you flip or mirror'}
        </h2>
        {intro ? (
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">{intro}</p>
        ) : null}
      </div>
      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-950/40">
        {data.map((item, index) => (
          <details
            key={index}
            className="group p-5 transition-colors open:bg-violet-50/60 dark:open:bg-violet-950/20">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md py-1 text-base font-semibold text-gray-900 outline-none outline-offset-2 marker:content-none focus-visible:ring-2 focus-visible:ring-violet-500 [&::-webkit-details-marker]:hidden dark:text-gray-100">
              <span>{item.question}</span>
              <ChevronDown
                className="mt-0.5 size-5 shrink-0 text-violet-500 transition-transform group-open:rotate-180 dark:text-violet-400"
                aria-hidden
              />
            </summary>
            <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
