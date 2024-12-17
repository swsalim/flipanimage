'use client';

import { socialMediaPlatforms } from '@/config/platforms';

import { cn } from '@/lib/utils';

import { ImageCropper, useResizeImageStore } from '@/components/image-cropper';
import { ImageKit } from '@/components/image-kit';
import ImageFlip from '@/components/image-flip';

interface ImageItem {
  id: number;
  width: number;
  height: number;
}

const images: ImageItem[] = [
  { id: 1, width: 400, height: 400 },
  { id: 12, width: 400, height: 300 },
  { id: 2, width: 400, height: 400 },
  { id: 4, width: 400, height: 300 },
  { id: 5, width: 400, height: 300 },
  { id: 3, width: 400, height: 400 },
  { id: 6, width: 400, height: 300 },
  { id: 7, width: 400, height: 300 },
  { id: 8, width: 400, height: 300 },
  // { id: 11, width: 400, height: 400 },
  // { id: 9, width: 400, height: 300 },
];

const imageRows = images.reduce((acc: ImageItem[][], curr, i) => {
  if (i % 3 === 0) {
    acc.push([curr]);
  } else {
    acc[acc.length - 1].push(curr);
  }
  return acc;
}, []);

export default function HeroGrid({ platform }: { platform?: string | null }) {
  const isImageSelected = useResizeImageStore((state) => state.isImageSelected);

  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="relative mx-auto my-16 grid w-full max-w-7xl grid-cols-1 px-4 sm:my-20 sm:px-6 lg:px-8 xl:my-32">
        <h1 className="col-start-1 row-start-1 max-w-[36rem] text-balance text-5xl font-bold capitalize tracking-tight text-gray-900 sm:text-7xl xl:max-w-[43.5rem] dark:text-gray-100">
          Perfectly Sized {platform} Profile Pictures, Instantly
        </h1>
        {platform && (
          <p className="col-start-1 row-start-2 mt-8 max-w-md text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-200">
            {
              socialMediaPlatforms.find(
                (p) => p.name.toLowerCase() === platform
              )?.heroDescription
            }
          </p>
        )}
        {!platform && (
          <p className="col-start-1 row-start-2 mt-8 max-w-md text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-200">
            Easily resize your images for all social media platforms - X,
            Facebook, Instagram, TikTok and more.
          </p>
        )}
        <div className="relative z-20 col-start-1 row-start-3 mt-10 flex max-w-[24rem] flex-col items-center justify-center gap-y-2">
          {/* <ImageCropper platform={platform} /> */}
          <ImageFlip />
        </div>
        <div className="pointer-events-none col-start-1 row-start-4 flex justify-end md:row-span-3 md:row-start-4 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end">
          <div className="-ml-[32rem] mt-4 h-[46.375rem] origin-top-right scale-[calc(204/299)] select-none sm:-ml-[24rem] sm:-mt-10 sm:h-auto sm:transform-none md:-ml-64 md:-mt-10 lg:-ml-16 lg:mt-0 xl:-mr-4 xl:ml-0">
            <div className="flex flex-row-reverse gap-4">
              {imageRows.map((row, rowIndex) => {
                return (
                  <div
                    key={rowIndex}
                    className={cn(
                      'flex flex-col gap-4',
                      rowIndex === 1 && 'mt-24',
                      rowIndex === 2 && 'mt-48 xl:mt-64',
                      rowIndex === 2 &&
                        isImageSelected &&
                        'md:hidden lg:hidden xl:flex'
                    )}
                  >
                    {row.map((image) => (
                      <div
                        key={image.id}
                        className={cn(
                          'w-64 max-w-64 overflow-hidden rounded-lg shadow-lg',
                          image.width === image.height
                            ? 'aspect-[1/1]'
                            : 'aspect-[4/3]'
                        )}
                      >
                        <ImageKit
                          src={`image-${image.id}.png`}
                          width={image.width}
                          height={image.height}
                          alt={`image-${image.id}.png`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
