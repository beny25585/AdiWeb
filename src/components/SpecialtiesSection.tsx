"use client";

import Image from "next/image";
import { useId } from "react";
import { useTranslations } from "next-intl";
import { getImageUrl } from "@/utils/getImageUrl";
import "@/styles/tailwind.css";

const specialties = [
  "gypsum",
  "flooring",
  "doors",
  "carpentry",
  "electrical",
  "renovation",
] as const;

const FINISHING_DETAIL_IMAGE = "DSC_0241_ltxogp";

export default function SpecialtiesSection() {
  const t = useTranslations("finishing");
  const tProjects = useTranslations("projects");
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="tw:relative tw:z-0 tw:w-full tw:bg-[#faf8f4] tw:text-[#11110f] tw:selection:bg-[#e0c89f] tw:selection:text-[#11110f]"
    >
      <div className="tw:mx-auto tw:w-full tw:max-w-[1440px] tw:px-5 tw:py-10 tw:sm:px-8 tw:sm:py-12 tw:lg:px-12 tw:lg:py-16">
        <div className="tw:grid tw:items-start tw:gap-10 tw:lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] tw:lg:gap-12">
          <div className="tw:min-w-0">
            <header className="tw:mb-7 tw:text-start tw:sm:mb-8">
              <h2
                id={headingId}
                className="tw:m-0 tw:text-[clamp(1.875rem,2.6vw,2.5rem)] tw:leading-tight tw:font-medium tw:tracking-[-0.025em] tw:text-balance tw:text-[#11110f] tw:rtl:tracking-normal"
              >
                {t("title")}
              </h2>
              <p className="tw:mt-4 tw:mb-0 tw:max-w-[58ch] tw:text-base tw:leading-relaxed tw:text-pretty tw:text-[#625c51]">
                {t("subtitle")}
              </p>
            </header>

            <ul role="list" className="tw:m-0 tw:grid tw:list-none tw:grid-cols-1 tw:gap-x-8 tw:p-0 tw:sm:grid-cols-2">
              {specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="tw:min-w-0 tw:border-0 tw:border-t tw:border-solid tw:border-[#d4cfc5] tw:py-5 tw:text-start tw:sm:py-6"
                >
                  <h3 className="tw:m-0 tw:text-lg tw:leading-7 tw:font-medium tw:text-balance tw:text-[#11110f]">
                    {t(`specialties.${specialty}.title`)}
                  </h3>
                  <p className="tw:mt-2 tw:mb-0 tw:max-w-[42ch] tw:text-base tw:leading-relaxed tw:text-pretty tw:text-[#625c51]">
                    {t(`specialties.${specialty}.desc`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <figure className="tw:mx-auto tw:my-0 tw:w-full tw:min-w-0 tw:max-w-xs tw:sm:max-w-sm tw:lg:mx-0 tw:lg:max-w-none">
            <div className="tw:relative tw:aspect-2/3 tw:overflow-hidden tw:bg-[#ded9cf]">
              <Image
                src={getImageUrl(FINISHING_DETAIL_IMAGE, 1000)}
                alt={t("detailImageAlt")}
                fill
                sizes="(min-width: 1440px) 432px, (min-width: 1024px) calc((100vw - 144px) / 3), (min-width: 640px) 384px, 320px"
                className="tw:object-cover"
              />
            </div>
            <figcaption className="tw:mt-3 tw:text-start tw:text-sm tw:leading-6 tw:text-[#625c51]">
              {tProjects("theAddressSignatureHome.title")}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
