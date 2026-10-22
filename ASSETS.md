# Image assets

The files marked **Yes** are temporary artwork placeholders and should not be
presented as real project screenshots or photographs. The current count is 11
placeholder raster files: five project screenshots, one unused video thumbnail,
and five gallery images. Gallery image 01 is a real supplied portrait.

| Path | Purpose | Recommended dimensions | Temporary placeholder |
|---|---|---:|---|
| `assets/favicon.svg` | Lightweight browser-tab monogram favicon | 64 × 64 viewBox (SVG, 243 bytes) | No; existing brand mark |
| `assets/portrait.jpg` | Full-resolution source portrait (not loaded directly) | 5712 × 4284 (4:3) | No; supplied portrait |
| `assets/portrait.webp` | High-resolution speaker-kit portrait | 2800 × 2100 (4:3) | No; generated from supplied portrait |
| `assets/portrait-hero.webp` | Optimized, cropped hero portrait | 760 × 912 (5:6) | No; generated from supplied portrait |
| `assets/senior-ambassoder-badge.webp` | Microsoft Student Ambassador Senior badge in the hero | 1081 × 1081 (1:1) | No; generated from supplied badge artwork |
| `assets/partners/microsoft.webp` | Microsoft logo in Communities & Partners | 128 × 128 | No; converted from local site-icon copy |
| `assets/partners/github.webp` | GitHub logo in Communities & Partners | 32 × 32 | No; converted from local site-icon copy |
| `assets/partners/pieces.webp` | Pieces logo in Communities & Partners | 128 × 128 | No; converted from local site-icon copy |
| `assets/partners/azure-developer-community.webp` | Azure logo in Communities & Partners | 128 × 128 | No; converted from local site-icon copy |
| `assets/partners/reskilll.webp` | Reskilll logo in Communities & Partners | 48 × 48 | No; converted from local site-icon copy |
| `assets/partners/topmate.svg` | Topmate wordmark in the mentoring section | 194 × 36 (SVG) | No; local profile artwork |
| `assets/skills/*.svg` | Technology marks in the skills section | SVG | No; local Simple Icons copies |
| `assets/projects/nexoverse.webp` | Nexoverse project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/projects/taskverse.webp` | TaskVerse project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/projects/livequiz.webp` | LiveQuiz project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/projects/student-nexus.webp` | Student Nexus project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/projects/fabric-ai.webp` | Fabric & AI project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/blog/how-to-join-microsoft-student-ambassadors.webp` | Cover graphic for the Microsoft Student Ambassadors article | 1113 × 322 (source) | No; converted from article-specific graphic |
| `assets/reels/connecting-devs-and-student-builders.webp` | Unused Instagram Reel thumbnail artwork | 450 × 800 (9:16) | Yes; not a video still |
| `assets/gallery/01.webp` | Gallery portrait and lightbox image | 800 × 600 (4:3) | No; supplied portrait |
| `assets/gallery/02.webp` – `assets/gallery/06.webp`, `assets/gallery/07.svg` – `assets/gallery/10.svg` | Temporary gallery placeholders, shown until replaced with real photos | 800 × 600 (4:3) | Yes; not photographs |
| `assets/contact-bg.jpg` | Full-resolution source for the contact image (not loaded directly) | 4210 × 1453 (source) | No; existing event photo |
| `assets/contact-bg.webp` | Optimized contact-callout background | 1600 × 552 | No; generated from existing event photo |
| `assets/og-image.jpg` | Open Graph and Twitter social-sharing image | 1200 × 630 | No; generated from the supplied portrait |

The blog cover is a WebP; keep this extension when editing the `BLOGS` entry in
`index.html`. The public gallery currently shows the supplied portrait and nine
clearly labeled temporary placeholders in two opposite-scrolling rows; replace
the placeholders with real photos before presenting the gallery as event
photography. The gallery supports up to ten items. Project cards visibly label
their artwork as concept art and their alt text identifies it as a placeholder,
not a screenshot.
Replace the project artwork with real screenshots before presenting it as such.
The unused Reel thumbnail is not referenced by the current `VIDEOS` entry;
video cards work without a cover image.

Logos and skill icons are local so the page does not need to fetch these assets
from a third-party service at runtime. MRCE, Student Nexus, and MFUGH use
initials instead of unverified logo artwork. Displayed raster photos and artwork
use WebP variants; PNG/JPEG sources are retained, including the full-resolution
downloadable headshot. The hero portrait is an eager, high-priority 760 × 912
WebP variant; below-fold project, article, and gallery images are lazy-loaded.
The Open Graph share image and browser/app icons retain JPEG/PNG formats for
platform compatibility.

## Pending owner confirmations

- `heyharishreddy.in` is the configured canonical domain in the site and
  repository documentation. Verify its DNS and HTTPS configuration before
  publishing.
- Confirm the visible contact email, social handles/profile URLs, leadership
  dates and titles, event dates/roles, article URL/date, and active project
  links before publication. Unconfirmed event attendance counts are hidden in
  the page.
- Replace project concept artwork with genuine screenshots before presenting
  it as product imagery, and replace the temporary gallery artwork with real
  photos before presenting it as event photography.
- Supply verified titles for the eight reels with empty title fields; their
  accessible labels currently identify the platform, reel position, and
  account without inventing the clip content.
- The resume PDF is not present, so its download remains disabled.
- Add testimonials only when authentic quotes and publication permission are
  available.
