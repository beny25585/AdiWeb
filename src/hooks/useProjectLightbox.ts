"use client";

import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { dir } from "@/lib/i18n";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export function useProjectLightbox(images: string[], labelledBy: string) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("projectPage");
  const locale = useLocale();

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || images.length === 0) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = motionQuery.matches;
    let savedOverflow: { html: string; body: string } | undefined;
    let trigger: HTMLAnchorElement | undefined;

    const lockScroll = () => {
      if (savedOverflow) return;
      trigger = gallery.querySelectorAll<HTMLAnchorElement>(
        "a[data-project-image]",
      )[lightbox.index];
      savedOverflow = {
        html: document.documentElement.style.overflow,
        body: document.body.style.overflow,
      };
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };
    const restoreScroll = () => {
      if (!savedOverflow) return;
      document.documentElement.style.overflow = savedOverflow.html;
      document.body.style.overflow = savedOverflow.body;
      savedOverflow = undefined;
    };
    const afterClose = () => {
      restoreScroll();
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
      trigger = undefined;
    };

    const lightbox = lightGallery(gallery, {
      selector: "a[data-project-image]",
      plugins: [lgZoom, lgThumbnail],
      addClass: "tw:touch-none tw:[&_*]:touch-none tw:rtl:[&_.lg-prev]:left-auto tw:rtl:[&_.lg-prev]:right-5 tw:rtl:[&_.lg-prev]:rotate-180 tw:rtl:[&_.lg-next]:right-auto tw:rtl:[&_.lg-next]:left-5 tw:rtl:[&_.lg-next]:rotate-180",
      ariaLabelledby: labelledBy,
      speed: reducedMotion ? 0 : 250,
      backdropDuration: reducedMotion ? 0 : 150,
      startAnimationDuration: reducedMotion ? 0 : 250,
      startClass: "",
      thumbnail: true,
      animateThumb: !reducedMotion,
      zoomFromOrigin: false,
      allowMediaOverlap: true,
      toggleThumb: true,
      download: false,
      getCaptionFromTitleOrAlt: false,
      counter: true,
      enableSwipe: true,
      enableDrag: true,
      mobileSettings: {
        controls: true,
        showCloseIcon: true,
        download: false,
      },
      strings: {
        closeGallery: t("closeGallery"),
        toggleMaximize: t("toggleMaximize"),
        previousSlide: t("previousPhoto"),
        nextSlide: t("nextPhoto"),
        download: t("download"),
        playVideo: t("playVideo"),
        mediaLoadingFailed: t("imageLoadError"),
      },
      thumbnailPluginStrings: { toggleThumbnails: t("toggleThumbnails") },
      zoomPluginStrings: {
        zoomIn: t("zoomIn"),
        zoomOut: t("zoomOut"),
        viewActualSize: t("actualSize"),
      },
    });

    const container = lightbox.$container.get() as HTMLElement;
    container.setAttribute("dir", dir(locale));

    // Finish third-party CSS transitions, including the zoom plugin's fixed durations.
    const finishMotion = () => {
      if (!motionQuery.matches) return;
      for (const animation of container.getAnimations({ subtree: true })) {
        if (animation.playState !== "running") continue;
        if (animation.effect?.getComputedTiming().endTime === Infinity) {
          animation.cancel();
        } else {
          animation.finish();
        }
      }
    };

    const updateMotion = (event: MediaQueryListEvent) => {
      lightbox.settings.speed = event.matches ? 0 : 250;
      lightbox.settings.backdropDuration = event.matches ? 0 : 150;
      lightbox.settings.startAnimationDuration = event.matches ? 0 : 250;
      lightbox.settings.animateThumb = !event.matches;
      lightbox.$inner.css("transition-duration", event.matches ? "0ms" : "250ms");
      finishMotion();
    };

    gallery.addEventListener("lgBeforeOpen", lockScroll);
    gallery.addEventListener("lgAfterClose", afterClose);
    container.addEventListener("transitionrun", finishMotion, true);
    container.addEventListener("animationstart", finishMotion, true);
    motionQuery.addEventListener("change", updateMotion);

    return () => {
      gallery.removeEventListener("lgBeforeOpen", lockScroll);
      gallery.removeEventListener("lgAfterClose", afterClose);
      container.removeEventListener("transitionrun", finishMotion, true);
      container.removeEventListener("animationstart", finishMotion, true);
      motionQuery.removeEventListener("change", updateMotion);
      lightbox.destroy();
      restoreScroll();
    };
  }, [images, labelledBy, locale, t]);

  return galleryRef;
}
