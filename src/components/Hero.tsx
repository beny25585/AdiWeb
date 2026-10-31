"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FiArrowRight } from "react-icons/fi";
import { projectsMap } from "@/data/projects";
import { getImageUrl } from "@/utils/getImageUrl";
import CompanyFilm from "./CompanyFilm";
import "@/styles/tailwind.css";

const featuredProject = projectsMap.lawFirmOffice;

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="tw:relative tw:isolate tw:flex tw:min-h-svh tw:items-end tw:overflow-hidden tw:bg-[#11110f] tw:text-white tw:selection:bg-[#e0c89f] tw:selection:text-[#11110f]"
    >
      <Image
        src={getImageUrl(featuredProject.cover, 2400)}
        alt={t("imageAlt")}
        fill
        preload
        sizes="100vw"
        className="tw:-z-20 tw:object-cover tw:object-[60%_center] tw:lg:object-center"
      />
      <div
        aria-hidden="true"
        className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-10 tw:bg-black/20"
      />
      <div
        aria-hidden="true"
        className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-10 tw:bg-linear-to-b tw:from-black/70 tw:via-black/10 tw:to-black/85"
      />

      <div className="tw:mx-auto tw:w-full tw:max-w-[1440px] tw:px-5 tw:pt-36 tw:pb-10 tw:sm:px-8 tw:sm:pt-44 tw:sm:pb-14 tw:lg:px-12 tw:lg:pb-16">
        <div className="tw:max-w-[56rem]">
          <h1
            id={headingId}
            className="tw:m-0 tw:text-[clamp(2.125rem,5.2vw,4.75rem)] tw:leading-[1.15] tw:font-light tw:tracking-[-0.025em] tw:text-balance tw:text-white tw:rtl:tracking-normal"
          >
            <span className="tw:block">{t("headlineFirst")}</span>
            <span className="tw:mt-2 tw:block tw:font-semibold">
              {t("headlineSecond")}
            </span>
          </h1>
          <p className="tw:mt-5 tw:mb-0 tw:max-w-[48ch] tw:text-base tw:leading-relaxed tw:font-normal tw:text-pretty tw:text-white/90 tw:sm:mt-6 tw:sm:text-lg">
            {t("sub")}
          </p>
          <div className="tw:mt-6 tw:flex tw:flex-wrap tw:items-center tw:gap-x-8 tw:gap-y-3 tw:sm:mt-7 tw:sm:gap-x-10">
            <Link
              href={`/${locale}/projects`}
              className="tw:inline-flex tw:min-h-12 tw:items-center tw:gap-5 tw:border-0 tw:border-b tw:border-solid tw:border-[#c6ad80] tw:py-3 tw:text-base tw:leading-6 tw:font-medium tw:text-white tw:no-underline tw:transition-colors tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
            >
              {t("projectsBtn")}
              <FiArrowRight
                aria-hidden="true"
                className="tw:size-4 tw:shrink-0 tw:text-[#e0c89f] tw:rtl:rotate-180"
              />
            </Link>
            <CompanyFilm />
          </div>
        </div>
      </div>
    </section>
  );
}
