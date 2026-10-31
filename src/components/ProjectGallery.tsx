"use client";

import Image from "next/image";
import { useId } from "react";
import { useTranslations } from "next-intl";
import { FiMaximize2 } from "react-icons/fi";
import { useProjectLightbox } from "@/hooks/useProjectLightbox";
import { getImageUrl } from "@/utils/getImageUrl";

type Props = {
  images: string[];
  title: string;
  labelledBy: string;
};

type PhotoProps = {
  source: string;
  title: string;
  index: number;
  total: number;
  featured?: boolean;
};

function ProjectPhoto({
  source,
  title,
  index,
  total,
  featured = false,
}: PhotoProps) {
  const t = useTranslations("projectPage");

  return (
    <a
      href={getImageUrl(source)}
      data-project-image
      aria-label={t("openPhoto", { title, number: index + 1, total })}
      className={`tw:group tw:relative tw:block tw:overflow-hidden tw:bg-[#ded9cf] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b] ${featured ? "tw:aspect-[4/3] tw:sm:aspect-[2/1] tw:lg:aspect-[5/2]" : "tw:aspect-[4/3]"}`}
    >
      <Image
        src={getImageUrl(source, featured ? 1800 : 1000)}
        alt={t("photoAlt", { title, number: index + 1 })}
        fill
        preload={featured}
        sizes={
          featured
            ? "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1295px) calc(100vw - 96px), 1200px"
            : "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 40px), (max-width: 1295px) calc(33.333vw - 43px), 390px"
        }
        className="tw:object-cover tw:transition-transform tw:duration-300 tw:ease-out tw:motion-safe:group-hover:scale-[1.025] tw:motion-safe:group-focus-visible:scale-[1.025] tw:motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="tw:absolute tw:end-3 tw:bottom-3 tw:flex tw:size-11 tw:items-center tw:justify-center tw:bg-[#11110f]/85 tw:text-[#faf8f4] tw:transition-colors tw:duration-200 tw:group-hover:bg-[#11110f] tw:group-focus-visible:bg-[#11110f] tw:motion-reduce:transition-none"
      >
        <FiMaximize2 className="tw:size-5" />
      </span>
    </a>
  );
}

export default function ProjectGallery({ images, title, labelledBy }: Props) {
  const t = useTranslations("projectPage");
  const headingId = useId();
  const galleryRef = useProjectLightbox(images, labelledBy);
  const [firstImage, ...remainingImages] = images;

  if (!firstImage) return null;

  return (
    <div ref={galleryRef}>
      <ProjectPhoto
        source={firstImage}
        title={title}
        index={0}
        total={images.length}
        featured
      />

      {remainingImages.length > 0 && (
        <section
          aria-labelledby={headingId}
          className="tw:mt-8 tw:sm:mt-10"
        >
          <div className="tw:mb-4 tw:flex tw:flex-wrap tw:items-baseline tw:justify-between tw:gap-2 tw:border-b tw:border-[#d4cfc5] tw:pb-3">
            <h2
              id={headingId}
              className="tw:m-0 tw:text-xl tw:leading-snug tw:font-medium tw:text-[#11110f] tw:sm:text-2xl"
            >
              {t("galleryTitle")}
            </h2>
            <p className="tw:m-0 tw:text-sm tw:tabular-nums tw:text-[#625c51]">
              {t("photoCount", { count: images.length })}
            </p>
          </div>
          <div className="tw:grid tw:grid-cols-1 tw:gap-3 tw:sm:grid-cols-2 tw:sm:gap-4 tw:lg:grid-cols-3">
            {remainingImages.map((source, index) => (
              <ProjectPhoto
                key={`${source}:${index}`}
                source={source}
                title={title}
                index={index + 1}
                total={images.length}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
