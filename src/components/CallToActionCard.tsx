"use client";

import Link from "next/link";
import { useId } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";
import "@/styles/tailwind.css";

export default function CallToAction() {
  const t = useTranslations("finishing");
  const locale = useLocale();
  const headingId = useId();
  return (
    <section aria-labelledby={headingId} className="tw:bg-[#11110f] tw:text-[#faf8f4] tw:selection:bg-[#e0c89f] tw:selection:text-[#11110f]">
      <div className="tw:mx-auto tw:flex tw:w-full tw:max-w-[1440px] tw:flex-col tw:items-start tw:justify-between tw:gap-7 tw:px-5 tw:py-10 tw:sm:px-8 tw:sm:py-12 tw:md:flex-row tw:md:items-center tw:md:gap-10 tw:lg:px-12 tw:lg:py-14">
        <h2 id={headingId} className="tw:m-0 tw:max-w-[28ch] tw:text-[clamp(1.75rem,3vw,2.5rem)] tw:leading-tight tw:font-medium tw:tracking-[-0.025em] tw:text-balance tw:text-[#faf8f4] tw:rtl:tracking-normal">
          {t("ctaText")}
        </h2>
        <Link href={`/${locale}/contact`} className="tw:inline-flex tw:min-h-12 tw:shrink-0 tw:items-center tw:justify-center tw:gap-6 tw:border tw:border-solid tw:border-[#c6ad80] tw:px-6 tw:py-3 tw:text-base tw:leading-6 tw:font-medium tw:text-[#e0c89f] tw:no-underline tw:transition-colors tw:hover:bg-[#c6ad80] tw:hover:text-[#11110f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none">
          {t("ctaButton")}
          <FiArrowRight aria-hidden="true" className="tw:size-5 tw:shrink-0 tw:rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
