# Individual project detail

Mode: Experience. Target: `src/app/[locale]/projects/[slug]/page.tsx` and its shared detail components.

The user approved this direction on 2026-10-31 for every individual project page: a compact title and existing description with a back-to-projects link; a wide lead image of moderate height; a dense, ordered photo gallery with enlargement; controllable project videos; related projects and named previous/next links at the end.

Use the established charcoal, warm white and restrained gold with inherited typography. Cap content at 1200px. Lead photo uses 4:3 on mobile, 2:1 on tablet and 5:2 on desktop. Remaining photos use 4:3 in one, two and three columns. Keep titles compact and preserve existing media, image order, descriptions, project selection and localized URLs. The leading image appears once, included in the gallery's total.

Use prefixed Tailwind classes directly in markup, the existing Next routing and next-intl translation APIs, visible keyboard focus, RTL and reduced-motion support. Render photos from current props without hiding them for scroll entrance effects. Keep the existing LightGallery enlargement library and isolate its lifecycle; restore page scrolling on close and unmount.

The user reserves tests, production build and mobile verification. Agent checks are lint and TypeScript; source inspection is not browser or device evidence. The projects index and its DESIGN.md remain outside this change.
