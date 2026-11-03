# Product

<!-- impeccable:product-schema 1 -->

## Platform

Web. The existing site uses Next.js App Router, React and next-intl.

## Product Purpose

A&S UZAN GROUP presents its company, architecture and construction portfolio and provides a contact route. The projects index links visitors to individual project galleries.

## Capabilities and Constraints

- Hebrew, English and Thai content lives in `src/messages/*.json`; use the existing translation API.
- Project visibility, order, covers and detail-page media are owned by `src/data/projects.ts`.
- Preserve existing localized project URLs and approved portfolio imagery.
- The user requires a scoped proposal and approval before edits, Tailwind classes directly in markup, RTL support, visible keyboard focus and reduced-motion support.
- The agent may run lint and TypeScript. Tests, production builds and mobile verification belong to the user. Git actions require a separate request.

## Evidence on Hand

The existing project data and localized descriptions are the content authority. Do not invent project categories, locations, dates, status or performance claims.

Media classification follows explicit existing descriptions. `jerusalemVilla` is confirmed as architectural visualization; other project media remains unclassified unless equivalent evidence is supplied. Preserve existing image IDs, covers, ordering and visibility when adding labels.

## Confirmed Scope

On 2026-10-31 the user approved a redesign of the projects index with a leading project image, varied gallery proportions, charcoal, warm white and subtle gold, visible names and links, and responsive/RTL behavior. This approval was scoped to the projects index; subsequent approved extensions are recorded below. `DESIGN.md` and `.impeccable/design.json` remain normative only for that index.

During implementation the user requested smaller headings and images, less whitespace and more projects grouped together. The revised desktop collection shows three projects per row.

On 2026-10-31 the user also approved the shared individual-project template: compact heading and back link, a wide lead photo, a dense gallery with enlargement, controlled videos, related projects and named previous/next links at the end. This direction applies to `/[locale]/projects/[slug]`; its details are recorded in `.impeccable/briefs/project-detail.md`. The architecture page retains its existing project-card presentation with the later approved visualization label.

On 2026-10-31 the user approved a cinematic homepage opening inspired by the supplied Yaniv Engineering reference: full-bleed existing project photography, a white two-line heading, a transparent overlay header on the homepage and a full-film action that opens the existing portrait video separately. The user requested a solid black home header after a short scroll; it returns to transparent at the top. The opening is recorded in `.impeccable/briefs/home-opening.md`; the shared header and later homepage sections have separate approvals below.

On 2026-10-31 the user separately approved refinement of the homepage featured-projects section in the same Yaniv Engineering direction: more emphasis on photography, square image corners, lighter typography, concise factual copy and an understated projects link. Preserve the existing manual gallery, order and media. Its scope is recorded in `.impeccable/briefs/home-featured-projects.md`.

On 2026-10-31 the user approved the next homepage specialties section: warm white, a compact start-aligned introduction, the existing six services presented without card shells, and an existing joinery-detail photograph beside them. Content precedes the image on narrow screens and the section height follows its content. Preserve all service titles and descriptions; scope is recorded in `.impeccable/briefs/home-specialties.md`.

On 2026-10-31 the user explicitly approved all five remaining refinements: the homepage clients and final contact action; the footer; shared navigation on internal pages; a cleaner contact form with visible labels; and consistent image presentation with verified visualization labels. The homepage ending retains its four client categories and image IDs, uses square-cornered 4:3 images in one, two or four columns, and ends with a charcoal contact action. A short crop of the existing transition photograph replaces the former viewport-height sticky image and spacer; homepage sections follow their content. This scope is recorded in `.impeccable/briefs/home-ending.md`.

The shared `SiteHeader` retains the existing navigation, logos and language destinations: a dark translucent overlay over the homepage opening, solid black after 24px of scrolling or while its menu is open, and always solid black with an in-flow offset on internal pages. The charcoal footer retains company facts and all existing destinations, with translated social and company-field labels. The warm-white contact page keeps the existing Formspree form ID, field names, required fields, privacy link and successful-submission Lead event while adding visible labels and accessible feedback. Shared `ProjectMediaLabel` identifies the confirmed Jerusalem Villa visualization wherever that project is presented, including its client-category image; unknown media receives no classification. Details and validation boundaries are recorded in `.impeccable/briefs/site-navigation-contact.md`.

On 2026-11-01 the user approved a header height of 88px on narrow screens and 112px from the small breakpoint, a header-only logo enlargement to approximately 208px/268px, 18px navigation and a 70% black overlay at the top of the homepage. Internal-page spacing and mobile-menu height follow the new header size. The existing brand assets and compact footer logo are retained. The user's final About-page portrait selection is the supplied Cloudinary image `https://res.cloudinary.com/ddncjeozb/image/upload/v1793350126/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2026-10-30_154722_mxxxzd.png`, at its original 366x654 proportions. This supersedes the earlier local color-portrait choice; the image retains its natural aspect ratio and the existing translated alternative text.
