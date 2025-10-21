import { getTranslations } from "next-intl/server";
import styles from "@/styles/Architecture.module.css";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";

export default async function ArchitecturePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "architecture" });
  const tp = await getTranslations({ locale, namespace: "projects" });

  const shiraProjects = [
    {
      slug: "FREDEROSCAR",
      image: "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 1.jpg",
    },
    { slug: "suite", image: "/Photos/Suite/suite1.jpg" },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.topContainer}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.intro}>{t("intro")}</p>

        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <h2>{t("design.title")}</h2>
            <p>{t("design.desc")}</p>
          </div>
          <div className={styles.serviceCard}>
            <h2>{t("construction.title")}</h2>
            <p>{t("construction.desc")}</p>
          </div>
        </div>
      </div>

      <h2 className={styles.portfolioTitle}>{t("portfolio")}</h2>
      <div className={styles.projectsGrid}>
        {shiraProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/${locale}/projects/${project.slug}`}
            className={styles.projectCard}
          >
            <Image
              src={project.image}
              alt={tp(`${project.slug}.title`)}
              width={600}
              height={400}
            />
            <div className={styles.projectInfo}>
              <h3>{tp(`${project.slug}.title`)}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.cta}>
        <Link href={`/${locale}/contact`} className={styles.ctaButton}>
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
