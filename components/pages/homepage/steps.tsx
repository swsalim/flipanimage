import { CropIcon, ImageDownIcon, ImageUpIcon } from 'lucide-react';

import { ImageKit } from '@/components/image-kit';

const steps = [
  {
    name: 'Step 1',
    description:
      'Click on the "Upload Image" button and choose the image file you want to resize. You can select an image from your device or drag and drop it into the tool.',
    icon: ImageUpIcon,
  },
  {
    name: 'Step 2',
    description: 'Adjust the image within the crop frame to highlight the desired area.',
    icon: CropIcon,
  },
  {
    name: 'Step 3',
    description:
      'Get your perfectly resize profile picture image in high resolution, ready for use anywhere.',
    icon: ImageDownIcon,
  },
];

export default function Steps() {
  return (
    <>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <p className="text-base/7 font-medium text-violet-600 dark:text-violet-400">
              3 Simple Steps
            </p>
            <h2 className="mt-0 text-pretty text-4xl font-bold !leading-tight tracking-tight text-gray-900 sm:mt-2 sm:text-5xl lg:text-balance dark:text-gray-100">
              How to resize your profile picture?
            </h2>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none dark:text-gray-300">
              {steps.map((step) => (
                <div key={step.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-gray-50">
                    <step.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 size-5 text-violet-600"
                    />
                    {step.name}
                  </dt>{' '}
                  <dd className="inline">{step.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex items-start justify-end lg:order-first">
          <ImageKit src="image-demo.png" width={800} height={800} alt="demo image" />
        </div>
      </div>
    </>
  );
}
