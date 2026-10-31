"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { FiPlayCircle, FiX } from "react-icons/fi";
import { cloudinaryVideoPosterUrl } from "@/utils/cloudinary";
import CloudinaryVideo from "./CloudinaryVideo";
import "@/styles/tailwind.css";

const COMPANY_FILM_ID = "v1793332996/วิดิโอที่ใช้ลงเพจ_2_m2vuyl.mov";

export default function CompanyFilm() {
  const t = useTranslations("hero");
  const dialogId = useId();
  const headingId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const video = videoRef.current;
    const htmlOverflow = document.documentElement.style.overflow;
    const bodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      if (video) {
        video.pause();
        video.removeAttribute("src");
        for (const source of video.querySelectorAll("source")) {
          source.removeAttribute("src");
        }
        video.load();
      }
      document.documentElement.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
    };
  }, [isOpen]);

  const openFilm = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    setIsOpen(true);
  };

  const closeFilm = () => {
    videoRef.current?.pause();
    dialogRef.current?.close();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={isOpen}
        onClick={openFilm}
        className="tw:inline-flex tw:min-h-12 tw:cursor-pointer tw:items-center tw:justify-center tw:gap-3 tw:border-0 tw:bg-transparent tw:p-0 tw:text-sm tw:leading-6 tw:font-normal tw:text-white tw:underline-offset-8 tw:transition-colors tw:hover:text-[#e0c89f] tw:hover:underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
      >
        <FiPlayCircle aria-hidden="true" className="tw:size-5 tw:shrink-0" />
        {t("fullFilm")}
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-labelledby={headingId}
        onCancel={(event) => {
          event.preventDefault();
          closeFilm();
        }}
        onClose={() => {
          videoRef.current?.pause();
          setIsOpen(false);
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          ) {
            closeFilm();
          }
        }}
        className="tw:fixed tw:inset-0 tw:m-auto tw:max-h-[calc(100dvh-2rem)] tw:w-[min(48rem,calc(100vw-2rem))] tw:max-w-none tw:overflow-auto tw:border tw:border-solid tw:border-white/15 tw:bg-[#11110f] tw:p-0 tw:text-[#faf8f4] tw:backdrop:bg-black/85"
      >
        <div className="tw:flex tw:min-w-0 tw:flex-col">
          <div className="tw:flex tw:min-h-14 tw:shrink-0 tw:items-center tw:justify-between tw:gap-4 tw:px-4 tw:py-2 tw:sm:px-5">
            <h2
              id={headingId}
              className="tw:m-0 tw:min-w-0 tw:text-base tw:leading-snug tw:font-medium tw:text-[#faf8f4]"
            >
              {t("videoTitle")}
            </h2>
            <button
              type="button"
              aria-label={t("closeFilm")}
              onClick={closeFilm}
              className="tw:inline-flex tw:size-12 tw:shrink-0 tw:cursor-pointer tw:items-center tw:justify-center tw:border-0 tw:bg-transparent tw:p-0 tw:text-[#faf8f4] tw:transition-colors tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
            >
              <FiX aria-hidden="true" className="tw:size-6" />
            </button>
          </div>
          <div className="tw:flex tw:h-[calc(100dvh-8rem)] tw:max-h-[50rem] tw:min-h-0 tw:items-center tw:justify-center tw:px-4 tw:pb-4">
            {isOpen ? (
              <CloudinaryVideo
                publicIds={COMPANY_FILM_ID}
                mode="hero"
                heroVideoProps={{
                  ref: videoRef,
                  autoPlay: false,
                  loop: false,
                  muted: false,
                  controls: true,
                  preload: "metadata",
                  poster: cloudinaryVideoPosterUrl(COMPANY_FILM_ID),
                  "aria-label": t("videoLabel"),
                  className:
                    "tw:block tw:aspect-[9/16] tw:h-full tw:max-h-full tw:w-auto tw:max-w-full tw:bg-black tw:object-contain tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-[#e0c89f]",
                }}
              />
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
