# Cloudinary Video Integration

## Goal
Add Cloudinary video support to the company site — a **hero background video** (muted autoplay, full-bleed) and **project page videos** (native controls, standalone).

## Video Public IDs
- `0609_8_fykqn8` — to be used where needed (Hero and/or specific project pages)

## Changes

### 1. `src/utils/cloudinary.ts` — Add `cloudinaryVideoUrl`
Add an exported function:
```ts
cloudinaryVideoUrl(publicId: string): string
```
- Uses `https://res.cloudinary.com/ddncjeozb/video/upload`
- Transformation: `q_auto,f_auto` (auto quality, auto format)
- Builds URL as: `${baseUrl}/q_auto,f_auto/v1/${publicId}`

### 2. New component — `src/components/CloudinaryVideo.tsx`
Reusable client component with props:
- `publicIds: string | string[]` — one or more Cloudinary public IDs
- `mode: "hero" | "project"` — determines behavior

**Hero mode:**
- Muted, autoplay, loop, playsinline
- No controls
- `object-fit: cover`, fills parent
- Uses `<source>` with Cloudinary URL
- Only renders the first video (hero supports single video only)

**Project mode:**
- Native browser controls
- Responsive width
- `object-fit: contain`
- Uses `<source>` with Cloudinary URL
- Renders each video in a separate `<section>` if multiple provided

### 3. `src/components/Hero.tsx` — Replace broken `<video>`
Replace the existing `<video src="">` with `<CloudinaryVideo publicId="0609_8_fykqn8" mode="hero" />`.

### 4. `src/data/projects.ts` — Add optional `video` field to `Project`
```ts
export type Project = {
  slug: ProjectKey;
  title: string;
  cover: string;
  arcitecture?: boolean;
  goodImages?: boolean;
  images: string[];
  video?: string[]; // new: array of Cloudinary public IDs for project videos
};
```
Add `video: ["0609_8_fykqn8"]` to whichever project(s) need it.

### 5. `src/components/ProjectClient.tsx` — Render project video
- Receive `video` prop (optional `string[]`)
- If `video` is present, render `<CloudinaryVideo publicIds={video} mode="project" />` below the gallery or between gallery items
- Position: standalone section below the image gallery, centered

### 6. `src/app/[locale]/projects/[slug]/page.tsx` — Pass video to ProjectClient
- Read the video field from `projectsMap[slug].video`
- Pass it as a prop to `<ProjectClient>`

## Usage
```tsx
// Hero (single video)
<CloudinaryVideo publicIds="0609_8_fykqn8" mode="hero" />

// Project page (single video)
<CloudinaryVideo publicIds="0609_8_fykqn8" mode="project" />

// Project page (multiple videos)
<CloudinaryVideo publicIds={["0609_8_fykqn8", "another_video_id"]} mode="project" />
```

## Video URL format
```
https://res.cloudinary.com/ddncjeozb/video/upload/q_auto,f_auto/0609_8_fykqn8
```

## What's NOT changing
- Image cloudinary utility (`cloudinaryUrl`)
- Image gallery (lightgallery) — project video stays separate
- Any other pages or components
