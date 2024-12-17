import FaqJsonLd from '@/components/structured-data/faq-json-ld';

const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What is this tool for?',
    answer:
      'This tool allows you to resize your profile pictures for various social media platforms to match their recommended dimensions, ensuring your profile looks professional and clear.',
  },
  {
    id: 6,
    category: 'General',
    question: 'What does PFP mean?',
    answer:
      'PFP stands for "Profile Picture." It refers to the image users select to represent themselves on social media platforms, forums, and other online communities. This image plays a pivotal role in digital identity, offering a visual representation of an individual or brand to the online world.',
  },
  {
    id: 2,
    category: 'General',
    question: 'Is the tool free to use?',
    answer: 'Yes, this tool is completely free to use and requires no sign-up or login.',
  },
  {
    id: 3,
    category: 'General',
    question: 'What file formats are supported?',
    answer: 'You can upload images in popular formats like JPEG, PNG, and WebP.',
  },
  {
    id: 4,
    category: 'General',
    question: 'Will my uploaded images be stored on the server?',
    answer:
      'No, your images are processed in real-time and not stored on our servers to ensure your privacy.',
  },
  {
    id: 5,
    category: 'General',
    question: 'What happens if I upload an image with the wrong aspect ratio?',
    answer:
      "The tool automatically crops and resizes the image to meet the platform's requirements while maintaining the main focus of the picture.",
  },
];

export default function GeneralFaqs() {
  return (
    <>
      <FaqJsonLd questionListElement={faqs} />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-medium text-violet-600 dark:text-violet-400">
          You have full rights and ownership of your photos
        </p>
        <h2 className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          Frequently asked questions
        </h2>
        <p className="mt-6 text-base/7 text-gray-500 dark:text-gray-300">
          Answers to common questions about our free profile picture resizer.
        </p>
      </div>
      <div className="mt-20">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-base/7 font-semibold text-gray-900 dark:text-gray-50">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-500 dark:text-gray-300">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
