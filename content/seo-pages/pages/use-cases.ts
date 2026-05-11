import type { SeoPageConfig } from '../types';

export const useCasePages: SeoPageConfig[] = [
  {
    category: 'use-case',
    slug: 'fix-mirrored-selfie',
    title: 'Fix a Mirrored Selfie Online',
    description:
      'Front cameras sometimes save the opposite orientation from preview. Horizontal flip selfies in-browser until hair part + background feel natural again.',
    listingBlurb:
      'Fixing front-camera selfies that save the opposite of what you saw on screen—hair part, background, and overlays.',
    h1: 'Fix a mirrored selfie',
    intro:
      'You rehearsed your smile watching a mirrored preview—the saved JPEG sometimes records the unreversed optical path instead.',
    introSecondary:
      'That mismatch rattles symmetry-sensitive people noticing hair parts and jewelry placement. Flipping restores the mirrored mental model unless text overlays block it.',
    initialFlip: 'horizontal',
    takeawayBullets: [
      'Typically one horizontal toggle fixes preview vs capture mismatch.',
      'Read reversed text overlays before publishing brand collabs.',
      'Pair iPhone/Android platform guides when picker quirks confuse uploads.',
    ],
    sections: [
      {
        heading: 'Psychology of mirror selfies',
        body:
          'Mirrors swap left and right; a saved photo might not. Small details (hair part, jewelry, scars) look “off” when the file does not match what you remembered from the preview.',
      },
      {
        heading: 'Beauty brand compliance',
        body:
          'If you fix a mirrored selfie for a sponsored post, say clearly when the image is flipped for illustration so labels and on-image copy stay truthful.',
      },
      {
        heading: 'Backdrop text reversing',
        body:
          'After you flip, any signage or posters in the background can read backward—crop them out, blur them, or pick another frame before you publish.',
      },
    ],
    steps: [
      { name: 'Export selfie JPEG/HEIC', text: 'Sync from Photos or Google Photos original quality when possible.' },
      { name: 'Horizontal mirror', text: 'Apply once comparing preview side-by-side with camera roll thumbnail.' },
      { name: 'Save conscious copy', text: 'Re-export minimally to avoid softness stacking JPEG passes.' },
    ],
    faqEyebrow: 'Mirrored selfies',
    faqTitle: 'Front camera quirks, beauty filters, EXIF pitfalls',
    faqIntro:
      'Preview vs saved file, quality, HEIC, Stories—common questions in plain language.',
    faq: [
      {
        category: 'Selfie',
        question: 'Flip twice—do I degrade quality?',
        answer:
          'Geometry toggles reversible; degradation arrives only repeating lossy JPEG exports.',
      },
      {
        category: 'Selfie',
        question: 'Beauty mode skin smoothing undone here?',
        answer:
          'No—this adjusts orientation only; retouch pipelines stay upstream in camera apps.',
      },
      {
        category: 'Selfie',
        question: 'Instagram Stories still mirror after upload?',
        answer:
          'Stories sometimes overlay mirrored overlays intentionally—inspect safe zones flipping master still first.',
      },
      {
        category: 'Selfie',
        question: 'Does HEIC deepen colour vs JPEG after flip?',
        answer:
          'HEIC keeps wider gamut assuming decode succeeds; mirrored geometry identical across codecs.',
      },
      {
        category: 'Selfie',
        question: 'Partners dislike mirrored tattoos appearing wrong side?',
        answer:
          'Document approval noting intentional mirror fix referencing brand brief before posting.',
      },
    ],
    keywords: ['fix mirrored selfie', 'front camera selfie reversed', 'iphone selfie mirror wrong'],
    relatedPaths: ['/tools/flip-image-horizontally', '/platform/flip-image-on-iphone', '/guides/how-to-fix-mirrored-camera'],
  },
  {
    category: 'use-case',
    slug: 'flip-product-photo',
    title: 'Flip Product Photos for Marketplaces',
    description:
      'Mirror catalog shots facing consistent direction across Shopify grids, Etsy carousels, Amazon A+ spreads—watch packaging text reversing.',
    listingBlurb:
      'Online sellers mirroring catalog shots for cleaner grids—double-check labels, barcodes, and shadows match marketplace rules.',
    h1: 'Flip a product photo',
    intro:
      'Catalog and PDP grids often look cleaner when every hero faces the same way. Mirroring adjusts direction without a new shoot—if labels and lighting still look honest.',
    introSecondary:
      'Packaging type and barcodes will read backward if they are not symmetrical—mirror only when the art and compliance rules still make sense.',
    takeawayBullets: [
      'Keep glare and shadows believable so the set still looks like one shoot.',
      'Combine with PNG pages when overlays show transparency-heavy bottle shots.',
      'Keep raw layered masters archived before marketplace compression.',
    ],
    sections: [
      {
        heading: 'Facing direction psychology',
        body:
          'Many storefront grids feel calmer when products face the same way. Mirroring can align direction without a reshoot—just keep lighting and shadows believable.',
      },
      {
        heading: 'Barcode + nutrition label warnings',
        body:
          'Flipping can mirror nutrition facts, ingredients, and barcodes. Have someone review the final image before it goes live on a pack or PDP.',
      },
      {
        heading: 'Seasonal catalogs batching symmetry',
        body:
          'Seasonal packs still need readable SKUs and legal copy. After mirroring, zoom in on small type and barcodes so mistakes do not ship in a batch update.',
      },
    ],
    faqEyebrow: 'Commerce flipping',
    faqTitle: 'Labels, SKU policy, glare continuity',
    faqIntro:
      'SKU shots, glare, mirrored labels—everything you skim before approving a PDP refresh.',
    faq: [
      {
        category: 'Commerce',
        question: 'Will Amazon reject mirrored lifestyle photography?',
        answer:
          'If packaging text mirrored unreadably risk rises—follow category style guides explicitly.',
      },
      {
        category: 'Commerce',
        question: 'Shopify thumbnails auto regenerate caching CDN mirrored assets?',
        answer:
          'Yes bust caches after orientation fix so returning shoppers load corrected orientation.',
      },
      {
        category: 'Commerce',
        question: 'White background compliance flipping shadows?',
        answer:
          'Shadow direction changes might violate category-specific lighting examples—consult Amazon Imaging Services FAQs.',
      },
      {
        category: 'Commerce',
        question: 'Multi-angle SKU sets require identical mirror?',
        answer:
          'Maintain consistent facing direction referencing master style guide spreadsheets.',
      },
      {
        category: 'Commerce',
        question: 'Does flipping affect color accuracy monitors?',
        answer:
          'No color shift inherent—recalibrate display separately if SKU colors drift perception.',
      },
    ],
    keywords: ['flip product photo ecommerce', 'mirror product shot shopify'],
    relatedPaths: ['/tools/flip-png-image', '/use-cases/flip-passport-photo'],
  },
  {
    category: 'use-case',
    slug: 'flip-scanned-document',
    title: 'Flip Scanned Documents & Receipts Fast',
    description:
      'Inverted scans kill OCR throughput—vertical or horizontal flipping rebuilds predictable baselines ahead of Acrobat or Google Drive OCR.',
    listingBlurb:
      'Straightening upside-down or mirrored scans and receipts before OCR, PDF assembly, or tax prep.',
    h1: 'Flip a scanned document image',
    intro:
      'ADF scanners flipping alternate pages upside-down unintentionally—you notice only after thumbnails misalign chronological PDF bookmarks.',
    introSecondary:
      'Flattened JPEG workflows prior to OCR crave upright baselines—we mirror geometry deterministically avoiding desk rescan.',
    initialFlip: 'vertical',
    takeawayBullets: [
      'Pair vertical flip upside-down OCR disasters faster than Acrobat rotate UI.',
      'Horizontal flipping fixes mirrored duplex oddities rare but painful.',
      'Archive raw scanner TIFF before chaining compression.',
    ],
    sections: [
      {
        heading: 'OCR ingestion pipelines',
        body:
          'OCR tools expect text to sit on a normal baseline. Flipping fixes whole-page mirror or upside-down mistakes; heavy skew is a different problem from mirroring.',
      },
      {
        heading: 'Thermal receipt fading caution',
        body:
          'Flipping does not bring back faded thermal print. Improve lighting or rescan first, then flip if the capture was mirrored or inverted.',
      },
      {
        heading: 'Batch rename discipline',
        body:
          'Apply consistent filename suffix `_flipped_horizontal` aiding downstream automation distinguishing orientation passes.',
      },
    ],
    faqEyebrow: 'Scans',
    faqTitle: 'OCR, ADF quirks, archiving',
    faqIntro:
      'Duplex quirks, Acrobat vs flip, encryption, and mobile scans—direct answers.',
    faq: [
      {
        category: 'Document',
        question: 'Horizontal vs vertical first for duplex?',
        answer:
          'Judge readable lines quickly—typically vertical fixes upside-down page halves.',
      },
      {
        category: 'Document',
        question: 'Does Acrobat auto deskew replace flipping?',
        answer:
          'Deskew rotates skew quadrilaterals; flipping mirrors entirely—solve different failure classes.',
      },
      {
        category: 'Document',
        question: 'Encrypt PDF before flipping raster export?',
        answer:
          'Decrypt locally first respecting policy; flipping operates on decrypted bitmap.',
      },
      {
        category: 'Document',
        question: 'Mobile scan apps mis-save mirrored whiteboards?',
        answer:
          'Yes front camera capture sometimes toggles unintentionally—mirror here before Slack distribution.',
      },
      {
        category: 'Document',
        question: 'GDPR implication flipping employee IDs?',
        answer:
          'Obfuscate PPI regardless orientation; flipping doesn’t anonymize inherently.',
      },
    ],
    keywords: ['flip scanned document ocr', 'upside down scan flip', 'mirror receipt photo'],
    relatedPaths: ['/tools/flip-image-vertically', '/tools/flip-jpg-image'],
  },
  {
    category: 'use-case',
    slug: 'reverse-logo-image',
    title: 'Reverse or Mirror a Logo Image Securely',
    description:
      'Preview mirrored logo marks studying slide decks—know vector teams still finalize production glyphs officially.',
    listingBlurb:
      'Quick raster preview of a flipped logo for a slide or mock—vector teams should still ship approved artwork for production.',
    h1: 'Reverse a logo image',
    intro:
      'Symmetric marks tolerate horizontal mirroring; wordmarks with asymmetrical serif stress break quickly once reversed.',
    introSecondary:
      'Use this raster preview aligning hero photography overlays before handing vector toggles upstream through brand portal.',
    takeawayBullets: [
      'Flag legal when regulated industries publish mirrored marks publicly.',
      'PNG transparency helps overlay mockups cleanly.',
      'Escalate to `/tools/flip-svg-image` disclaimers respecting engineering expectations.',
    ],
    sections: [
      {
        heading: 'Symmetric crest vs wordmark interplay',
        body:
          'Simple icons often tolerate a horizontal flip; script or asymmetric wordmarks can look wrong reversed—check with brand or design before publishing.',
      },
      {
        heading: 'Partnership keynote decks',
        body:
          'Stage layouts sometimes show a logo reversed for the room. Mark those slides as mockups only and get sign-off before anything customer-facing uses them.',
      },
      {
        heading: 'Watermark integrity',
        body:
          'Some security marks are intentionally asymmetric so flips are easy to spot. Do not use this to bypass someone else’s protection.',
      },
    ],
    faqEyebrow: 'Brand ops',
    faqTitle: 'Guidelines, legal, watermark ethics',
    faqIntro:
      'Honesty reduces brand legal escalations stemming from careless mirror toggles.',
    faq: [
      {
        category: 'Brand',
        question: 'Guidelines forbidding mirrored marks—exceptions?',
        answer:
          'Only when brand ops supply official reversed EPS/SVG—not improvised here publicly.',
      },
      {
        category: 'Brand',
        question: 'Will investors spot reversed logo subtly?',
        answer:
          'Yes asymmetrical lettering stands out flipping—run proof review cycles.',
      },
      {
        category: 'Brand',
        question: 'Co-brand lockups symmetrical enough?',
        answer:
          'Partner marks maintain independent rules—mirror only when both guideline PDFs approve.',
      },
      {
        category: 'Brand',
        question: 'Stock asset licensing reversal permitted?',
        answer:
          'Read EULA clauses—many forbid mirroring violating artist moral rights.',
      },
      {
        category: 'Brand',
        question: 'Accessibility contrast impacted flipping gradients?',
        answer:
          'Sometimes reversed gradients reduce WCAG contrast ratios—audit after orientation change.',
      },
    ],
    keywords: ['mirror logo png', 'reverse brand mark preview', 'logo flip guideline'],
    relatedPaths: ['/tools/flip-svg-image', '/tools/flip-png-image'],
  },
  {
    category: 'use-case',
    slug: 'flip-passport-photo',
    title: 'Flip Passport or ID Portraits Responsibly',
    description:
      'Correct mirrored kiosk photos while respecting strict agency crop rules—we never distort mandated aspect ratios or expressions.',
    listingBlurb:
      'Fixing left-right mix-ups from drugstore or kiosk passport photos before an official online upload.',
    h1: 'Flip a passport-style photo',
    intro:
      'Self-serve booths sometimes feed mirrored thumbnails confusing applicants reviewing prints under fluorescent glare.',
    introSecondary:
      'Government portals reject sloppy crops—mirror only correcting horizontal inversion without stretching pixel dimensions arbitrarily.',
    takeawayBullets: [
      'Verify official portrait template overlay before trusting mirrored preview.',
      'Never flip if expression asymmetry flagged medically sensitive.',
      'Export highest resolution kiosk JPEG available before editing.',
    ],
    sections: [
      {
        heading: 'Regulatory disclaimers reiterated',
        body:
          'Agencies dictate background color, eyewear bans, fringe visibility—orientation edit cannot compensate illegal wardrobe choices.',
      },
      {
        heading: 'Biometric hashing caution',
        body:
          'Automated checks may assume a standard orientation. When in doubt, follow the agency’s latest photo guide or retake instead of guessing.',
      },
      {
        heading: 'Print vs digital divergence',
        body:
          'Sometimes the strip from the kiosk does not match what the screen showed. Treat your digital master as source of truth and align print and upload from that file.',
      },
    ],
    faqEyebrow: 'Government IDs',
    faqTitle: 'Compliance, cropping, biometric nuance',
    faqIntro:
      'Cropping rules, glare, and when a retake is safer than editing—so uploads are not rejected for the wrong reasons.',
    faq: [
      {
        category: 'Portrait',
        question: 'Flip allowed for US Dept of State uploads?',
        answer:
          'Only if mirroring restores true orientation without cropping violations—consult latest photo checklist PDF.',
      },
      {
        category: 'Portrait',
        question: 'Will ICAO templates detect mirrored ears asymmetry?',
        answer:
          'Automated biometric scoring may penalize unnatural geometry—prefer retake if unsure.',
      },
      {
        category: 'Portrait',
        question: 'Glasses glare mirrored differently?',
        answer:
          'Yes polarization angles shift—mirror may worsen glare paradoxically prompting retake under diffused lighting.',
      },
      {
        category: 'Portrait',
        question: 'Baby passport photos symmetrical enough flipping?',
        answer:
          'Babies are rarely perfectly symmetrical in camera. Follow the issuing office’s rules for expression and framing; retake if you are unsure rather than relying on a flip.',
      },
      {
        category: 'Portrait',
        question: 'Digital visa portals compress after flip?',
        answer:
          'Compression identical regardless orientation—maintain bitrate budgets post transformation.',
      },
    ],
    keywords: ['passport photo mirror correction', 'kiosk passport flip'],
    relatedPaths: ['/use-cases/fix-mirrored-selfie'],
  },
  {
    category: 'use-case',
    slug: 'flip-document-photo',
    title: 'Flip Photos of Receipts & Whiteboards',
    description:
      'Straighten sideways phone captures mirroring handwriting sessions before OCR, Slack archiving, reimbursement apps.',
    listingBlurb:
      'Fixing mirrored or sideways photos of whiteboards and receipts before Slack, OCR, or expense apps.',
    h1: 'Flip a photo of a document',
    intro:
      'Glass reflections + front-camera capture produce mirrored handwriting confusing teammates reading brainstorming walls remotely.',
    introSecondary:
      'Mirror geometry before feeding Notion OCR automations—not after compression pipelines destroying stroke clarity.',
    takeawayBullets: [
      'Works for restaurant receipts taped under glass counters.',
      'Combine with scanned document playbook for ADF versus mobile capture.',
      'Maintain EXIF originals until finance approves reimbursements.',
    ],
    sections: [
      {
        heading: 'Remote standups snapshotting sketches',
        body:
          'Remote teams often photo boards at an angle. Rotate or flip so handwriting reads normally before you post to chat or run OCR.',
      },
      {
        heading: 'Thermal receipt caution redux',
        body:
          'Mirroring faded thermal lines doesn’t recover chemistry—prioritize ambient lighting corrections first.',
      },
      {
        heading: 'Expense app ingestion tips',
        body:
          'Expense tools read totals faster when digits sit upright. Fix orientation before upload so you are less likely to stall in manual review.',
      },
    ],
    faqEyebrow: 'Office captures',
    faqTitle: 'Whiteboards, reimbursement apps, handwriting',
    faqIntro:
      'Whiteboards, reimbursements, ink quirks—practical notes for office snapshots.',
    faq: [
      {
        category: 'Document',
        question: 'Ink color inversion separate issue?',
        answer:
          'Yes flipping geometry distinct from inversion filters adjusting luminance polarity.',
      },
      {
        category: 'Document',
        question: 'Samsung Notes handwriting mirroring weirdly?',
        answer:
          'Vector ink layers sometimes asymmetric—mirror preview verifying stroke directionality before emailing leadership.',
      },
      {
        category: 'Document',
        question: 'Slack image preview caching old orientation?',
        answer:
          'Reupload file renamed forcing bust Slack CDN derivative caches referencing outdated flip.',
      },
      {
        category: 'Document',
        question: 'Does flipping improve QR readability?',
        answer:
          'QR robust orientation invariant generally—mirror only when human text readability matters concurrently.',
      },
      {
        category: 'Document',
        question: 'Hybrid classroom privacy concerns?',
        answer:
          'Blur student faces before flipping publicly shared classroom snapshots respecting FERPA expectations.',
      },
    ],
    keywords: ['mirror whiteboard photo', 'flip receipt picture ocr'],
    relatedPaths: ['/use-cases/flip-scanned-document', '/tools/mirror-image-online'],
  },
];
