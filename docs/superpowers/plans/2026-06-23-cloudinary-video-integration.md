# Cloudinary Video Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Cloudinary video support to the Hero section and project detail pages.

**Architecture:** Extend existing `cloudinary.ts` with a `cloudinaryVideoUrl()` utility, create a reusable `CloudinaryVideo` component with two modes (hero/project), then integrate into `Hero.tsx` and `ProjectClient.tsx`. Project data model gains an optional `video` field.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS Modules, Cloudinary video delivery

---

### Task 1: Add `cloudinaryVideoUrl` to `src/utils/cloudinary.ts`

**Files:**
- Modify: `src/utils/cloudinary.ts`

- [ ] **Step 1: Add video URL function**

Add to the bottom of `src/utils/cloudinary.ts`:

```typescript
const VIDEO_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`;

export const cloudinaryVideoUrl = (publicId: string): string => {
  if (!publicId) {
    throw new Error("cloudinaryVideoUrl: publicId is required");
  }
  return `${VIDEO_BASE_URL}/q_auto,f_auto/${publicId}`;
};
```

- `q_auto` — automatic quality
- `f_auto` — serves best container format (mp4, webm) based on browser

---

### Task 2: Create `src/components/CloudinaryVideo.tsx`

**Files:**
- Create: `src/components/CloudinaryVideo.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { cloudinaryVideoUrl } from "@/utils/cloudinary";

type Props = {
  publicIds: string | string[];
  mode: "hero" | "project";
};

export default function CloudinaryVideo({ publicIds, mode }: Props) {
  const ids = Array.isArray(publicIds) ? publicIds : [publicIds];

  if (mode === "hero") {
    const src = cloudinaryVideoUrl(ids[0]);
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={src} />
      </video>
    );
  }

  return (
    <>
      {ids.map((id) => (
        <section
          key={id}
          style={{ width: "100%", display: "flex", justifyContent: "center", padding: "40px 20px" }}
        >
          <video
            controls
            playsInline
            style={{ width: "100%", maxWidth: 800, borderRadius: 8, display: "block" }}
          >
            <source src={cloudinaryVideoUrl(id)} />
          </video>
        </section>
      ))}
    </>
  );
}
```

---

### Task 3: Update `src/components/Hero.tsx` to use CloudinaryVideo

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Add the import**

After line 8 (`import { FaComment } from "react-icons/fa";`), add:

```typescript
import CloudinaryVideo from "@/components/CloudinaryVideo";
```

- [ ] **Step 2: Replace the broken `<video>` tag**

Replace lines 62-69:
```tsx
          <video
            src="
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
```

With:
```tsx
          <CloudinaryVideo publicIds="0609_8_fykqn8" mode="hero" />
```

---

### Task 4: Add optional `video` field to Project type in `src/data/projects.ts`

**Files:**
- Modify: `src/data/projects.ts`

- [ ] **Step 1: Update the Project type**

Add `video?: string[];` to the `Project` type (after line 22, before `};`):

```typescript
  images: string[];
  video?: string[];
};
```

- [ ] **Step 2: Add video publicIds to a project**

Add `video: ["0609_8_fykqn8"]` to whichever project needs it. Example for `theAddressSignatureHome`:

```typescript
  theAddressSignatureHome: {
    slug: "theAddressSignatureHome",
    title: "The Address Signature Home",
    video: ["วีดีโอสำหรับ_TikTok_gmdqc3", "0609_8_fykqn8"],
    images: [
```

---

### Task 5: Update `src/components/ProjectClient.tsx` to accept and render video

**Files:**
- Modify: `src/components/ProjectClient.tsx`

- [ ] **Step 1: Add `video` to Props type**

Add `video?: string[];` to the Props type:

```typescript
type Props = {
  dir: "rtl" | "ltr";
  title: string;
  description: string;
  images: string[];
  video?: string[];
};
```

- [ ] **Step 2: Destructure `video` from props**

Change line 34 from:
```typescript
}: Props) {
```
To:
```typescript
  video,
}: Props) {
```

- [ ] **Step 3: Import CloudinaryVideo**

After the `import { getImageUrl } from "@/utils/getImageUrl";` line (line 19), add:

```typescript
import CloudinaryVideo from "@/components/CloudinaryVideo";
```

- [ ] **Step 4: Render the video component**

After the gallery `<div>` (closing `</div>` on line 233), add:

```tsx
      {video && video.length > 0 && (
        <CloudinaryVideo publicIds={video} mode="project" />
      )}
```

This renders the video section only when a `video` prop is provided.

---

### Task 6: Update `src/app/[locale]/projects/[slug]/page.tsx` to pass video

**Files:**
- Modify: `src/app/[locale]/projects/[slug]/page.tsx`

- [ ] **Step 1: Import `projectsMap`**

Change line 1:
```typescript
import { projectImages } from "@/data/projects";
```
To:
```typescript
import { projectImages, projectsMap } from "@/data/projects";
```

- [ ] **Step 2: Extract `slug` before the return**

Add this line after line 16 (`const images = ...`):

```typescript
const slugKey = slug as keyof typeof projectsMap;
const video = projectsMap[slugKey]?.video;
```

- [ ] **Step 3: Pass `video` prop**

Add `video={video}` to the `<ProjectClient>` component:

```tsx
    <ProjectClient
      dir={dir}
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      images={images}
      video={video}
    />
```

---

### Task 7: Verify the build

**Files:**
- None

- [ ] **Step 1: Run TypeScript check and lint**

```bash
npm run lint
```

- [ ] **Step 2: Run a build to catch any errors**

```bash
npm run build
```

Expected: Build succeeds with no errors or warnings related to the new code.
