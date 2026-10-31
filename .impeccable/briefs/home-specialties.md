# Homepage construction and finishing specialties

Mode: Persuade. Scope: `src/components/SpecialtiesSection.tsx`, its direct wrapper in the homepage, and the `finishing.title`, `subtitle` and `detailImageAlt` translations in Hebrew, English and Thai.

On 2026-10-31 the user approved a warm-white editorial section continuing the Yaniv Engineering direction: start-aligned compact heading and short introduction, six existing specialties in an unboxed two-column list with thin rules, and one supporting photograph occupying about one third of the desktop layout. Remove the previous rounded card shells, tool icons, shadows, gradients, hover lifts and viewport-height constraint.

Preserve all six specialty keys, order, titles and descriptions. The approved Hebrew title is "מומחיות בבנייה ובגמר"; the shortened introduction describes finishing work for homes, offices and commercial spaces. All text and accessible labels use the existing next-intl API.

The supporting portrait photo is the existing `DSC_0241_ltxogp` image from `theAddressSignatureHome` in `src/data/projects.ts`: custom joinery and an illuminated mirror. It was inspected before selection. Retain its 2:3 composition, lazy loading and the existing translated project title as its caption. This extension creates no new raster assets or portfolio data.

Use prefixed Tailwind directly in markup, inherited typography and the established warm-white/charcoal/muted-text palette. The layout shares the homepage's 1440px container and 20/32/48px gutters. Services are one column on phones and two from small; the photograph follows the complete service content in DOM and narrow-screen order. At large, content and photo use 2:1 columns. All six services remain readable and are not styled as interactive controls.

The section and its homepage wrapper have content-driven height. The later photo spacer, clients/contact sections, opening/header, project gallery and other routes remain outside this change. Existing DESIGN.md and its sidecar retain their projects-index scope.

Agent validation: lint, TypeScript and actual served HTML/CSS. The user retains tests, production build and mobile verification. Source/HTTP evidence does not establish rendered-browser or device behavior.
