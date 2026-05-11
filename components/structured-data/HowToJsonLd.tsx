import JsonLd from './json-ld';

export default function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string;
  description?: string;
  steps: { name: string; text: string }[];
}) {
  return (
    <JsonLd id="howto-jsonld">
      {{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        ...(description ? { description } : {}),
        step: steps.map((s, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: s.name,
          text: s.text,
        })),
      }}
    </JsonLd>
  );
}
