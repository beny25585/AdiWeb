# Homepage featured projects

Mode: Experience. Scope: `src/components/FeaturedProjects.tsx` and its `featuredProjects.desc`/`cta` translations in Hebrew, English and Thai.

On 2026-10-31 the user supplied a screenshot of the current charcoal homepage gallery and approved refinement in the same architectural direction as the Yaniv Engineering reference: slightly more gallery width, straight image corners, lighter/smaller introduction heading and project captions, a short factual introduction, and a text link with a thin gold rule instead of a filled gold button. Keep the introduction beside the gallery on desktop and align their top edges.

Preserve portfolio data, cover images, order, destinations, the manual scrolling behavior and `useProjectGallery`. The hook reads the rendered item widths and gaps; keep all items equally wide. Show one item below medium, two at medium and three at extra large. Keep range/total counters, previous/next controls, native touch scrolling, visible names, RTL-aware arrows and reduced-motion handling.

Use prefixed Tailwind directly in markup and the existing source-directory registration. Warm-white copy, restrained gold interactions and fine caption rules sit on the existing charcoal background. The gallery has square corners and no card shells. Captions share a minimum height; controls remain on a single aligned row with 48px buttons. Browser text selection uses the established gold/charcoal colors.

The approved Hebrew introduction is "מגורים, מסחר ואירוח — מבחר מהעבודות שלנו."; the CTA is "לכל הפרויקטים". All visible and accessible text continues through next-intl. The homepage opening/header, later sections, project index and project-detail designs are outside this refinement. Existing DESIGN.md and its sidecar remain scoped to the projects index.

Validate lint, TypeScript and actual served HTML/CSS. The user retains tests, production build and mobile verification. Source and HTTP evidence do not establish rendered-browser behavior.
