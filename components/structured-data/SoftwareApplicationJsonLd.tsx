import JsonLd from './json-ld';

export default function SoftwareApplicationJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd id="software-application-jsonld">
      {{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name,
        description,
        url,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: 0,
          priceCurrency: 'USD',
        },
        browserRequirements: 'Requires JavaScript. HTML5-compatible browser.',
      }}
    </JsonLd>
  );
}
