# Validation report

Validation date: October 13, 2026.

## Completed

- `npm run build`: passed using Next.js 16.4.0. All routes prerendered/exported; no compile or TypeScript errors.
- `npm run typecheck`: passed.
- `npm run check:export`: passed across 14 HTML files, 169 internal links, and 163 local asset references.
- Export checks verified required routes, page titles, a single H1 per page, English document language, unique IDs, skip navigation, fragment targets, and a valid PDF header for the resume.
- Five generated case-study routes verified, plus home, projects, experience, skills, about, contact, and custom 404.
- Core text contrast calculations passed WCAG AA normal-text threshold (4.5:1): dark primary 15.82:1, dark muted on raised surface 6.55:1, dark primary-button text 10.43:1; light primary 14.72:1, light muted on raised surface 5.08:1, light primary-button text 6.44:1.
- Source review confirmed reduced-motion rules, focus-visible styling, semantic landmarks, filter pressed state and live result count, explicit image dimensions and alt fields, labeled theme/menu controls, keyboard-accessible links, and a native-dialog gallery implementation.
- No third-party fonts or analytics requests. Illustrations are inline SVG; optional media loads lazily; Shiki runs at build time. A runtime image optimizer is not needed for the static output.

## Verification limits

Browser-control tooling was unavailable under the environment’s supported preview workflow. No development server or browser was started, and no screenshots, interactive browser tests, screen-reader audit, or Lighthouse/Core Web Vitals measurements were performed. Responsive behavior has been implemented and source-reviewed, but not visually verified. The exported-link test is a static integrity check, not a browser test or comprehensive accessibility audit.

No real project gallery images or video URLs were supplied, so media components are implemented but not populated or exercised with the user's media. The exact repository URLs remain pending. The resume-backed GitHub/LinkedIn destinations could not be independently retrieved by the browsing service.

## Before public launch

1. Run `npm ci` and `npm run dev`; inspect at 360px, 390px, 768px, 1024px, and 1440px widths.
2. Check that navigation opens/closes on mobile, all pages remain reachable, and no horizontal overflow occurs.
3. Select each project filter. Expect Graphics = 2, Aerospace = 1, Simulation = 1, Robotics = 1, All = 5. Confirm the pressed state and live result count.
4. Switch theme on each page; reload and confirm persistence. Check visible focus and reduced-motion preferences.
5. Navigate with keyboard only: skip link, menu, filters, case-study section links, and resume.
6. Check the source PDF in a new tab and as a download, and verify email/GitHub/LinkedIn destinations.
7. When media is supplied, open/close the gallery with keyboard and Escape, check focus restoration, captions, and video transcripts.
8. Set the final `NEXT_PUBLIC_SITE_URL`, rebuild, and verify sitemap and social metadata on the actual host.
9. Visit an unknown URL to confirm the host serves the custom 404 with a 404 HTTP status.
10. Run a browser accessibility audit and a production Lighthouse pass, then fix observed issues before recruiter-facing use.
