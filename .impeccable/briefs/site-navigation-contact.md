# Site navigation, footer and contact

Mode: Operate. Scope: `Header.tsx`, shared `SiteHeader.tsx`, `Footer.tsx`, reusable `CompanyDetails.tsx`, `/[locale]/contact`, and evidence-based project-media labels across existing project presentations.

On 2026-10-31 the user explicitly approved all five remaining refinements: homepage clients and final contact action, footer, shared navigation on internal pages, a cleaner contact form with visible labels, and consistent image presentation with verified visualization labels. The homepage ending has its own `home-ending.md` brief. These are bounded extensions of existing surfaces; `DESIGN.md` and `.impeccable/design.json` remain projects-index specifications rather than a new global visual system. Other route bodies retain their approved presentation.

## Shared navigation

`Header.tsx` supplies the existing localized home, about, architecture, projects and contact links to `SiteHeader.tsx`, renamed from `HomeHeader.tsx`. The same fixed header serves every route. The locale-root homepage uses a black overlay at 70% opacity at the top; after more than 24px of window, document or body scrolling, or while the mobile menu is open, its background is solid black. Internal pages always use solid black and an in-flow offset equal to the header height: 88px, then 112px from the small breakpoint. The mobile menu viewport allowance follows those same heights.

On 2026-11-01 the user approved larger header geometry, a larger logo, 18px navigation and the dark translucent homepage background. The header-only BrandMark variant is approximately 208px wide on narrow screens and 268px from the small breakpoint; the footer retains the compact default. Preserve both existing logo assets and the Hebrew, English and Thai flag choices and language-root destinations. Exact current-route links receive the active treatment and `aria-current`; route changes reset the menu through the pathname key. The narrow-screen disclosure retains its translated open/close label, expanded state, controlled navigation ID, outside-pointer dismissal and Escape return to the menu button. Desktop navigation appears from extra large. Use visible keyboard focus and reduce color transitions when reduced motion is requested.

## Footer

The footer is charcoal with restrained gold accents and one column, two from small and four from large. Its groups contain the compact existing two-logo lockup and company details, localized site navigation, contact methods and translated social names. Company registration, address, phone and email continue to come from `src/lib/company.ts` through `CompanyDetails`; its footer variant changes presentation while the default variant remains reusable on the contact page. Registration, phone and email field labels use translations.

Preserve all existing internal, map, telephone, email, WhatsApp and social destinations. The Instagram URL only loses leading whitespace. External destinations retain safe new-window attributes. Long company values can wrap; telephone and email values retain their reading direction. The rights text remains translated and separated by a fine rule.

## Contact

The contact page uses a warm-white surface, a compact introduction and an unboxed layout. Contact details precede the form on narrow screens; from large, they occupy two columns in a 2:3 ratio. Existing WhatsApp, telephone, email and company facts remain visible.

Keep the existing Formspree `useForm("xeorbbnr")` integration, submitted field names and requirements: name and email are required, phone and message remain optional, and privacy consent is required. Name, email, telephone and message have visible translated labels linked to stable field IDs. The first three fields retain appropriate autocomplete values. Preserve the localized privacy link, the existing successful-submission feedback and the Facebook `Lead` event after success.

Submission state disables the submit action and sets the form's busy state. Existing Formspree field errors are linked to their fields and reflected by invalid state; general errors use an alert and success feedback uses a polite status. This records the source behavior, without claiming a form submission, external delivery or analytics event was tested.

## Project media

Keep all existing project images, covers, ordering, visibility and localized destinations. `Project.mediaType` is optional and currently marks only `jerusalemVilla` as `visualization`, because its existing localized description explicitly identifies architectural visualizations. `ProjectMediaLabel` renders a translated label only for that classification. Apply it to that project's existing appearances in the homepage featured projects, project index, architecture, detail and related-project presentations, and to its private-client category image. Unclassified media remains unlabeled; file extensions or visual appearance alone do not establish classification.

Source authority: the named components and route, `src/data/projects.ts`, `src/messages/*.json`, and `src/lib/company.ts`. Use prefixed Tailwind utilities in markup, the existing translation API, RTL-aware layout, visible keyboard focus and reduced-motion support.

Validation boundary: lint, TypeScript and source inspection are agent checks. HTTP and CSS inspection can confirm local response and utility generation, not rendered layout or interactions. Form submission, external delivery, analytics tracking, tests, production build, browser visual behavior and mobile verification remain unverified unless separately reported; tests, build and mobile verification belong to the user.
