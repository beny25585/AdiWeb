"use client";

import type { ComponentPropsWithRef } from "react";
import { cloudinaryVideoUrl } from "@/utils/cloudinary";

type Props = {
  publicIds: string | string[];
  mode: "hero" | "project";
  heroVideoProps?: Omit<
    ComponentPropsWithRef<"video">,
    "src" | "children" | "style"
  >;
};

export default function CloudinaryVideo({
  publicIds,
  mode,
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

  return (
    <>
      {ids.map((id) => (
        <section
          key={id}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "40px 20px",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              maxWidth: 800,
              borderRadius: 8,
              display: "block",
            }}
          >
            <source src={cloudinaryVideoUrl(id)} />
          </video>
        </section>
      ))}
    </>
  );
}
