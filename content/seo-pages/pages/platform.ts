import type { SeoPageConfig } from '../types';

export const platformPages: SeoPageConfig[] = [
  {
    category: 'platform',
    slug: 'flip-image-on-iphone',
    title: 'Flip an Image on iPhone (Safari-First)',
    description:
      'Mirror iPhone Photos in Safari: tap upload, flip horizontal/vertical, save back to library. HEIC decode friendlier than Windows Chrome.',
    listingBlurb:
      'iOS capture pipeline nuances—Live Photos, depth data, Screen Time parental devices—explained before someone rage-quits mirrored selfies.',
    h1: 'Flip an image on iPhone',
    intro:
      'iOS gatekeeps photo pickers tightly; Safari enjoys first-class integration grabbing full-resolution assets from Recents.',
    introSecondary:
      'Chrome iOS uses WebKit underneath yet sometimes lags metadata—start Safari when uploads mysteriously downscale resolution.',
    takeawayBullets: [
      'Duplicate HEIC → JPEG if Mac colleagues cannot preview flipped output.',
      'Use Share → Save Image after download blob hits Files app.',
      'Pair `/use-cases/fix-mirrored-selfie` emotionally matching search journey.',
    ],
    sections: [
      {
        heading: 'Photos permission prompts',
        body:
          'iOS 17+ surfaces limited library access—grant “Add Photos Only” minimally if privacy neurosis high; flipping still works read-only path.',
      },
      {
        heading: 'Shortcuts automation optional',
        body:
          'Power users can automate save-to-album after flipping—document manual flow first for reproducibility across family devices.',
      },
      {
        heading: 'iCloud sync latency',
        body:
          'Flipping while Original still downloading from cloud may warn size mismatch—wait Wi-Fi sync completion indicator before editing.',
      },
    ],
    steps: [
      { name: 'Safari launch', text: 'Paste URL, avoid in-app browsers blocking downloads until iOS 18 improvements land.' },
      { name: 'Upload + mirror', text: 'Pick portrait or landscape shot; horizontal first for vanity alignment tests.' },
      { name: 'Save', text: 'Downloads stack in Files → move to album or AirDrop Mac desktop handoff.' },
    ],
    faqEyebrow: 'iPhone workflow',
    faqTitle: 'Safari, Chrome iOS, HEIC hiccups',
    faqIntro:
      'Cuts through App Store noise promising heavy editors for simple mirror tasks.',
    faq: [
      {
        category: 'iOS',
        question: 'Why Safari over Chrome iPhone technically?',
        answer:
          'Picker integration + download destination defaults historically smoother—retest semi-annually Apple updates.',
      },
      {
        category: 'iOS',
        question: 'Shortcuts “Quick Look” still mirrored afterwards?',
        answer:
          'Some preview caches stale—force quit Files app busting derivative thumbnail.',
      },
      {
        category: 'iOS',
        question: 'AirDrop Mac flips metadata EXIF Orientation?',
        answer:
          'Mirrored pixels baked into file resetting orientation tag expectations—communicate stakeholders reviewing macOS Preview.',
      },
      {
        category: 'iOS',
        question: 'Live Photo components survive flip?',
        answer:
          'Exporting still grabs key frame; motion layer may desync—flatten intentionally when motion irrelevant.',
      },
      {
        category: 'iOS',
        question: 'Screen Time limits blocking downloads?',
        answer:
          'Parental configs may block arbitrary blob saves—request temporary relaxation from admin.',
      },
    ],
    keywords: ['flip image on iphone safari', 'mirror photo iphone', 'ios flip image online'],
    relatedPaths: ['/use-cases/fix-mirrored-selfie', '/tools/flip-heic-image'],
  },
  {
    category: 'platform',
    slug: 'flip-image-on-android',
    title: 'Flip an Image on Android (Chrome)',
    description:
      'Use Chrome or Samsung Internet to upload gallery shots, mirror, move output from Downloads into Google Photos albums.',
    listingBlurb:
      'OEM skin variance (One UI, Pixel Material) explained so support tickets stop blaming “Android broken.”',
    h1: 'Flip an image on Android',
    intro:
      'Android exposes Storage Access Framework pickers pointing Google Photos, Downloads, SD cards—mirror once preview decodes correctly.',
    introSecondary:
      'Low-RAM devices choke giant 200MP exports—downscale inside Google Photos editor first if canvas stutters noticeably.',
    takeawayBullets: [
      'Pin site to home screen for kiosk-like studio workflow.',
      'Verify scoped storage permissions on Android 13+ privacy revamp.',
      'Mirror before Instagram mobile crop if desktop unavailable.',
    ],
    sections: [
      {
        heading: 'Chrome vs Samsung Internet decode',
        body:
          'Samsung devices sometimes prefer Samsung Internet hardware decode paths—test both if WebP upload blank screen occurs.',
      },
      {
        heading: 'Scoped storage gotchas',
        body:
          'Android 11+ isolates app-specific directories—moving flipped file into shared gallery might need “Save to Photos” share target.',
      },
      {
        heading: 'Work profile separation',
        body:
          'Enterprise MDM may block cross-profile file pickers—mirror within personal profile containing media asset only.',
      },
    ],
    steps: [
      { name: 'Open secure browser', text: 'Prefer updated Chrome channel receiving security patches promptly.' },
      { name: 'Pick file', text: 'Navigate Google Photos albums or device camera folder.' },
      { name: 'Save + album', text: 'Use Files app “Move to” placing mirrored asset inside desired DCIM subfolder optionally.' },
    ],
    faqEyebrow: 'Android quirks',
    faqTitle: 'Pickers, RAM, OEM browsers',
    faqIntro:
      'Android has a dozen ways to stash a JPEG; these FAQs cover picker weirdness without asking you to read a changelog.',
    faq: [
      {
        category: 'Android',
        question: 'Downloads disappearing after reboot?',
        answer:
          'Some OEM cleaners purge ephemeral downloads—rename file immediately preserving orientation tweak.',
      },
      {
        category: 'Android',
        question: 'HEIF on Pixel identical guidance iPhone?',
        answer:
          'Broadly yes—still verify decode path per Chrome milestone release notes quarterly.',
      },
      {
        category: 'Android',
        question: 'Split-screen DeX desktop mirroring?',
        answer:
          'Samsung DeX multitasking works—ensure mouse drag-drop targets dashed upload hotspot precisely.',
      },
      {
        category: 'Android',
        question: 'MicroSD exFAT uploads failing?',
        answer:
          'Corruption risk high—copy file internal storage flipping locally stable path.',
      },
      {
        category: 'Android',
        question: 'Chrome Lite mode breaking canvas?',
        answer:
          'Disable data saver temporarily ensuring WebAssembly canvas operations succeed.',
      },
    ],
    keywords: ['flip image android chrome', 'mirror photo samsung', 'google photos flip workaround'],
    relatedPaths: ['/tools/mirror-image-online', '/guides/how-to-flip-an-image'],
  },
  {
    category: 'platform',
    slug: 'flip-image-for-instagram',
    title: 'Flip an Image for Instagram Posts & Stories',
    description:
      'Mirror stills full-res before Instagram compresses—Stories, Reels posters, carousel cards keep typography facing safe zones cleanly.',
    listingBlurb:
      'Social coordinators aligning directional stickers + product glare before Meta creative hub reviews.',
    h1: 'Flip an image for Instagram',
    intro:
      'Instagram’s bespoke crop engines reinterpret composition—mirroring beforehand locks subject gaze relative static UI chrome overlays.',
    introSecondary:
      'Feed 4:5 vs Story 9:16 safe zones reposition stickers—finalize flip prior duplicating layered PSD slices.',
    takeawayBullets: [
      'Pair `/tools/flip-and-resize-image` sequencing doc mentally while editing.',
      'Watch reversed text overlays when flipping lifestyle photography containing signage.',
      'Export sRGB calibrated JPEG reducing odd gamut clipping surprises post-upload.',
    ],
    sections: [
      {
        heading: 'Carousel continuity planning',
        body:
          'Multi-slide narratives assume consistent directional flow—mirror foundational master still syncing outfit continuity across carousel slots.',
      },
      {
        heading: 'Collaboration tagging',
        body:
          'Internal Asana tickets referencing mirrored Instagram asset version `v3_flipH_final` avoids stakeholders approving outdated orientation unknowingly.',
      },
      {
        heading: 'Branded GIF stickers interplay',
        body:
          'GIF stickers sometimes anchor mirrored opposite expectation—mirror base photo aligning sticker choreography pre-upload.',
      },
    ],
    faqEyebrow: 'Instagram ops',
    faqTitle: 'Compression, cropping, carousel QA',
    faqIntro:
      'Grounds FAQs in growth-team vocabulary — not influencer clichés exclusively.',
    faq: [
      {
        category: 'Social',
        question: 'Does flipping before Stories reduce compression artefacts?',
        answer:
          'Indirectly yes—fewer frantic in-app reposition tweaks lowering generation passes.',
      },
      {
        category: 'Social',
        question: 'Business suite scheduling mirrored assets?',
        answer:
          'Meta Business Suite caches derivatives—purge after updating orientation master.',
      },
      {
        category: 'Social',
        question: 'Shopping tags symmetrical product orientation?',
        answer:
          'Tag hotspots might misalign mirrored SKU—recalibrate after geometry fix.',
      },
      {
        category: 'Social',
        question: 'Collaborator DM approvals referencing wrong flip?',
        answer:
          'Version naming convention resolves confusion—enforce checklist item “confirm axis label”.',
      },
      {
        category: 'Social',
        question: 'Dark mode preview mismatch?',
        answer:
          'Instagram still applies uniform compression—dark UI chrome unrelated pixel pipeline.',
      },
    ],
    keywords: ['flip image for instagram stories', 'mirror instagram carousel', 'instagram photo horizontal flip'],
    relatedPaths: ['/tools/flip-gif-image', '/platform/flip-image-for-tiktok'],
  },
  {
    category: 'platform',
    slug: 'flip-image-for-tiktok',
    title: 'Flip an Image Before TikTok Editor Import',
    description:
      'Normalize still plates + green screen references before TikTok overlays skew directional motion graphics templates.',
    listingBlurb:
      'Editing teams handling CapCut interoperability + mirrored dance challenge symmetry references.',
    h1: 'Flip an image for TikTok',
    intro:
      'TikTok’s native editor rotates clips aggressively—still JPG plates imported early risk misalignment when creators rely on symmetrical compositions.',
    introSecondary:
      'Mirror master still aligning choreographer directional cues BEFORE importing CapCut timelines reduces frame-by-frame nudging fatigue.',
    takeawayBullets: [
      'Export square or vertical plates matching TikTok canvas pre-compression thresholds.',
      'Watch reversed typography on hoodie merch photography.',
      'Pair `/platform/flip-image-for-instagram` for cross-post symmetry discipline.',
    ],
    sections: [
      {
        heading: 'Thumbnail direction before you obsess over CTR',
        body:
          'A mirrored cover frame can steer where the viewer’s eyes go—worth A/B-testing with your own audience and ethics in mind.',
      },
      {
        heading: 'Greenscreen plate orientation',
        body:
          'Flipping keyed plates misalign spill suppression edges—finalize orientation before AE keylight pipeline.',
      },
      {
        heading: 'Sound-synced choreography',
        body:
          'Dancers anticipating camera-left motion cues rely on mirrored preview vs saved file interplay—coordinate with TikTok selfie fix guide.',
      },
    ],
    faqEyebrow: 'Short video',
    faqTitle: 'Exports, choreography, typography',
    faqIntro:
      'Short-form apps love to recompress and re-center your hero image—mirror first, tweak stickers second, rant in the group chat never.',
    faq: [
      {
        category: 'Social',
        question: 'Does TikTok editor re-import mirrored JPG differently RAW video?',
        answer:
          'Still JPG pipeline compresses distinctly from ProRes ingest—maintain archival masters.',
      },
      {
        category: 'Social',
        question: 'Commercial licensing mirrored UGC thumbnails?',
        answer:
          'Contract must specify derivative orientation rights—mirror ≠ transformative fair use inherently.',
      },
      {
        category: 'Social',
        question: 'Brand safety scanning mirrored gestures?',
        answer:
          'Some moderation AI flags asymmetric hand poses flipped—manual review escalate if suppression false-positive.',
      },
      {
        category: 'Social',
        question: 'Dueting mirrored clips orientation chaos?',
        answer:
          'Duets juxtapose originals—maintain directional clarity labeling mirrored variant “ALT version”.',
      },
      {
        category: 'Social',
        question: 'Shopify TikTok storefront sync?',
        answer:
          'Mirrored PDP hero might mismatch catalog orientation—purge CDN after orientation fix.',
      },
    ],
    keywords: ['tiktok thumbnail mirror', 'flip image tiktok edit', 'capcut mirror still'],
    relatedPaths: ['/platform/flip-image-for-instagram'],
  },
  {
    category: 'platform',
    slug: 'flip-image-for-whatsapp',
    title: 'Flip an Image Before Sending on WhatsApp',
    description:
      'Flatten mirrored portraits before WhatsApp recompress losing EXIF Orientation nuance unpredictable across iOS/Android clients.',
    listingBlurb:
      'Family chat admins fixing mirrored vaccination card snapshots before forwarding clinics.',
    h1: 'Flip an image for WhatsApp',
    intro:
      'WhatsApp aggressively downscales long edge—mirroring BEFORE send prevents double confusion when recipients open desktop web client rendering differently.',
    introSecondary:
      'Forwarded message chains degrade quality iteratively—start orientation-perfect upstream preserving legibility grandma devices.',
    takeawayBullets: [
      'Document sensitive PII blurred regardless orientation.',
      'Forward-once mentality: flipping early stops rumor chains referencing wrong readability.',
      'WhatsApp Business catalog parity with Instagram optional cross-check orientation.',
    ],
    sections: [
      {
        heading: 'Encrypted backup implications',
        body:
          'Google Drive WhatsApp backups store mirrored bytes faithfully—changing orientation afterward requires resharing correcting misinformation politely.',
      },
      {
        heading: 'Status vs chat compression delta',
        body:
          'Status updates compress heavier—prioritize flipping master before cropping vertical status safe zones referencing thumb stopping patterns.',
      },
      {
        heading: 'Forwarded metadata stripping',
        body:
          'EXIF stripping after forward may confuse archival orientation—rename file conveying axis applied.',
      },
    ],
    faqEyebrow: 'Messaging',
    faqTitle: 'Compression ladders, HIPAA-ish caution, elders UX',
    faqIntro:
      'Practical family/workplace answers beyond generic messenger tips listicles.',
    faq: [
      {
        category: 'Messaging',
        question: 'Does WhatsApp Web preview cached orientation wrongly?',
        answer:
          'Occasionally CDN stale—recipient hard refresh or request re-send after correcting.',
      },
      {
        category: 'Messaging',
        question: 'Voice note etiquette flipping irrelevant?',
        answer:
          'Yes separate modality—stay focused visuals only minimizing scope creep FAQs.',
      },
      {
        category: 'Messaging',
        question: 'Business API template media mirrored?',
        answer:
          'Template JSON referencing media URLs must regenerate after flipping—avoid referencing immutable CDN hashed prior orientation.',
      },
      {
        category: 'Messaging',
        question: 'Group admins moderating sideways memes?',
        answer:
          'Pin corrected version referencing moderator note flipping applied for OCR readability—not censorship.',
      },
      {
        category: 'Messaging',
        question: 'End-to-end encryption orientation privacy?',
        answer:
          'Flipping mathematics occurs pre-encrypt uploading—recipient sees final geometry only.',
      },
    ],
    keywords: ['whatsapp image mirror', 'flip photo before whatsapp compress'],
    relatedPaths: ['/tools/flip-jpg-image', '/tools/flip-image-horizontally'],
  },
];
