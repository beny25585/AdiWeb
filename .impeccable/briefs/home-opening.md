# Home opening

Mode: Persuade. Scope: the opening of `/[locale]`, `Hero.tsx`, its film trigger/dialog in `CompanyFilm.tsx`, and the homepage overlay behavior of the shared `SiteHeader.tsx`.

On 2026-10-31 the user supplied Yaniv Engineering as the reference, then approved a cinematic replacement: an edge-to-edge project image filling the opening, a transparent overlay header only on the homepage, a white two-line heading positioned near the lower inline start, a subtle projects action and intentional opening of the full film. Later approvals for the remaining homepage sections and shared navigation are recorded in their own briefs.

Reference: https://yanivg.com/he/%D7%99%D7%A0%D7%99%D7%91-%D7%94%D7%A0%D7%93%D7%A1%D7%94/ . Its HTML and CSS establish a viewport-height media opening, white overlaid type, a transparent header and minimal interface ornament. No rendered screenshot of the reference was available. Adapt those composition principles to A&S content and imagery.

`projectsMap.lawFirmOffice.cover` owns the background photo, inspected before selection: reception desk, glass offices and wood floor without embedded advertising text. Text and navigation stay readable using a restrained dark overlay, stronger near the top and bottom. The Hebrew heading reads "אדריכלות מדויקת." in a light weight, then "ביצוע מוקפד." in a stronger weight. All copy and accessible labels use next-intl in Hebrew, English and Thai.

Keep the existing film public ID and natural 9:16 proportions. The film opens in a native modal dialog from the opening's secondary action, with native controls, no autoplay, no loop, deferred media loading, close/Escape behavior and scroll/focus restoration. No permanent film band or blank spacer precedes the project gallery.

The fixed shared `SiteHeader` is transparent at the top of the homepage and solid black after 24px of document or body scrolling, or while its mobile menu is open. It returns to transparent at the top when the menu is closed. Capture scroll events so a body scroll container is observed as well as the window. The separately approved internal-page extension uses the same header with an always-black background and an in-flow height offset; see `site-navigation-contact.md`. Preserve existing navigation destinations, brand assets and language choices; support disclosure state, keyboard focus and Escape in the menu.

Use prefixed Tailwind utilities directly in markup, inherited typography, visible focus and RTL-aware arrows. The opening uses a small viewport minimum height and content-driven growth for shorter screens and translated text. No entrance animation hides content. This brief changes the opening only; the featured-projects, specialties and ending briefs own their separately approved sections. Existing DESIGN.md and its sidecar remain scoped to the projects index and are not redefined by these local extensions.

Agent validation: lint and TypeScript plus source/media inspection. The user retains tests, production build and mobile verification; source/media inspection is not rendered-browser or device evidence.
