import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ProjectCard from "@/components/ProjectCard";
import { architectureProjects } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { getImageUrl } from "@/utils/getImageUrl";
import ProjectMediaLabel from "@/components/ProjectMediaLabel";
import styles from "./Architecture.module.css";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ArchitecturePage({ params }: Props) {
  const { locale } = await params;
  const [t, tMedia] = await Promise.all([
    getTranslations({ locale, namespace: "architecture" }),
    getTranslations({ locale, namespace: "projects.media" }),
  ]);

  return (
    <main className={styles.container}>
      <header className={styles.opening}>
        <div className={styles.introText}>
          <h1 className={styles.title}>{t("title")}</h1>
          <p className={styles.intro}>{t("intro")}</p>
        </div>
        <figure className="tw:m-0">
          <div className={styles.openingImage}>
          <Image
            src={getImageUrl("v1782287812/5_xcm1po.jpg")}
            alt={t("imageAlt")}
            fill
            className={styles.photo}
            sizes="(max-width: 1264px) 94vw, 1200px"
            priority
          />
          </div>
          <figcaption>
            <ProjectMediaLabel mediaType="visualization" label={tMedia("visualization")} />
          </figcaption>
        </figure>
      </header>

      <section className={styles.portfolio} aria-labelledby="architecture-projects-title">
        <h2 id="architecture-projects-title" className={styles.sectionTitle}>
          {t("portfolio")}
        </h2>
        <div className={styles.projectsGrid}>
          {architectureProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              imageSizes="(max-width: 700px) 94vw, (max-width: 1264px) 46vw, 588px"
              imageWidth={1600}
            />
          ))}
        </div>
      </section>

      <section className={styles.profile} aria-labelledby="architecture-profile-title">
        <Image
          src={getImageUrl("/Photos/shiraPhoto.jpg")}
          alt={t("shiraAlt")}
          width={320}
          height={320}
          className={styles.portrait}
          sizes="(max-width: 700px) 176px, 208px"
        />
        <div className={styles.profileContent}>
          <h2 id="architecture-profile-title" className={styles.sectionTitle}>
            {t("profileTitle")}
          </h2>
          <p className={styles.profileText}>{t("shiraBio")}</p>
        </div>
      </section>

      <div className={styles.services}>
        <article className={styles.service}>
          <h2>{t("design.title")}</h2>
          <p>{t("design.desc")}</p>
        </article>
        <article className={styles.service}>
          <h2>{t("construction.title")}</h2>
          <p>{t("construction.desc")}</p>
        </article>
      </div>

      <div className={styles.cta}>
        <Link href={`/${locale}/contact`} className={styles.ctaButton}>
          {t("cta")}
        </Link>
      </div>
    </main>
  );
}
