"use client";

import type { ComponentPropsWithRef } from "react";
import { useTranslations } from "next-intl";
import {
  cloudinaryVideoPosterUrl,
  cloudinaryVideoUrl,
} from "@/utils/cloudinary";
import ProjectPortraitVideo from "./ProjectPortraitVideo";

type Props = {
  publicIds: string | string[];
  mode: "hero" | "project";
  presentation?: "portrait-loop";
  heroVideoProps?: Omit<
    ComponentPropsWithRef<"video">,
    "src" | "children" | "style"
  >;
};

export default function CloudinaryVideo({
  publicIds,
  mode,
  presentation,
  heroVideoProps,
}: Props) {
  const ids = Array.isArray(publicIds) ? publicIds : [publicIds];

  if (mode === "hero") {
    if (ids.length === 0) return null;
    const src = cloudinaryVideoUrl(ids[0]!);
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        {...heroVideoProps}
      >
        <source src={src} />
      </video>
    );
  }

  if (presentation === "portrait-loop") {
    return ids.map((id, index) => (
      <ProjectPortraitVideo key={id} publicId={id} number={index + 1} />
    ));
  }

  return <ProjectVideos ids={ids} />;
}

function ProjectVideos({ ids }: { ids: string[] }) {
  const t = useTranslations("projectPage");

  return (
    <>
      {ids.map((id, index) => (
        <video
          key={id}
          controls
          playsInline
          preload="none"
          poster={cloudinaryVideoPosterUrl(id)}
          aria-label={t("videoLabel", { number: index + 1 })}
          className="tw:block tw:aspect-video tw:max-h-[70vh] tw:w-full tw:min-w-0 tw:bg-[#11110f] tw:object-contain tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b]"
        >
          <source src={cloudinaryVideoUrl(id)} />
          {t("videoUnsupported")}
        </video>
      ))}
    </>
  );
}
