import { SocialMediaPlatform } from '@/types';

export const socialMediaPlatforms: SocialMediaPlatform[] = [
  {
    name: 'Facebook',
    title: 'Facebook Profile Picture Resizer',
    description:
      'Resize your profile picture for Facebook effortlessly with our tool. Upload an image and get the perfect Facebook profile picture size instantly.',
    slug: 'facebook-profile-picture-resizer',
    heroHeading: 'Facebook Profile Picture Resizer',
    heroDescription: 'Resize your profile picture to the perfect size for Facebook effortlessly.',
    heroFeature:
      "Facebook recommends a profile picture size of 180x180 pixels. However, the image will appear as 170x170 pixels on desktop, and 128x128 pixels on smartphones. It's important to choose a high-resolution image that is at least 720 pixels wide to ensure that it looks good on all devices.z",
    imageWidth: 320,
    imageHeight: 320,
    icon: () =>
      import('@/components/icons/facebook').then((module) =>
        module.Facebook({
          className: 'w-4 h-4 flex-none',
        }),
      ),
  },
  {
    name: 'Instagram',
    title: 'Instagram Profile Picture Resizer',
    description:
      'Resize your profile picture for Instagram effortlessly with our tool. Upload an image and get the perfect Instagram profile picture size instantly.',
    slug: 'instagram-profile-picture-resizer',
    heroHeading: 'Instagram Profile Picture Resizer',
    heroDescription: 'Ensure your Instagram DP looks great with the right dimensions.',
    heroFeature:
      "Instagram profile pictures are circular, and the recommended dimensions are 110x110 pixels. However, the picture will appear as 40x40 pixels in the feed, so it's important to choose an image that looks good at a small size. Instagram also allows users to upload larger images, up to 1080x1080 pixels, which will be downscaled to fit the circular profile picture.",
    imageWidth: 320,
    imageHeight: 320,
  },
  {
    name: 'Twitter',
    title: 'Twitter Profile Picture Resizer',
    description:
      'Resize your profile picture for Twitter effortlessly with our tool. Upload an image and get the perfect Twitter profile picture size instantly.',
    slug: 'twitter-profile-picture-resizer',
    heroHeading: 'Twitter Profile Picture Resizer',
    heroDescription: 'Make your Twitter profile stand out with the perfect image dimensions.',
    heroFeature:
      'The recommended size for an X profile picture is 400x400 pixels. However, the picture will appear as 200x200 pixels on desktop and 48x48 pixels on smartphones. X also allows users to upload larger images, up to 700x700 pixels, which will be automatically scaled down.',
    imageWidth: 400,
    imageHeight: 400,
    icon: () =>
      import('@/components/icons/twitter').then((module) =>
        module.Twitter({
          className: 'w-4 h-4 flex-none',
        }),
      ),
  },
  {
    name: 'LinkedIn',
    title: 'LinkedIn Profile Picture Resizer',
    description:
      'Resize your profile picture for LinkedIn effortlessly with our tool. Upload an image and get the perfect LinkedIn profile picture size instantly.',
    slug: 'linkedin-profile-picture-resizer',
    heroHeading: 'LinkedIn Profile Picture Resizer',
    heroDescription:
      'Ensure your LinkedIn profile picture looks professional with the correct dimensions.',
    heroFeature:
      'The recommended size for a LinkedIn profile picture is 400x400 pixels. However, the image will appear as 200x200 pixels on desktop and 150x150 pixels on smartphones. LinkedIn also recommends that users choose a high-quality, professional image that accurately represents their brand.',
    imageWidth: 400,
    imageHeight: 400,
    icon: () =>
      import('@/components/icons/linkedin').then((module) =>
        module.LinkedIn({
          className: 'w-4 h-4 flex-none',
        }),
      ),
  },
  {
    name: 'WhatsApp',
    title: 'WhatsApp Profile Picture Resizer',
    description:
      'Resize your profile picture for WhatsApp effortlessly with our tool. Upload an image and get the perfect Facebook profile picture size instantly.',
    slug: 'whatsapp-profile-picture-resizer',
    heroHeading: 'WhatsApp Profile Picture Resizer',
    heroDescription: 'Get the perfect WhatsApp DP size for clear and professional images.',
    heroFeature:
      "The recommended size for a WhatsApp profile picture is 640x640 pixels. However, the picture will appear as 140x140 pixels on smartphones, so it's important to choose an image that looks good at a small size. WhatsApp also allows users to crop the image and add filters.",
    imageWidth: 640,
    imageHeight: 640,
  },
  {
    name: 'YouTube',
    title: 'YouTube Profile Picture Resizer',
    description:
      'Resize your profile picture for YouTube effortlessly with our tool. Upload an image and get the perfect YouTube profile picture size instantly.',
    slug: 'youtube-profile-picture-resizer',
    heroHeading: 'YouTube Profile Picture Resizer',
    heroDescription: 'Optimize your YouTube channel profile picture for clarity and quality.',
    heroFeature:
      "YouTube profile pictures are also circular, and the recommended size is 800x800 pixels. However, the picture will appear as 98x98 pixels next to the channel name, so it's important to choose an image that looks good at a small size. YouTube also recommends that users upload a larger image, up to 2560x1440 pixels, which will be used as the channel art.",
    imageWidth: 800,
    imageHeight: 800,
    icon: () =>
      import('@/components/icons/youtube').then((module) =>
        module.YouTube({
          className: 'w-4 h-4 flex-none',
        }),
      ),
  },
  {
    name: 'TikTok',
    title: 'TikTok Profile Picture Resizer',
    description:
      'Resize your profile picture for TikTok effortlessly with our tool. Upload an image and get the perfect Facebook profile picture size instantly.',
    slug: 'tiktok-profile-picture-resizer',
    heroHeading: 'TikTok Profile Picture Resizer',
    heroDescription: 'Create an engaging TikTok profile with the perfect image dimensions.',
    heroFeature:
      "TikTok profile pictures are square, and the recommended size is 200x200 pixels. However, it's essential to choose an image that is visually appealing and recognizable at a small size, as TikTok profile pictures are displayed in a circular format.",
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    name: 'Pinterest',
    title: 'Pinterest Profile Picture Resizer',
    description:
      'Resize your profile picture for Pinterest effortlessly with our tool. Upload an image and get the perfect Pinterest profile picture size instantly.',
    slug: 'pinterest-profile-picture-resizer',
    heroHeading: 'Pinterest Profile Picture Resizer',
    heroDescription: 'Make your Pinterest profile visually appealing with the correct image size.',
    heroFeature:
      "The recommended size for a Pinterest profile picture is 1080x1080 pixels. This high-resolution image ensures that your profile picture looks crisp and clear on the platform. It's important to use an image that represents your personal or brand identity effectively.",
    imageWidth: 1080,
    imageHeight: 1080,
  },
  {
    name: 'Twitch',
    title: 'Twitch Profile Picture Resizer',
    description:
      'Resize your profile picture for Twitch effortlessly with our tool. Upload an image and get the perfect Twitch profile picture size instantly.',
    slug: 'twitch-profile-picture-resizer',
    heroHeading: 'Twitch Profile Picture Resizer',
    heroDescription: 'Get your Twitch profile picture resized for a clean and professional look.',
    heroFeature:
      'Twitch profile pictures are square, and the recommended size is 800x800 pixels. However, the picture will appear as 160x160 pixels on desktop and 128x128 pixels on smartphones. Twitch also recommends that users choose an image that accurately represents their brand and personality.',
    imageWidth: 800,
    imageHeight: 800,
  },
  {
    name: 'WeChat',
    title: 'WeChat Profile Picture Resizer',
    description:
      'Resize your profile picture for WeChat effortlessly with our tool. Upload an image and get the perfect WeChat profile picture size instantly.',
    slug: 'wechat-profile-picture-resizer',
    heroHeading: 'WeChat Profile Picture Resizer',
    heroDescription: 'Get your WeChat profile picture resized for a clean and professional look.',
    heroFeature:
      'The recommended size for a WeChat profile picture is 640x640 pixels. However, the picture will appear as 96x96 pixels on smartphones. WeChat also allows users to add stickers and effects to their profile picture.',
    imageWidth: 640,
    imageHeight: 640,
  },
  {
    name: 'Quora',
    title: 'Quora Profile Picture Resizer',
    description:
      'Resize your profile picture for Quora effortlessly with our tool. Upload an image and get the perfect Quora profile picture size instantly.',
    slug: 'quora-profile-picture-resizer',
    heroHeading: 'Quora Profile Picture Resizer',
    heroDescription: 'Get your Quora profile picture resized for a clean and professional look.',
    heroFeature:
      'The recommended size for a Quora profile picture is 400x400 pixels. However, the picture will appear as 60x60 pixels next to the username. Quora also allows users to upload a larger image, up to 2000x2000 pixels, which will be used as the header image.',
    imageWidth: 400,
    imageHeight: 400,
  },
  {
    name: 'GitHub',
    title: 'GitHub Profile Picture Resizer',
    description:
      'Resize your profile picture for GitHub effortlessly with our tool. Upload an image and get the perfect GitHub profile picture size instantly.',
    slug: 'github-profile-picture-resizer',
    heroHeading: 'GitHub Profile Picture Resizer',
    heroDescription: 'Get your GitHub profile picture resized for a clean and professional look.',
    heroFeature:
      'GitHub profile picture should be a PNG, JPG, or GIF file, and it must be less than 1 MB in size and smaller than 3000 by 3000 pixels. For the best quality rendering, we recommend keeping the image at about 500 by 500 pixels. A clear and recognizable image is important for your GitHub profile, as it represents you in the developer community. Ensure that your picture aligns with the professional context of the platform.',
    imageWidth: 500,
    imageHeight: 500,
    icon: () =>
      import('@/components/icons/github').then((module) =>
        module.Github({
          className: 'w-4 h-4 flex-none',
        }),
      ),
  },
  {
    name: 'Medium',
    title: 'Medium Profile Picture Resizer',
    description:
      'Resize your profile picture for Medium effortlessly with our tool. Upload an image and get the perfect Medium profile picture size instantly.',
    slug: 'medium-profile-picture-resizer',
    heroHeading: 'Medium Profile Picture Resizer',
    heroDescription: 'Get your Medium profile picture resized for a clean and professional look.',
    heroFeature:
      'Medium profile pictures are square, and the recommended size is 400x400 pixels. However, the picture will appear as 60x60 pixels next to the username. Medium encourages users to use a clear and engaging image that reflects their writing style or personal brand.',
    imageWidth: 400,
    imageHeight: 400,
  },
  {
    name: 'Flickr',
    title: 'Flickr Profile Picture Resizer',
    description:
      'Resize your profile picture for Flickr effortlessly with our tool. Upload an image and get the perfect Flickr profile picture size instantly.',
    slug: 'flickr-profile-picture-resizer',
    heroHeading: 'Flickr Profile Picture Resizer',
    heroDescription: 'Get your WeChat profile picture resized for a clean and professional look.',
    heroFeature:
      "Flickr profile pictures are square, and the recommended size is 800x800 pixels. However, the picture will appear as 48x48 pixels on smartphones. It's essential to choose an image that represents your photography style and captures the essence of your work.",
    imageWidth: 800,
    imageHeight: 800,
  },
  {
    name: 'Steam',
    title: 'Steam Profile Picture Resizer',
    description:
      'Resize your profile picture for Steam effortlessly with our tool. Upload an image and get the perfect Steam profile picture size instantly.',
    slug: 'steam-profile-picture-resizer',
    heroHeading: 'Steam Profile Picture Resizer',
    heroDescription: 'Get your Steam profile picture resized for a clean and professional look.',
    heroFeature:
      'Steam is a digital distribution platform for video games developed by Valve. The recommended size for a profile picture is 184x184 pixels, with the image displaying as 64x64 pixels. Users often use game-related avatars or custom images to represent their profile.',
    imageWidth: 184,
    imageHeight: 184,
  },
  {
    name: 'Meetup',
    title: 'Meetup Profile Picture Resizer',
    description:
      'Resize your profile picture for Meetup effortlessly with our tool. Upload an image and get the perfect Meetup profile picture size instantly.',
    slug: 'meetup-profile-picture-resizer',
    heroHeading: 'Meetup Profile Picture Resizer',
    heroDescription: 'Get your Meetup profile picture resized for a clean and professional look.',
    heroFeature:
      'Meetup profile pictures are circular, and the recommended size is 200x200 pixels. A clear and friendly image is important for creating a positive and inviting impression on the Meetup platform. Make sure your picture aligns with the nature of your events or interests.',
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    name: 'SoundCloud',
    title: 'SoundCloud Profile Picture Resizer',
    description:
      'Resize your profile picture for SoundCloud effortlessly with our tool. Upload an image and get the perfect SoundCloud profile picture size instantly.',
    slug: 'soundcloud-profile-picture-resizer',
    heroHeading: 'SoundCloud Profile Picture Resizer',
    heroDescription:
      'Get your SoundCloud profile picture resized for a clean and professional look.',
    heroFeature:
      'SoundCloud profile pictures are square, and the recommended size is 2000x2000 pixels. However, the picture will appear as 400x400 pixels on the platform. A high-resolution image that reflects your music style or brand is crucial for attracting listeners on SoundCloud.',
    imageWidth: 400,
    imageHeight: 400,
  },
  {
    name: 'Snapchat',
    title: 'Snapchat Profile Picture Resizer',
    description:
      'Resize your profile picture for Snapchat effortlessly with our tool. Upload an image and get the perfect Snapchat profile picture size instantly.',
    slug: 'snapchat-profile-picture-resizer',
    heroHeading: 'Snapchat Profile Picture Resizer',
    heroDescription: 'Get your Snapchat profile picture resized for a clean and professional look.',
    heroFeature:
      'Snapchat profile pictures, known as Bitmojis, are customizable avatars representing the user. The recommended size is 320x320 pixels, but the image will appear as 80x80 pixels on the platform.',
    imageWidth: 320,
    imageHeight: 320,
  },
  {
    name: 'Reddit',
    title: 'Reddit Profile Picture Resizer',
    description:
      'Resize your profile picture for Reddit effortlessly with our tool. Upload an image and get the perfect Reddit profile picture size instantly.',
    slug: 'reddit-profile-picture-resizer',
    heroHeading: 'Reddit Profile Picture Resizer',
    heroDescription: 'Get your Reddit profile picture resized for a clean and professional look.',
    heroFeature:
      'Reddit profile pictures are referred to as avatars. The recommended size is 256x256 pixels, and the image will display as 128x128 pixels. Users can also add custom designs to their avatars.',
    imageWidth: 256,
    imageHeight: 256,
  },
  {
    name: 'Tumblr',
    title: 'Tumblr Profile Picture Resizer',
    description:
      'Resize your profile picture for Tumblr effortlessly with our tool. Upload an image and get the perfect Tumblr profile picture size instantly.',
    slug: 'tumblr-profile-picture-resizer',
    heroHeading: 'Tumblr Profile Picture Resizer',
    heroDescription: 'Get your Tumblr profile picture resized for a clean and professional look.',
    heroFeature:
      'Tumblr allows users to customize their profile images and backgrounds. The recommended size for a profile picture is 300x300 pixels, but it will appear as 64x64 pixels on the platform.',
    imageWidth: 300,
    imageHeight: 300,
  },
  {
    name: 'Discord',
    title: 'Discord Profile Picture Resizer',
    description:
      'Resize your profile picture for Discord effortlessly with our tool. Upload an image and get the perfect Discord profile picture size instantly.',
    slug: 'discord-profile-picture-resizer',
    heroHeading: 'Discord Profile Picture Resizer',
    heroDescription: 'Get your Discord profile picture resized for a clean and professional look.',
    heroFeature:
      "Discord profile pictures are displayed as avatars, often representing the user's gaming or community interests. According to Discord, you can upload multiple file formats. Avatars can be in JPG or PNG format, and must be under 10MB in size. The recommended size is 128x128 pixels, with the image displaying as 32x32 pixels.",
    imageWidth: 128,
    imageHeight: 128,
  },
  {
    name: 'Dribbble',
    title: 'Dribbble Profile Picture Resizer',
    description:
      'Resize your profile picture for Dribbble effortlessly with our tool. Upload an image and get the perfect Dribbble profile picture size instantly.',
    slug: 'dribbble-profile-picture-resizer',
    heroHeading: 'Dribbble Profile Picture Resizer',
    heroDescription: 'Get your Dribbble profile picture resized for a clean and professional look.',
    heroFeature:
      'Dribbble is a platform for designers to showcase their work. The recommended size for a profile picture is 400x400 pixels, and it will appear as 100x100 pixels. A high-quality, professional image is important.',
    imageWidth: 400,
    imageHeight: 400,
  },
  {
    name: 'Vimeo',
    title: 'Vimeo Profile Picture Resizer',
    description:
      'Resize your profile picture for Vimeo effortlessly with our tool. Upload an image and get the perfect Vimeo profile picture size instantly.',
    slug: 'vimeo-profile-picture-resizer',
    heroHeading: 'Vimeo Profile Picture Resizer',
    heroDescription: 'Get your Vimeo profile picture resized for a clean and professional look.',
    heroFeature:
      "Vimeo is a video-sharing platform, so the profile image should reflect the user's video content style. The recommended size is 600x600 pixels, and it will display as 100x100 pixels on the platform.",
    imageWidth: 600,
    imageHeight: 600,
  },
  {
    name: 'Tinder',
    title: 'Tinder Profile Picture Resizer',
    description:
      'Resize your profile picture for Tinder effortlessly with our tool. Upload an image and get the perfect Tinder profile picture size instantly.',
    slug: 'tinder-profile-picture-resizer',
    heroHeading: 'Tinder Profile Picture Resizer',
    heroDescription: 'Get your Tinder profile picture resized for a clean and professional look.',
    heroFeature:
      'Tinder profile pictures are crucial for first impressions. The recommended size is 640x640 pixels, and the display size varies by device. High-quality and engaging images are recommended.',
    imageWidth: 640,
    imageHeight: 640,
  },
  {
    name: 'Clubhouse',
    title: 'Clubhouse Profile Picture Resizer',
    description:
      'Resize your profile picture for Clubhouse effortlessly with our tool. Upload an image and get the perfect Clubhouse profile picture size instantly.',
    slug: 'clubhouse-profile-picture-resizer',
    heroHeading: 'Clubhouse Profile Picture Resizer',
    heroDescription:
      'Get your Clubhouse profile picture resized for a clean and professional look.',
    heroFeature:
      'Clubhouse is an audio-based social network, and profile pictures help users recognize speakers in rooms. The recommended size is 500x500 pixels, with the image displaying as 100x100 pixels.',
    imageWidth: 500,
    imageHeight: 500,
  },
  {
    name: 'VSCO',
    title: 'VSCO Profile Picture Resizer',
    description:
      'Resize your profile picture for VSCO effortlessly with our tool. Upload an image and get the perfect VSCO profile picture size instantly.',
    slug: 'vsco-profile-picture-resizer',
    heroHeading: 'VSCO Profile Picture Resizer',
    heroDescription: 'Get your VSCO profile picture resized for a clean and professional look.',
    heroFeature:
      'VSCO is a photography-focused platform. The recommended size for a profile picture is 800x800 pixels, and it will display as 150x150 pixels. High-resolution and aesthetically pleasing images are important.',
    imageWidth: 800,
    imageHeight: 800,
  },
  {
    name: 'Telegram',
    title: 'Telegram Profile Picture Resizer',
    description:
      'Resize your profile picture for Telegram effortlessly with our tool. Upload an image and get the perfect Telegram profile picture size instantly.',
    slug: 'telegram-profile-picture-resizer',
    heroHeading: 'Telegram Profile Picture Resizer',
    heroDescription: 'Get your Telegram profile picture resized for a clean and professional look.',
    heroFeature:
      'Telegram is a messaging app, and profile pictures should be clear and easily recognizable. The recommended size is 512x512 pixels, and it will display as 128x128 pixels on the platform.',
    imageWidth: 512,
    imageHeight: 512,
  },
  {
    name: 'KakaoTalk',
    title: 'KakaoTalk Profile Picture Resizer',
    description:
      'Resize your profile picture for KakaoTalk effortlessly with our tool. Upload an image and get the perfect KakaoTalk profile picture size instantly.',
    slug: 'kakaotalk-profile-picture-resizer',
    heroHeading: 'KakaoTalk Profile Picture Resizer',
    heroDescription:
      'Get your KakaoTalk profile picture resized for a clean and professional look.',
    heroFeature:
      'KakaoTalk is a popular messaging app in South Korea. The recommended size for a profile picture is 640x640 pixels, with the image displaying as 100x100 pixels. Users often include personalized elements like stickers.',
    imageWidth: 640,
    imageHeight: 640,
  },
  {
    name: 'Xbox',
    title: 'Xbox Profile Picture Resizer',
    description:
      'Resize your profile picture for Xbox effortlessly with our tool. Upload an image and get the perfect Xbox profile picture size instantly.',
    slug: 'xbox-profile-picture-resizer',
    heroHeading: 'Xbox Profile Picture Resizer',
    heroDescription: 'Get your Xbox profile picture resized for a clean and professional look.',
    heroFeature:
      'Xbox is a gaming platform developed by Microsoft. The recommended size for a profile picture is 1080x1080 pixels, with the image displaying as 512x512 pixels. Users can customize their avatars and profile pictures using in-game achievements and themes.',
    imageWidth: 1080,
    imageHeight: 1080,
  },
  {
    name: 'PlayStation',
    title: 'PlayStation Profile Picture Resizer',
    description:
      'Resize your profile picture for PlayStation effortlessly with our tool. Upload an image and get the perfect PlayStation profile picture size instantly.',
    slug: 'playstation-profile-picture-resizer',
    heroHeading: 'PlayStation Profile Picture Resizer',
    heroDescription:
      'Get your PlayStation profile picture resized for a clean and professional look.',
    heroFeature:
      'PlayStation, developed by Sony, is a popular gaming console. The recommended size for a profile picture is 320x320 pixels, with the image displaying as 184x184 pixels. Users can personalize their profile with custom images, game-related avatars, and themes.',
    imageWidth: 320,
    imageHeight: 320,
  },
  {
    name: 'Nintendo Switch',
    title: 'Nintendo Switch Profile Picture Resizer',
    description:
      'Resize your profile picture for Nintendo Switch effortlessly with our tool. Upload an image and get the perfect Nintendo Switch profile picture size instantly.',
    slug: 'nintendo-switch-profile-picture-resizer',
    heroHeading: 'Nintendo Switch Profile Picture Resizer',
    heroDescription:
      'Get your Nintendo Switch profile picture resized for a clean and professional look.',
    heroFeature:
      'Nintendo Switch is a hybrid gaming console from Nintendo. The recommended size for a profile picture is 512x512 pixels, with the image displaying as 128x128 pixels. Users can choose from a variety of character icons or upload custom images for their profile.',
    imageWidth: 512,
    imageHeight: 512,
  },
  {
    name: 'Epic Games',
    title: 'Epic Games Profile Picture Resizer',
    description:
      'Resize your profile picture for Epic Games effortlessly with our tool. Upload an image and get the perfect Epic Games profile picture size instantly.',
    slug: 'epic-games-profile-picture-resizer',
    heroHeading: 'Epic Games Profile Picture Resizer',
    heroDescription:
      'Get your Epic Games profile picture resized for a clean and professional look.',
    heroFeature:
      'Epic Games Store is a digital video game storefront. The recommended size for a profile picture is 256x256 pixels, with the image displaying as 128x128 pixels. Users can personalize their profiles with game-related images and custom avatars.',
    imageWidth: 256,
    imageHeight: 256,
  },
];
