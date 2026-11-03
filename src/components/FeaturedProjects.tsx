"use client";

import Link from "next/link";
import Image from "next/image";
import { useId } from "react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { portfolioProjects } from "@/data/projects";
import { useProjectGallery } from "@/hooks/useProjectGallery";
import { getProjectCoverImageProps } from "@/utils/getProjectCoverImageProps";
import ProjectMediaLabel from "./ProjectMediaLabel";
import "@/styles/tailwind.css";

export default function FeaturedProjectsList() {
  const t = useTranslations("projects");
  const tH = useTranslations("featuredProjects");
  const tN = useTranslations("projectNavigation");
  const locale = useLocale();
  const format = useFormatter();
  const headingId = useId();
  const trackId = useId();
  const total = portfolioProjects.length;
  const {
    trackRef,
    visibleRange: range,
    previousDisabled,
    nextDisabled,
    previous,
    next,
    clearPending,
  } = useProjectGallery(total, locale);
  const formatIndex = (index: number) =>
    format.number(index, { minimumIntegerDigits: 2, useGrouping: false });

  if (total === 0) return null;

  const position = range
    ? range.first === range.last
      ? tH("positionSingle", { current: range.first + 1, total })
      : tH("positionRange", {
          first: range.first + 1,
          last: range.last + 1,
          total,
        })
    : tH("totalProjects", { total });

  const visualPosition = range
    ? (range.first === range.last
        ? formatIndex(range.first + 1)
        : formatIndex(range.first + 1) + "–" + formatIndex(range.last + 1)) +
      " / " +
      formatIndex(total)
    : formatIndex(total);

  return (
    <section
      aria-labelledby={headingId}
      className="tw:w-full tw:bg-[#11110f] tw:text-[#faf8f4] tw:selection:bg-[#e0c89f] tw:selection:text-[#11110f]"
    >
      <div className="tw:mx-auto tw:grid tw:w-full tw:max-w-[1440px] tw:items-start tw:gap-8 tw:px-5 tw:py-10 tw:sm:gap-10 tw:sm:px-8 tw:sm:py-12 tw:lg:grid-cols-[minmax(0,0.7fr)_minmax(0,2.3fr)] tw:lg:px-12 tw:lg:py-16">
        <div className="tw:min-w-0 tw:text-start">
          <h2
            id={headingId}
            className="tw:m-0 tw:text-[clamp(1.875rem,2.6vw,2.5rem)] tw:leading-tight tw:font-medium tw:tracking-[-0.025em] tw:text-balance tw:text-[#faf8f4] tw:rtl:tracking-normal"
          >
            {tH("title")}
          </h2>
          <p className="tw:mt-4 tw:mb-0 tw:max-w-[38ch] tw:text-base tw:leading-relaxed tw:text-pretty tw:text-[#c9c5bc]">
            {tH("desc")}
          </p>
          <Link
            href={"/" + locale + "/projects"}
            className="tw:mt-5 tw:inline-flex tw:min-h-12 tw:items-center tw:gap-5 tw:border-0 tw:border-b tw:border-solid tw:border-[#c6ad80] tw:py-3 tw:text-sm tw:leading-6 tw:font-medium tw:text-[#faf8f4] tw:no-underline tw:transition-colors tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
          >
            {tH("cta")}
            <FiArrowRight
              aria-hidden="true"
              className="tw:size-4 tw:shrink-0 tw:text-[#c6ad80] tw:rtl:rotate-180"
            />
          </Link>
        </div>

        <div className="tw:min-w-0">
          <ul
            ref={trackRef}
            id={trackId}
            className="tw:m-0 tw:flex tw:w-full tw:touch-auto tw:snap-x tw:snap-mandatory tw:list-none tw:gap-4 tw:overflow-x-auto tw:overscroll-x-contain tw:p-0 tw:[scrollbar-width:none] tw:md:gap-5 tw:[&_*]:touch-auto tw:[&::-webkit-scrollbar]:hidden"
            aria-label={tH("galleryLabel")}
            onPointerDown={clearPending}
            onWheel={clearPending}
            onKeyDown={clearPending}
          >
            {portfolioProjects.map((project) => (
              <li
                key={project.slug}
                className="tw:flex tw:min-w-0 tw:grow-0 tw:shrink-0 tw:basis-full tw:snap-start tw:snap-always tw:md:basis-[calc((100%_-_1.25rem)/2)] tw:xl:basis-[calc((100%_-_2.5rem)/3)]"
              >
                <Link
                  href={"/" + locale + "/projects/" + project.slug}
                  className="tw:group tw:flex tw:min-w-0 tw:flex-1 tw:flex-col tw:text-[#faf8f4] tw:no-underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-[-3px] tw:focus-visible:outline-[#e0c89f]"
                >
                  <div className="tw:relative tw:aspect-4/3 tw:w-full tw:shrink-0 tw:overflow-hidden tw:bg-[#242421]">
                    <Image
                      {...getProjectCoverImageProps(project, 1000)}
                      alt=""
                      fill
                      sizes="(min-width: 1440px) 320px, (min-width: 1280px) 24vw, (min-width: 1024px) 35vw, (min-width: 768px) 46vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                      className="tw:object-cover tw:motion-safe:transition-transform tw:motion-safe:duration-300 tw:motion-safe:group-hover:scale-[1.025] tw:motion-safe:group-focus-visible:scale-[1.025]"
                      draggable={false}
                    />
                  </div>
                  <div className="tw:flex tw:min-h-20 tw:flex-1 tw:items-start tw:justify-between tw:gap-3 tw:border-0 tw:border-b tw:border-solid tw:border-[#393830] tw:py-4">
                    <div className="tw:min-w-0">
                      <h3 className="tw:m-0 tw:text-base tw:leading-6 tw:font-normal tw:wrap-break-word tw:text-[#faf8f4] tw:underline-offset-4 tw:group-hover:underline tw:group-focus-visible:underline">
                        {t(project.slug + ".title")}
                      </h3>
                      <ProjectMediaLabel mediaType={project.mediaType} label={t("media.visualization")} tone="dark" />
                    </div>
                    <FiArrowRight
                      aria-hidden="true"
                      className="tw:mt-1 tw:size-4 tw:shrink-0 tw:text-[#c6ad80] tw:rtl:rotate-180"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="tw:mt-5 tw:flex tw:items-center tw:justify-between tw:gap-4">
            <p className="tw:relative tw:m-0 tw:min-w-0 tw:text-xs tw:leading-6 tw:tracking-[0.06em] tw:text-[#c9c5bc] tw:tabular-nums" aria-live="polite" aria-atomic="true">
              <span className="tw:sr-only">{position}</span>
              <span dir="ltr" aria-hidden="true">{visualPosition}</span>
            </p>
            <div className="tw:flex tw:shrink-0 tw:gap-2">
              <button
                type="button"
                className="tw:flex tw:size-12 tw:shrink-0 tw:cursor-pointer tw:items-center tw:justify-center tw:border tw:border-solid tw:border-[#5a574e] tw:bg-transparent tw:p-0 tw:text-[#faf8f4] tw:transition-colors tw:enabled:hover:border-[#c6ad80] tw:enabled:hover:bg-white/5 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:disabled:cursor-default tw:disabled:opacity-30 tw:motion-reduce:transition-none"
                aria-label={tN("previous")}
                aria-controls={trackId}
                disabled={previousDisabled}
                onClick={previous}
              >
                <FiArrowLeft
                  aria-hidden="true"
                  className="tw:size-5 tw:shrink-0 tw:rtl:rotate-180"
                />
              </button>
              <button
                type="button"
                className="tw:flex tw:size-12 tw:shrink-0 tw:cursor-pointer tw:items-center tw:justify-center tw:border tw:border-solid tw:border-[#5a574e] tw:bg-transparent tw:p-0 tw:text-[#faf8f4] tw:transition-colors tw:enabled:hover:border-[#c6ad80] tw:enabled:hover:bg-white/5 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:disabled:cursor-default tw:disabled:opacity-30 tw:motion-reduce:transition-none"
                aria-label={tN("next")}
                aria-controls={trackId}
                disabled={nextDisabled}
                onClick={next}
              >
                <FiArrowRight
                  aria-hidden="true"
                  className="tw:size-5 tw:shrink-0 tw:rtl:rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
