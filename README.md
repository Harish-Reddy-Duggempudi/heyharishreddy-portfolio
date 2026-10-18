# Harish Reddy Duggempudi — Portfolio

A responsive, single-page portfolio built with HTML, CSS, and vanilla
JavaScript. It presents projects, skills, leadership and events, creator
platforms, videos, writing, mentoring, and contact information.

## Preview locally

Open `index.html` in a browser. No build step or package installation is
required.

## Update content and images

- Edit the `VIDEOS`, `PROJECTS`, `BLOGS`, `GALLERY`, and `EVENTS` data in
  `index.html`. Add only published, verified platform URLs and factual details.
- Keep the gallery and project placeholder artwork clearly identified until
  replacing it with real photos and screenshots. The hero portrait, article
  cover, Topmate artwork, and social-sharing graphic are not placeholders.
- Update each image's alt text to describe the replacement image. Leave `alt=""`
  on decorative logos and icons.
- The resume button is intentionally inactive until a real resume PDF is added
  and `SITE.resume.available` is changed to `true`.
- Unverified event attendance figures remain hidden by
  `SITE.showUnconfirmedNumbers:false`.

See [ASSETS.md](ASSETS.md) for the image inventory and owner confirmations
still needed.

## GitHub Pages deployment

GitHub Pages project-site hosting is intended, but the repository name and
final public URL have not been confirmed. Do not publish or share an assumed
URL. Once the actual owner and repository are known:

1. In that repository, select **Settings → Pages → Deploy from a branch** and
   choose the publishing branch and `/(root)`.
2. Confirm the deployed URL in the Pages settings. For a project site it is
   generally `https://<OWNER>.github.io/<REPOSITORY>/`; preserve the exact
   repository spelling and trailing slash. A custom domain should be used only
   after ownership, DNS, and GitHub Pages configuration are confirmed.
3. Replace `<SITE_URL>` below with that confirmed HTTPS URL, including its
   trailing slash, and make the following edits in `index.html`:
   - Add `<link rel="canonical" href="<SITE_URL>">`.
   - Add `og:url` with `<SITE_URL>`.
   - Set `og:image` and `twitter:image` to
     `<SITE_URL>assets/og-image.jpg`. These social image URLs must be absolute.
   - Keep the existing title, descriptions, image alt text, and Person JSON-LD
     factual. Add the canonical URL to JSON-LD only after it is confirmed.
4. Create `sitemap.xml` in the published root with the confirmed `<SITE_URL>`
   in its `<loc>` entry. Then add
   `Sitemap: <SITE_URL>sitemap.xml` to the root `robots.txt`. Do not publish a
   sitemap containing an example or unverified hostname.
5. Verify that the deployed page, favicon, stylesheet-in-page, local assets,
   social image, canonical URL, and sitemap all resolve at the project-site
   base path.

Until step 2 is complete, the page intentionally has no canonical or `og:url`,
and the social image metadata is a relative local path. `robots.txt` permits
crawling but does not name a sitemap. No sitemap or `404.html` is included
while the final project-site base path is unknown; GitHub Pages can serve a
custom 404 page if one is later added with the confirmed base path.

## Search Console checklist

After the site is publicly accessible, verify the exact deployed property in
Google Search Console (DNS verification for an owned domain, or an available
HTML/file verification method for the Pages URL). Inspect the deployed home
page, check its canonical and robots accessibility, then submit
`<SITE_URL>sitemap.xml` after the sitemap has been created with the final URL.
Check Search Console for crawl or sitemap errors. Submission is a request to
crawl, not a guarantee of indexing or ranking.

## Static hosting and caching

This is a static site with no server-side runtime or build artifacts. GitHub
Pages does not provide per-file cache-header configuration for this project.
Keep assets local where possible; for changed static assets, use versioned
filenames and update their HTML references if a stale cached copy is observed.
No analytics, tracking scripts, or cookie banner are included.

## Owner verification before release

- Confirm the exact GitHub Pages URL or verified custom domain.
- Confirm the visible contact email and LinkedIn, GitHub, Instagram, and YouTube
  handles/URLs in `SITE` and `PLATFORMS`.
- Review the dated leadership and event entries, titles, roles, event recap
  link, and published article URL/date for accuracy. Attendance figures remain
  hidden unless individually verified.
- Replace project and gallery placeholder artwork with actual screenshots and
  photos, or remove those entries. Confirm live project links still represent
  active projects.

## Security and privacy

Do not commit credentials, private keys, `.env` files, personal documents, or
local editor and operating-system state. `.gitignore` excludes common local
and secret files. Review the staged file list before every commit.
