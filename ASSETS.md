# Image assets

The files marked **Yes** are temporary artwork placeholders and should not be
presented as real project screenshots or photographs. The current count is 11
placeholder raster files: five project screenshots, one unused video thumbnail,
and five gallery images. Gallery image 01 is a real supplied portrait.

| Path | Purpose | Recommended dimensions | Temporary placeholder |
|---|---|---:|---|
| `assets/favicon.svg` | Browser-tab monogram favicon | 64 × 64 viewBox (SVG) | No; existing brand mark |
| `assets/portrait.jpg` | Full-resolution source portrait (not loaded directly) | 5712 × 4284 (4:3) | No; supplied portrait |
| `assets/portrait-hero.webp` | Optimized, cropped hero portrait | 760 × 912 (5:6) | No; generated from supplied portrait |
| `assets/senior-ambassoder-badge.png` | Microsoft Student Ambassador Senior badge in the hero | 1081 × 1081 (1:1) | No; supplied badge artwork |
| `assets/partners/microsoft.png` | Microsoft logo in Communities & Partners | 128 × 128 | No; local site-icon copy |
| `assets/partners/github.png` | GitHub logo in Communities & Partners | 32 × 32 | No; local site-icon copy |
| `assets/partners/pieces.png` | Pieces logo in Communities & Partners | 128 × 128 | No; local site-icon copy |
| `assets/partners/azure-developer-community.png` | Azure logo in Communities & Partners | 128 × 128 | No; local site-icon copy |
| `assets/partners/reskilll.png` | Reskilll logo in Communities & Partners | 48 × 48 | No; local site-icon copy |
| `assets/partners/topmate.svg` | Topmate wordmark in the mentoring section | 194 × 36 (SVG) | No; local profile artwork |
| `assets/skills/*.svg` | Technology marks in the skills section | SVG | No; local Simple Icons copies |
| `assets/projects/nexoverse.webp` | Nexoverse project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/projects/taskverse.webp` | TaskVerse project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/projects/livequiz.webp` | LiveQuiz project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/projects/student-nexus.webp` | Student Nexus project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/projects/fabric-ai.webp` | Fabric & AI project-card artwork | 1280 × 800 (16:10) | Yes; not a product screenshot |
| `assets/blog/how-to-join-microsoft-student-ambassadors.png` | Cover graphic for the Microsoft Student Ambassadors article | 1113 × 322 (source) | No; article-specific graphic |
| `assets/reels/connecting-devs-and-student-builders.jpg` | Unused Instagram Reel thumbnail artwork | 450 × 800 (9:16) | Yes; not a video still |
| `assets/gallery/01.jpg` | Optimized gallery portrait and lightbox image | 800 × 600 (4:3) | No; supplied portrait |
| `assets/gallery/02.jpg` – `assets/gallery/06.jpg` | Five gallery cards and lightbox images | 800 × 600 (4:3) | Yes; not photographs |
| `assets/contact-bg.jpg` | Full-resolution source for the contact image (not loaded directly) | 4210 × 1453 (source) | No; existing event photo |
| `assets/contact-bg.webp` | Optimized contact-callout background | 1600 × 552 | No; generated from existing event photo |
| `assets/og-image.jpg` | Open Graph and Twitter social-sharing image | 1200 × 630 | No; generated from the supplied portrait |

The blog cover is a PNG; keep this extension when editing the `BLOGS` entry in
`index.html`. The gallery placeholder artwork visibly identifies itself as temporary, and
its alt text also labels it as placeholder artwork. Project-card alt text
identifies the artwork as a placeholder rather than a screenshot. Replace these
with real images and update their alt text, or remove the related entries.
The unused Reel thumbnail is not referenced by the current `VIDEOS` entry;
video cards work without a cover image.

Logos and skill icons are local so the page does not need to fetch these assets
from a third-party service at runtime. MRCE, Student Nexus, and MFUGH use
initials instead of unverified logo artwork. The hero portrait is an eager,
high-priority 760 × 912 WebP variant rather than the 2.2 MB original; below-fold
project, article, and gallery images are lazy-loaded. The mobile contact photo
uses an optimized WebP while its full-resolution JPEG is retained as a source.

## Pending owner confirmations

- Confirm the final public site URL before adding canonical, absolute Open
  Graph/Twitter image URLs, a host-specific sitemap, or a Sitemap directive to
  `robots.txt`. See the deployment steps in [README.md](README.md).
- Confirm the visible contact email, social handles/profile URLs, leadership
  dates and titles, event dates/roles, article URL/date, and active project
  links before publication. Unconfirmed event attendance counts are hidden in
  the page.
- Replace the temporary project and gallery art with genuine screenshots and
  photos, or remove those cards. Do not use the unused Reel placeholder as if
  it were a real video still.
