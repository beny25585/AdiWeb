"use client";

import "@/styles/tailwind.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useId } from "react";
import { cloudinaryGalleryLoader } from "@/utils/cloudinary";
import CallToAction from "./CallToActionCard";
import ProjectMediaLabel from "./ProjectMediaLabel";
import { projectsMap } from "@/data/projects";

const clients = [
  { id: "v1782287806/2_ebmy5j.jpg", titleKey: "clients.private", visualization: true },
  { id: "TL7_j5tmkr", titleKey: "clients.apartments", quality: 90 },
  { id: "45_njvfua.png", titleKey: "clients.institutions" },
  { id: projectsMap.danceStudio.cover, titleKey: "clients.projects" },
] as const;

const imageSizes =
  "(max-width: 639px) calc(100vw - 40px), " +
  "(max-width: 767px) calc(100vw - 64px), " +
  "(max-width: 1023px) calc(50vw - 44px), " +
  "(max-width: 1279px) calc(50vw - 60px), " +
  "(max-width: 1439px) calc(25vw - 42px), 318px";

export default function ClientsAndCTA() {
  const t = useTranslations("finishing");
  const headingId = useId();

  return (
    <>
      <section
        aria-labelledby={headingId}
        className="tw:w-full tw:bg-[#faf8f4] tw:text-[#11110f] tw:selection:bg-[#e0c89f] tw:selection:text-[#11110f]"
      >
        <div className="tw:mx-auto tw:w-full tw:max-w-[1440px] tw:px-5 tw:py-10 tw:sm:px-8 tw:sm:py-12 tw:lg:px-12 tw:lg:py-16">
        <div className="tw:mb-7 tw:flex tw:items-center tw:gap-6 tw:sm:mb-8 tw:sm:gap-10">
          <h2
            id={headingId}
            className="tw:m-0 tw:max-w-3xl tw:text-start tw:text-[clamp(1.875rem,2.6vw,2.5rem)] tw:leading-tight tw:font-medium tw:tracking-[-0.025em] tw:text-[#11110f] tw:rtl:tracking-normal"
          >
            {t("clientsTitle")}
          </h2>
          <span
            aria-hidden="true"
            className="tw:h-px tw:min-w-8 tw:flex-1 tw:bg-[#b49a6a]"
          />
        </div>

        <ul role="list" className="tw:m-0 tw:grid tw:list-none tw:grid-cols-1 tw:gap-x-6 tw:gap-y-8 tw:p-0 tw:md:grid-cols-2 tw:xl:grid-cols-4">
          {clients.map((client) => (
            <li key={client.titleKey} className="tw:min-w-0">
              <figure className="tw:m-0">
                <div className="tw:relative tw:aspect-4/3 tw:overflow-hidden tw:bg-[#ded9cf]">
                  <Image
                    loader={cloudinaryGalleryLoader}
                    src={client.id}
                    alt=""
                    fill
                    sizes={imageSizes}
                    quality={"quality" in client ? client.quality : undefined}
                    className="tw:block tw:object-cover"
                  />
                </div>
                <figcaption className="tw:mt-4 tw:border-0 tw:border-b tw:border-solid tw:border-[#d4cfc5] tw:pb-4 tw:text-start">
                  <h3 className="tw:m-0 tw:text-lg tw:leading-7 tw:font-medium tw:text-[#11110f]">
                    {t(client.titleKey)}
                  </h3>
                  <ProjectMediaLabel
                    mediaType={"visualization" in client && client.visualization ? "visualization" : undefined}
                    label={t("visualizationLabel")}
                  />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
