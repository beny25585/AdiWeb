---
name: A&S UZAN GROUP — Projects index
description: Compact photographic portfolio for /[locale]/projects only.
colors:
  primary-gold: "#c6ad80"
  primary-gold-light: "#e0c89f"
  primary-gold-dark: "#75603b"
  neutral-charcoal: "#11110f"
  neutral-warm-white: "#faf8f4"
  neutral-muted-light: "#c9c5bc"
  neutral-muted-dark: "#625c51"
  neutral-rule: "#d4cfc5"
  neutral-image: "#ded9cf"
  neutral-action-hover: "#343128"
typography:
  display:
    fontFamily: inherit
    fontSize: "clamp(2.25rem, 4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  project-title:
    fontFamily: inherit
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.375
  project-title-sm:
    fontFamily: inherit
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.375
  body:
    fontFamily: inherit
    fontSize: "1rem"
    lineHeight: 1.7
  label:
    fontFamily: inherit
    fontSize: "0.875rem"
    lineHeight: 1.428571
rounded:
  square: "0px"
spacing:
  caption: "12px"
  gutter-mobile: "20px"
  grid-column: "24px"
  grid-row-mobile: "32px"
  grid-row-tablet: "40px"
components:
  project-link:
    textColor: "{colors.neutral-charcoal}"
    typography: "{typography.project-title}"
    rounded: "{rounded.square}"
  project-link-featured:
    textColor: "{colors.neutral-warm-white}"
    rounded: "{rounded.square}"
  contact-link:
    backgroundColor: "{colors.neutral-charcoal}"
    textColor: "{colors.neutral-warm-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
    height: "48px"
  contact-link-hover:
    backgroundColor: "{colors.neutral-action-hover}"
---

# Design System: A&S UZAN GROUP — Projects index

## Overview

**Creative North Star: "A compact photographic architecture portfolio"**

This source-derived specification is normative only for `/[locale]/projects` and its `PortfolioProject` presentation. Other routes retain their existing design. The user approved the photographic direction, then requested smaller headings and imagery, less whitespace and more projects together.

**Key Characteristics:**

- Real project photography, visible captions and restrained gold links.
- A charcoal opening followed by a warm-white, three-project desktop collection.
- Flat rectangular surfaces, compact spacing and inherited site typography.

Evidence: `src/app/[locale]/projects/page.tsx`, its `_components/PortfolioProject.tsx`, `src/styles/tailwind.css` and `src/styles/globals.css`. The route brief remains `.impeccable/briefs/projects.md`. This records source behavior; browser and mobile verification were unavailable. The user retains tests, build and mobile verification.

## Colors

### Primary

The gold tokens distinguish links, arrows, focus and selection. Light gold serves the charcoal opening; dark gold serves the warm-white collection. The featured caption rule uses the primary gold at 40% opacity.

### Neutral

Charcoal anchors the opening, primary text and contact action. Warm white carries the collection and light text. Muted light and dark support secondary copy on their corresponding surfaces. The rule color separates captions and sections; the image neutral fills the image frame while media loads. The action-hover neutral gives the contact link its hover state.

**The Restrained Gold Rule.** Gold marks interaction and fine rules; project photography remains the dominant visual material.

## Typography

**The Inherited Type Rule.** This route adds no font. It inherits the site's declared default stack (Inter, system UI, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif); the global RTL declaration uses Heebo, Assistant, Rubik, system UI, Arial, sans-serif. Actual font availability and rendering have not been visually verified.

The frontmatter owns the shared type values. The display caps at a compact maximum (56px). Project titles use the base title token below the small breakpoint and its larger variant above it; the featured title instead reaches 20px. Collection headings step from 20px to 24px, and the contact heading from 24px to 30px at the small breakpoint. All headings use medium weight (500). Introduction copy uses relaxed leading (1.625) and a short measure (34ch); other body copy inherits the site leading. Labels remain sentence case.

## Layout

**The Compact Collection Rule.** Preserve source order while grouping three projects per desktop row. Do not enlarge this route into a full-height opening.

- Containers cap at 1200px. Horizontal gutters progress from 20px to 32px at the small breakpoint and 48px at the large breakpoint.
- Opening padding is 32px vertically, then 40px from the small breakpoint. At the large breakpoint, introduction and feature occupy five and seven of twelve columns, separated by 40px; below it they stack with a 32px gap.
- Collection padding is 40px vertically, then 48px at small and 56px at large. The heading rule is followed by 24px of space, increasing to 32px at small.
- The collection has one column on mobile, two equal columns at medium, and three projects per row at large. The twelve-project desktop sequence is `6/3/3 → 4/4/4 → 3/3/6 → 4/4/4`. Column gaps use the grid-column token; row gaps use grid-row-mobile, then grid-row-tablet at medium. Preserve DOM order in RTL.
- All images are 3:2 below large, except the featured image, which becomes 2:1 at small. At large, wide tiles are 2:1, compact tiles square and standard tiles 3:2. At the container cap, collection widths are approximately 588px, 282px and 384px respectively; the featured image is approximately 684px wide.
- The contact section has 40px vertical padding, increasing to 48px at small. Copy and action stack, then align horizontally at medium.

Breakpoints are recorded in `.impeccable/design.json`; they are the existing Tailwind defaults used by the route.

## Elevation & Depth

There are no tile shadows or floating card surfaces. Tonal section changes, photography and fine caption rules establish hierarchy. Only images zoom slightly on hover and keyboard focus; the frame and caption remain still.

## Shapes

Photography and the contact action have square corners. Images crop to their frame with cover fitting. Caption rules are thin (1px); text remains below imagery rather than overlaid on it.

## Components

### Project links

`PortfolioProject` is one link containing an image, always-visible title, caption rule and directional arrow. The featured variant also shows the translated view-project label. The image has empty alternative text because the link has a translated accessible name containing the project title. Featured titles use a second-level heading; collection titles use third-level headings.

Captions have the caption spacing token above and below and a minimum height (56px). Hover and keyboard focus underline the title. Focus uses an outline (2px) with an offset (8px), light gold on charcoal and dark gold on warm white. The arrow mirrors in RTL. Image zoom (1.035) runs for 500ms with ease-out only when motion is allowed; reduced motion disables it and the transition.

### Collection and contact links

The collection jump link has a fine gold bottom rule, a minimum touch height (44px), and a visible focus outline (2px, offset 4px). The contact link uses the frontmatter component tokens, medium label weight and the shared directional arrow. Its background transition takes 200ms; reduced motion removes the transition. It retains a charcoal focus outline (2px, offset 4px).

## Do's and Don'ts

### Do:

- **Do** keep this specification scoped to the projects index.
- **Do** preserve project order, visibility, covers and localized URLs from `src/data/projects.ts`; show the first project once and count only the remaining collection.
- **Do** retain translated visible names, keyboard focus, RTL direction and reduced-motion behavior.
- **Do** reuse existing cover assets through `getImageUrl`; their provenance remains in `src/data/projects.ts`. This redesign creates no raster assets.

### Don't:

- **Don't** apply this route's palette or composition to other pages without a separate approved change.
- **Don't** add invented project metadata, new fonts, rounded card shells or decorative shadows to this route.
- **Don't** describe source inspection as browser, mobile, test or production-build proof.
