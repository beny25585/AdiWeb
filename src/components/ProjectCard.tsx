"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { getProjectCoverImageProps } from "@/utils/getProjectCoverImageProps";
import ProjectMediaLabel from "./ProjectMediaLabel";
import styles from "@/styles/ProjectCard.module.css";

type Props = {
  project: Pick<Project, "slug" | "cover" | "coverDelivery" | "mediaType">;
  imageSizes?: string;
  imageWidth?: number;
  variant?: "default" | "detail";
};

export default function ProjectCard({
  project,
  imageSizes,
  imageWidth = 900,
  variant = "default",
}: Props) {
  const t = useTranslations("projects");
  const locale = useLocale();
  const detail = variant === "detail";
  const sizes = imageSizes ?? (detail
    ? "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 44px), (max-width: 1295px) calc(33.333vw - 48px), 384px"
    : "(max-width: 550px) calc(100vw - 40px), (max-width: 900px) calc(50vw - 30px), (max-width: 1240px) calc(33.333vw - 27px), 387px");

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className={detail ? "tw:group tw:block tw:min-w-0 tw:text-[#11110f] tw:no-underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-8 tw:focus-visible:outline-[#75603b]" : styles.card}
    >
      <div className={detail ? "tw:relative tw:aspect-[3/2] tw:overflow-hidden tw:bg-[#ded9cf]" : styles.imageWrap}>
        <Image
          {...getProjectCoverImageProps(project, imageWidth)}
          alt=""
          fill
          className={detail ? "tw:object-cover tw:transition-transform tw:duration-500 tw:ease-out tw:motion-safe:group-hover:scale-[1.035] tw:motion-safe:group-focus-visible:scale-[1.035] tw:motion-reduce:transition-none" : styles.image}
          sizes={sizes}
        />
      </div>
      <div className={detail ? "tw:flex tw:min-h-14 tw:items-start tw:justify-between tw:gap-3 tw:border-b tw:border-[#d4cfc5] tw:py-3" : styles.body}>
        <div className="tw:min-w-0">
          <h3 className={detail ? "tw:m-0 tw:text-base tw:leading-snug tw:font-medium tw:text-[#11110f] tw:wrap-anywhere tw:underline-offset-4 tw:group-hover:underline tw:group-focus-visible:underline tw:sm:text-lg" : styles.title}>
            {t(`${project.slug}.title`)}
          </h3>
          <ProjectMediaLabel mediaType={project.mediaType} label={t("media.visualization")} />
        </div>
        {detail && <FiArrowUpRight
          aria-hidden="true"
          focusable="false"
          className="tw:mt-0.5 tw:size-5 tw:shrink-0 tw:text-[#75603b] tw:rtl:-scale-x-100"
        />}
      </div>
    </Link>
  );
}
