import type { SeoCategory } from './types';

export type HubCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  introSecondary: string;
  supportingSections: { heading: string; body: string }[];
};

export const hubCopy: Record<SeoCategory, HubCopy> = {
  tool: {
    eyebrow: 'Flip by format & direction',
    headline: 'Image flip tools — pick yours',
    intro:
      'Got a file and need it mirrored or flipped? Each page walks you through a real situation — PNG screenshots with transparency, noisy JPEG photos, WebP for the web, that one GIF sticker — and drops you straight into the same flip tool you already know.',
    introSecondary:
      'Skip the guessing: if you know the format, start there. Not sure what format matters? Grab a horizontal or vertical flip page instead. Mixed jobs (say, flip before you crop for Stories)? The workflow notes on each page tell you what to do first so you’re not resizing twice.',
    supportingSections: [
      {
        heading: 'What you’ll find on each tool page',
        body: 'Straight talk on when that flip matters, warnings (like mirrored text on packaging), plus the uploader — same controls every time.',
      },
      {
        heading: 'Not sure where to start?',
        body: 'If you chose the export from Figma or your phone, trust the extension: PNG/WebP/JPEG/heic hubs cover the messy bits (alpha, compression, codecs). If the problem’s “which way is up?” grab a directional page instead.',
      },
    ],
  },
  'use-case': {
    eyebrow: 'Real jobs people land here with',
    headline: 'Use cases — flipping with context',
    intro:
      'These aren’t vague “utilities.” They match how people actually mess up photos: selfies that saved backwards, thumbnails that looked wrong on the shop, receipts you shot through glass, scans that landed upside-down, logos pasted the wrong way in a slide.',
    introSecondary:
      'Pick the scenario that fits. You’ll see what flipping fixes, what it won’t (hello, mirrored letters on a billboard), and when you really should retake the shot.',
    supportingSections: [
      {
        heading: 'Honest pitfalls on every page',
        body: 'We call out OCR, passports, SKU labels — the stuff people miss until it’s embarrassing. Related links point you at a format page or tweak if flipping alone isn’t enough.',
      },
      {
        heading: 'Privacy, in plain English',
        body: 'The flip runs in your browser. That matters when the photo has your face on it or your address on a document. Close the tab when you’re done; keep exports only where you want them.',
      },
    ],
  },
  platform: {
    eyebrow: 'Phone · social · chat',
    headline: 'Flip by device & app',
    intro:
      'Your iPhone, your buddy’s Android, Instagram, TikTok, WhatsApp — they all behave a little differently. These pages spell out sensible defaults (Safari on iOS is usually the least painful for HEIC), where files land after export, and when to bail out and save as JPEG before flipping.',
    introSecondary:
      'Crop inside the social app later if you must — but flipping at full resolution first usually means sharper lettering and fewer “why does this look muddy?” moments.',
    supportingSections: [
      {
        heading: 'One habit that saves headache',
        body: 'Mirror or flip before the app eats your pixels with aggressive compression. You can always crop after the direction looks right.',
      },
    ],
  },
  guide: {
    eyebrow: 'Start here if it still feels fuzzy',
    headline: 'Guides that meet you where you are',
    intro:
      'Maybe you mixed up flip and rotate. Maybe your selfie saves “backward” compared to what you saw on screen. Maybe you mirrored a slide and suddenly the text on the product box is gibberish. These guides walk through it slowly — no pretending you majored in design software.',
    introSecondary:
      'Every lesson ends the same satisfying way: you upload, tap horizontal or vertical, download. Along the way we answer the awkward stuff — “did I wreck quality?” “can I undo this?” “why does PowerPoint still show the old thumbnail?” — so you don’t spiral.',
    supportingSections: [
      {
        heading: 'Read a guide or jump straight to the tool?',
        body: 'If words like “mirror” and “vertical flip” stress you out, skim a guide first. If you already know what you need, open the flipper — you’ll be done before your coffee’s cool.',
      },
    ],
  },
  compare: {
    eyebrow: 'Same goal, different tools',
    headline: 'Canva vs Photoshop vs a quick flip in the browser',
    intro:
      'I’ll level with you: Canva shines when templates, teammates, and brand colors live in one place. Photoshop earns its subscription when masks, timelines, and client PSDs mean business. Sometimes you’re not choosing a philosophy — you just need that photo pointing the other way without waiting for Creative Cloud to launch.',
    introSecondary:
      'We’re happiest when all you need is flip / mirror geometry. Slide back into Canva or Photoshop when editable type, grids, approvals, or smart objects matter. Nobody wins when you squash a masterpiece just to shave ten seconds.',
    supportingSections: [
      {
        heading: 'Stick with Canva/Photoshop when…',
        body: 'You’re nurturing Illustrator-linked smart objects, juggling five simultaneous artboard ratios, or the whole approvals thread breathes Creative Cloud oxygen. Totally fair — sneak out later with a JPG when only direction changed.',
      },
    ],
  },
};
