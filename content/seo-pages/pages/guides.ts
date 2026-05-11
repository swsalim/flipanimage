import type { SeoPageConfig } from '../types';

export const guidePages: SeoPageConfig[] = [
  {
    category: 'guide',
    slug: 'how-to-flip-an-image',
    title: 'How to Flip an Image (simple walkthrough)',
    description:
      'Three steps — upload, pick horizontal or vertical, download. Plain-English primer so “flip” and “rotate” stop feeling like riddles.',
    listingBlurb:
      'Perfect when you taught someone to flip once and forgot which icon was which — or when the group chat is arguing flip vs rotate on a JPG.',
    h1: 'How to flip an image',
    intro:
      'Think of a flip like holding your photo up to the mirror — but on purpose. Horizontal flip swaps left with right (the selfie “fix” folks talk about most). Vertical flip swaps top with bottom.',
    introSecondary:
      'Neither one tilts your horizon the way Rotate does on your phone — they only mirror pixels that are already upright. Reach for vertical when a scan landed upside-down, or when you’re playing with reflections on purpose.',
    takeawayBullets: [
      'Most “why does my selfie look wrong?” chats end with one horizontal flip on the saved file.',
      'Vertical flip is the unsung hero for upside-down receipts and scans — before OCR or printing.',
      'Need fuzzy edges behind a sticker or logo clip? Prefer PNG or WebP so transparency survives export.',
    ],
    sections: [
      {
        heading: 'Flip and rotate aren’t interchangeable (and that’s okay)',
        body:
          'Rotate grabs the corners and twists the canvas by degrees. Flip never tips the photo — it only mirrors what’s already there. Mix them up once and harmless becomes “why is the granola bar label backwards?” on a deck. Naming your files after flipping saves your future self.',
      },
      {
        heading: 'JPEG vs PNG vs WebP — after you flip',
        body:
          'JPEG is slim and email-friendly — great until you rely on invisible pixels behind a sticker; JPEG flattens them to a matte. PNG hangs onto transparency crisp for decks and comps. WebP is the modern middle ground — small files, transparency on most current browsers.',
      },
      {
        heading: 'Here’s how you’ll know nothing went sideways — literally',
        body:
          'Flip twice on the same axis and you land back on the original. If you stacked a bunch of edits and forgot what happened, try that cheat before you yell at Slack.',
      },
    ],
    steps: [
      { name: 'Open the flipper', text: 'Use the dashed upload zone on this page — same trusty control as everywhere else on the site.' },
      { name: 'Tap horizontal or vertical', text: 'Watch the preview until expressions, horizons, or any real-world lettering look “right.”' },
      { name: 'Save with a breadcrumb name', text: 'Add `_flipH` or `_flipV` to the filename so three weeks from now Dropbox search still tells the story.' },
    ],
    faqEyebrow: 'Questions we all ask first',
    faqTitle: 'Flip vs rotate, quality, selfies',
    faqIntro:
      'If you wondered “did I wreck the file?” or “is this reversible?” — you’re in good company. Short answers below.',
    faq: [
      {
        category: 'Basics',
        question: 'Does flipping ruin image quality?',
        answer:
          'Mirroring rearranges pixels. Quality loss appears only after you compress again—especially when you download as a fresh JPEG.',
      },
      {
        category: 'Basics',
        question: 'Is flipping the same as inverting colours?',
        answer:
          'No. Colour inversion changes brightness curves. Flipping preserves every tone and only swaps geometry.',
      },
      {
        category: 'Basics',
        question: 'Which flip fixes a mirrored selfie?',
        answer:
          'Usually a single horizontal flip. If overlays include text from the real world, zoom in—the letters must still read forward.',
      },
      {
        category: 'Basics',
        question: 'Can I undo a flip after downloading?',
        answer:
          'Yes by applying the same flip again before you resize or sharpen the file downstream.',
      },
      {
        category: 'Basics',
        question: 'Why does my slideshow still show the old orientation?',
        answer:
          'Presentation apps cache thumbnails. Quit the deck, purge the cache folder, or re-import the mirrored asset.',
      },
    ],
    keywords: ['how to flip an image tutorial', 'flip vs rotate photo basics'],
    relatedPaths: ['/tools/flip-image-horizontally', '/guides/how-to-mirror-photo'],
  },
  {
    category: 'guide',
    slug: 'how-to-mirror-photo',
    title: 'How to mirror a photo (without regretting it)',
    description:
      '“Mirror” here means geometry — left/right or up/down — not Beauty mode. Heads-up: lettering, QR codes, and logos flip with everything else.',
    listingBlurb:
      'Good when someone says “just mirror it” — and you quietly wonder whether Pepsi on a hoodie stays readable afterward.',
    h1: 'How to mirror a photo',
    intro:
      'Here’s what almost everyone says out loud — “mirror this picture” — and what we actually do: flip the left half of the frame onto the right, or flip top-bottom if you chose vertical.',
    introSecondary:
      'Creative folks sometimes say “reflection” and mean vertical; others mean left-right selfie logic. Scroll the FAQs whichever version you had in mind — we cover both kindly.',
    takeawayBullets: [
      'Zoom in once for text, QR stickers, hoodie prints — mirrors don’t magically spare them.',
      'If the whole photo lies sideways on its side, that’s Rotate’s job — not Mirror’s.',
      'A short note beside the slide (“Mirrored H for crop balance”) avoids “who broke the deck?” replies.',
    ],
    sections: [
      {
        heading: 'Selfie mirror vibes vs how the light falls',
        body:
          'Mirroring a face rewires cheek shadows — fine for TikTok thumbnails, questionable if Grandma knows your mole only sits on one side. No judgment; just peek before you publish.',
      },
      {
        heading: 'Listings & spaces where trust genuinely matters',
        body:
          'Flipping kitchens or stairwells isn’t inherently evil — pretending it wasn’t mirrored when someone tours in person breaks trust faster than bad Wi-Fi.',
      },
      {
        heading: 'Product heroes: shadows and labels bite back',
        body:
          'Turning packaging around tweaks glare and SKU legibility together. Zoom the label crop before anybody approves.',
      },
    ],
    steps: [
      { name: 'Glance overlays first', text: 'Handwritten labels, captions, QR codes — if they’d feel wrong spelled backward at a deli, flip them thoughtfully.' },
      { name: 'Default to horizontal mirror', text: 'That resolves most “backward selfie energy” thumbnails without sideways rotation drama.' },
      { name: 'Leave a teammate a clue', text: 'Note on the mirrored slide internally so approvals don’t think the template slid off the rails.' },
    ],
    faqEyebrow: 'The finer print',
    faqTitle: 'When mirroring can surprise you',
    faqIntro:
      'Mirroring isn’t morally gray every time — it’s geometrically careless sometimes. Peek below before you flip something that represents a promise to a viewer.',
    faq: [
      {
        category: 'Mirroring',
        question: 'Does mirroring change resolution?',
        answer:
          'Resolution stays intact until another tool resamples pixels; flipping alone just reorders existing pixels.',
      },
      {
        category: 'Mirroring',
        question: 'Difference between flip horizontal and flip vertical?',
        answer:
          'Horizontal mirrors across a vertical line; vertical mirrors across a horizontal line—confusing on paper, obvious once you see both in the flipper.',
      },
      {
        category: 'Mirroring',
        question: 'Can mirrored photos hurt accessibility?',
        answer:
          'Yes when charts imply reading order. Supplement mirrored slides with narration or textual summaries describing directionality.',
      },
      {
        category: 'Mirroring',
        question: 'Should stock photography be mirrored freely?',
        answer:
          'Check the license—even some royalty-free catalogs restrict mirroring tied to recognizable landmarks.',
      },
      {
        category: 'Mirroring',
        question: 'Does mirroring help print alignment on transfer paper?',
        answer:
          'Heat-transfer instructions sometimes require mirrored artwork intentionally. Confirm with the garment vendor before publishing.',
      },
    ],
    keywords: ['how to mirror photo left right online', 'mirror photo meaning flip'],
    relatedPaths: ['/tools/mirror-image-online', '/use-cases/fix-mirrored-selfie'],
  },
  {
    category: 'guide',
    slug: 'how-to-fix-mirrored-camera',
    title: 'How to Fix a “Backward” Smartphone Selfie Save',
    description:
      'Why preview hair parts one way yet the JPEG lands the other—and how one horizontal flip on the real usually fixes it.',
    listingBlurb:
      'Ever rehearse smiling in selfie mode — then Camera Roll shocks you because the sides flipped? Friend, you aren’t imagining it.',
    h1: 'How to fix mirrored camera output',
    intro:
      'Many front cameras spoil you with a mirrored live preview (“like the bathroom mirror”) — then thoughtfully save pixels the lens actually saw.\n\nIf you memorize expressions off that preview flip, exports can throw you — your phone didn’t sabotage brunch.',
    introSecondary:
      'Before you reinstall apps, export the flattened photo and flip horizontally here. Serious RAW shooters juggling Lightroom catalogs still tweak orientation upstream — casual phone JPEGs obey the simpler playbook below.',
    takeawayBullets: [
      'Squint at the real JPEG — not Stories’ cached thumbnail ghosts.',
      'Save a virgin copy somewhere before iterating so you compare “before flip” calmly.',
      'Upload still acting weird after mirror? Peek our iPhone/Android platform pages — pickers can be petty.',
    ],
    sections: [
      {
        heading: 'Manufacturers sincerely disagree — on purpose',
        body:
          'Apple historically keeps preview mirror-comfort friendly. Other brands tucked “shoot as saved” buried in Accessibility menus. Neither team emails you syllabus night before launch — so skim settings once quarterly.',
      },
      {
        heading: 'Slack/discord selfie cameras pretend none of us exist',
        body:
          'In-app shooters sometimes ignore whichever rule your OEM picked. Normalize once exported to Photos — don’t troubleshoot inside seventeen nested UI chrome layers simultaneously.',
      },
      {
        heading: 'Tiny metadata vs pixel truth',
        body:
          'Gallery apps lovingly rotate thumbnails with EXIF flags while untouched pixels linger underneath. Baking a deliberate flip merges geometry into literal pixels — one extra JPG save versus forever wondering “why did Instagram flip again?” Pick your villain.',
      },
    ],
    steps: [
      { name: 'Grab the flattened still', text: 'AirDrop, Photos Share, Google Photos — whatever grabs the authoritative file off the phone.' },
      { name: 'Mirror horizontally preview', text: 'Iterate until collaborators recognize your hair-part line and sleeve tattoos intuitively.' },
      { name: 'Rename politely', text: 'Try `selfie_mirrorfix_v2.jpg` instead of overwriting — influencer folders love receipts months later.' },
    ],
    faqEyebrow: 'Phones & selfies',
    faqTitle: 'Straight talk on rotations & TikTok quirks',
    faqIntro:
      'Answers you’d Slack a patient friend mid-shoot.',
    faq: [
      {
        category: 'Camera',
        question: 'Will rotating instead of flipping accomplish the same thing?',
        answer:
          'Only sideways frames benefit from rotation. Mirrored selfies are usually upright already—rotation would twist them incorrectly.',
      },
      {
        category: 'Camera',
        question: 'Do DSLR or mirrorless cameras mimic this issue?',
        answer:
          'Rarely. Optical viewfinders and rear LCD framing align more closely with the saved RAW/JPEG orientation.',
      },
      {
        category: 'Camera',
        question: 'Why does TikTok preview differ from saved camera roll?',
        answer:
          'Apps sometimes bake tweaks before exporting to Camera Roll — fix orientation on the exported file you actually keep, not chasing RAM-only previews.',
      },
      {
        category: 'Camera',
        question: 'Does flipping harm portrait-mode depth?',
        answer:
          'Rarely perceptibly, though edge-detection softness can shift asymmetrically along hair strands—inspect at 100% zoom.',
      },
      {
        category: 'Camera',
        question: 'Should creators disclose mirrored selfies for ads?',
        answer:
          'Sponsored-post rules focus on sponsorships first — pairing that, mirroring can change how logos read. Healthcare or regulated niches deserve a quick legal gut-check.',
      },
    ],
    keywords: ['fix mirrored front camera', 'smartphone selfie saved backwards'],
    relatedPaths: ['/use-cases/fix-mirrored-selfie', '/platform/flip-image-on-iphone'],
  },
  {
    category: 'guide',
    slug: 'how-to-flip-image-without-photoshop',
    title: 'How to Flip an Image Without Photoshop or Illustrator',
    description:
      'No subscription tour today — just mirror what you need in the browser, then know when layered Adobe files still deserve Adobe.',
    listingBlurb:
      'For the desk where IT says “no installs” but your boss still says “just flip the hero — now.”',
    h1: 'Flip an image without Photoshop',
    intro:
      'Photoshop is a Swiss Army hangar when you’re compositing, masking, or typesetting a magazine cover. For one Slack attachment that only needs to face the other direction? You’re allowed the lighter path.',
    introSecondary:
      'Locked-down computers still run browsers — that’s why a tab-based flipper surprises nobody in airport hot-desk land. When smart objects and linked logos enter the story, we’ll nudge you back home to Creative Cloud below.',
    takeawayBullets: [
      'No admin rights? Modern Chrome/Safari/Edge still mirror pixels here — coffee shop tested.',
      'Keep master PSDs layered in Adobe; bake a flat JPG out when reviewers only care about left vs right.',
      'Canva fan or Photoshop lifer? Our compare pages spell when each tool still wins without throwing shade.',
    ],
    sections: [
      {
        heading: 'Sixty-second wins',
        body:
          'Symmetry checks, hero faces left vs right, “wait that thumbnail felt backward” — browser speed counts more than stack depth on those days.',
      },
      {
        heading: 'When we gently hand you back to Adobe',
        body:
          'Linked Illustrator comps, chunky smart-object chains, brittle masks — mirror there or risk orphaned links crying in your DAM folder.',
      },
      {
        heading: 'Friendly note for workplace security folks',
        body:
          'IT teams often green-light known HTTPS tooling faster than stray EXEs nobody’s read. Screenshots documenting “geometry-only tweak” tame audit heartburn later.',
      },
    ],
    steps: [
      { name: 'Pick fastest honest toolpath', text: 'If Illustrator’s already open beside you — maybe flip native. Else upload here confidently.' },
      { name: 'Upload flattened proofs', text: 'When teammates only scrutinize shadow direction strip alpha confusion — JPG/PNG keep feedback focused.' },
      { name: 'Download + breadcrumb naming', text: 'Attach mirrored asset to approvals or ticketing with a recognizable filename (`hero_fliph_clientB.png`).' },
    ],
    faqEyebrow: 'Adobe-lite workflows',
    faqTitle: 'Subs vs ninety-second errands',
    faqIntro:
      'We won’t whisper we replace Photoshop masks — wouldn’t insult your intelligence.',
    faq: [
      {
        category: 'Alternative',
        question: 'Does flipping here replace Lightroom lens corrections?',
        answer:
          'No. Lightroom applies optical transforms—flipping is purely geometric reordering afterward.',
      },
      {
        category: 'Alternative',
        question: 'Linux workstations supported?',
        answer:
          'If your distro runs a reasonably current Chromium or Firefox fork you’re laughing — flipping lives in Canvas, not in OS politics.',
      },
      {
        category: 'Alternative',
        question: 'Corporate proxies blocking canvas?',
        answer:
          'Ask friendly IT to whitelist the domain—or hop on approved hardware with sane GPU acceleration. Weird edge cases deserve weird conversations.',
      },
      {
        category: 'Alternative',
        question: 'Batch automation possible?',
        answer:
          'This flow loves one thoughtful human approving each hero; spin up scripts elsewhere when you churn hundreds mechanically.',
      },
      {
        category: 'Alternative',
        question: 'Does Acrobat PDF export matter here?',
        answer:
          'Sometimes PDF thumbnails hide rotation quirks — rasterize cleanly before flipping if Acrobat misbehaved earlier.',
      },
    ],
    keywords: ['flip image without photoshop browser', 'free mirror tool no cc'],
    relatedPaths: ['/compare/photoshop-flip-image-alternative', '/guides/how-to-flip-an-image'],
  },
];
