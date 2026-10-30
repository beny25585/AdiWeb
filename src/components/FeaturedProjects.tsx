"use client";

import Link from "next/link";
import Image from "next/image";
import { useId } from "react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { portfolioProjects } from "@/data/projects";
import { useProjectGallery } from "@/hooks/useProjectGallery";
import { getImageUrl } from "@/utils/getImageUrl";
import styles from "@/styles/FeaturedProjects.module.css";

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
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <h2 id={headingId} className={styles.title}>{tH("title")}</h2>
          <p className={styles.description}>{tH("desc")}</p>
          <Link href={"/" + locale + "/projects"} className={styles.cta}>
            {tH("cta")}
            <FiArrowRight className={styles.directionalIcon} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.gallery}>
          <ul
            ref={trackRef}
            id={trackId}
            className={styles.track}
            aria-label={tH("galleryLabel")}
            onPointerDown={clearPending}
            onWheel={clearPending}
            onKeyDown={clearPending}
          >
            {portfolioProjects.map((project) => (
              <li key={project.slug} className={styles.item}>
                <Link
                  href={"/" + locale + "/projects/" + project.slug}
                  className={styles.projectLink}
                >
                  <div className={styles.imageWrap}>
                    <Image
                      src={getImageUrl(project.cover, 1000)}
                      alt=""
                      fill
                      sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1050px) 44vw, (max-width: 1590px) 20vw, 320px"
                      className={styles.image}
                      draggable={false}
                    />
                  </div>
                  <div className={styles.caption}>
                    <h3>{t(project.slug + ".title")}</h3>
                    <FiArrowRight className={styles.directionalIcon} aria-hidden="true" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.controls}>
            <p className={styles.counter} aria-live="polite" aria-atomic="true">
              <span className={styles.srOnly}>{position}</span>
              <span dir="ltr" aria-hidden="true">{visualPosition}</span>
            </p>
            <div className={styles.navigation}>
              <button
                type="button"
                className={styles.navButton}
                aria-label={tN("previous")}
                aria-controls={trackId}
                disabled={previousDisabled}
                onClick={previous}
              >
                <FiArrowLeft className={styles.directionalIcon} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={styles.navButton}
                aria-label={tN("next")}
                aria-controls={trackId}
                disabled={nextDisabled}
                onClick={next}
              >
                <FiArrowRight className={styles.directionalIcon} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
