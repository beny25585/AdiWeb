"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { FiPause, FiPlay } from "react-icons/fi";
import {
  cloudinaryVideoPosterUrl,
  cloudinaryVideoUrl,
} from "@/utils/cloudinary";

type Props = {
  publicId: string;
  number: number;
};

export default function ProjectPortraitVideo({ publicId, number }: Props) {
  const t = useTranslations("projectPage");
  const videoId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const playbackIntent = useRef<"auto" | "play" | "pause">("auto");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inViewport = typeof IntersectionObserver === "undefined";

    const updatePlayback = () => {
      const requestedPlay = playbackIntent.current === "play";
      if (
        !inViewport ||
        document.hidden ||
        playbackIntent.current === "pause" ||
        (reducedMotion.matches && !requestedPlay)
      ) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        // Keep the poster and play button when autoplay is unavailable.
      });
    };

    const onMotionChange = () => {
      if (reducedMotion.matches) playbackIntent.current = "pause";
      updatePlayback();
    };
    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            ([entry]) => {
              inViewport = (entry?.intersectionRatio ?? 0) >= 0.15;
              updatePlayback();
            },
            { threshold: 0.15 },
          );

    observer?.observe(video);
    reducedMotion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();

    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [publicId]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused) {
      playbackIntent.current = "pause";
      video.pause();
      return;
    }

    playbackIntent.current = "play";
    void video.play().catch(() => {
      // A failed request leaves the play control available for another try.
    });
  };

  return (
    <div className="tw:relative tw:mx-auto tw:w-full tw:max-w-88 tw:overflow-hidden tw:bg-[#11110f]">
      <video
        ref={videoRef}
        id={videoId}
        loop
        muted
        playsInline
        preload="metadata"
        poster={cloudinaryVideoPosterUrl(publicId)}
        aria-label={t("videoLabel", { number })}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        className="tw:block tw:aspect-[9/16] tw:w-full tw:object-cover"
      >
        <source src={cloudinaryVideoUrl(publicId)} />
        {t("videoUnsupported")}
      </video>
      <button
        type="button"
        onClick={togglePlayback}
        aria-controls={videoId}
        aria-label={t(isPlaying ? "pauseVideo" : "playVideo")}
        className="tw:absolute tw:end-3 tw:bottom-3 tw:inline-flex tw:size-11 tw:cursor-pointer tw:items-center tw:justify-center tw:border tw:border-solid tw:border-[#c6ad80] tw:bg-[#11110f] tw:p-0 tw:text-[#e0c89f] tw:transition-colors tw:hover:bg-[#2b2822] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
      >
        {isPlaying ? (
          <FiPause aria-hidden="true" className="tw:size-5" />
        ) : (
          <FiPlay aria-hidden="true" className="tw:size-5" />
        )}
      </button>
    </div>
  );
}
