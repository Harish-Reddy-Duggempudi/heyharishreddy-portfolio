# Harish Reddy Duggempudi — Portfolio

A responsive portfolio built with HTML, CSS, and vanilla JavaScript. The main
portfolio is a single page, with separate links and social-profile pages. It
presents projects, skills, milestones, speaking, creator platforms, videos,
writing, mentoring, and contact information.

## Preview locally

Open `index.html` in a browser. No build step or package installation is
required.

## Update content and images

- Edit the `VIDEOS`, `PROJECTS`, `BLOGS`, `GALLERY`, and `EVENTS` data in
  `index.html`. Add only published, verified platform URLs and factual details.
- Keep the gallery and project placeholder artwork clearly identified until
  replacing it with real photos and screenshots. The hero portrait, article
  cover, Topmate artwork, and social-sharing graphic are not placeholders.
- The gallery shows the supplied portrait and clearly labeled temporary
  artwork (up to ten items) in two opposite-scrolling rows; replace each
  placeholder with a real photo before presenting it as event photography.
  Project artwork is explicitly labeled as concept art.
- Update each image's alt text to describe the replacement image. Leave `alt=""`
  on decorative logos and icons.
- The resume button is intentionally inactive until a real resume PDF is added
  and `SITE.resume.available` is changed to `true`.
- Unverified event attendance figures remain hidden by
  `SITE.showUnconfirmedNumbers:false`.
- The speaker kit uses existing event details and the supplied portrait. Add
  only approved, authentic testimonial quotes and confirmed video titles.

See [ASSETS.md](ASSETS.md) for the image inventory and owner confirmations
still needed.

## GitHub Pages deployment

The canonical public URL is `https://heyharishreddy.in/`. The HTML pages
include canonical links, search and social-sharing metadata, and structured
data for the site owner and each page. `sitemap.xml` lists the public pages,
`robots.txt` points crawlers to the sitemap, and `404.html` provides the static
host's not-found page.

1. In that repository, select **Settings → Pages → Deploy from a branch** and
   choose the publishing branch and `/(root)`.
2. Configure `heyharishreddy.in` as the custom domain in GitHub Pages and
   verify its DNS records and HTTPS availability before launch. Do not replace
   the canonical domain with the temporary `github.io` address.
3. Verify that the deployed pages, canonical URLs, social image, and
   `https://heyharishreddy.in/sitemap.xml` resolve correctly.

## Search Console checklist

After the site is publicly accessible, verify the `heyharishreddy.in` property
in Google Search Console. Inspect the deployed pages, check their canonical
URLs and robots accessibility, then submit
`https://heyharishreddy.in/sitemap.xml`. Check Search Console for crawl or
sitemap errors. Submission is a request to crawl, not a guarantee of indexing
or ranking.

## Static hosting and caching

This is a static site with no server-side runtime or build artifacts. GitHub
Pages does not provide per-file cache-header configuration for this project.
Keep assets local where possible; for changed static assets, use versioned
filenames and update their HTML references if a stale cached copy is observed.
No analytics, tracking scripts, or cookie banner are included.

## Owner verification before release

- Confirm the custom domain, DNS, and HTTPS are configured for GitHub Pages.
- Confirm the visible contact email and LinkedIn, GitHub, Instagram, and YouTube
  handles/URLs in `SITE` and `PLATFORMS`.
- Review the dated leadership and event entries, titles, roles, event recap
  link, and published article URL/date for accuracy. Attendance figures remain
  hidden unless individually verified.
- Replace project concept artwork with genuine screenshots before presenting
  it as product imagery; gallery placeholders are not displayed.
- Provide accurate titles for the eight reels whose source entries have no
  title. The page uses descriptive platform/profile fallbacks rather than
  inventing video content.
- The resume PDF is not present, so its download remains disabled. Add an
  approved resume before enabling it.
- Add testimonials only after receiving authentic quotes and permission to
  publish them.

## Security and privacy

Do not commit credentials, private keys, `.env` files, personal documents, or
local editor and operating-system state. `.gitignore` excludes common local
and secret files. Review the staged file list before every commit.
