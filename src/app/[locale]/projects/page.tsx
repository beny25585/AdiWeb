import styles from "@/styles/ProjectPage.module.css";
import { projects } from "@/data/projects";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return (
    <section className={styles.section}>
      <h1 className={styles.slogan}>
       {t("slogan")}
      </h1>

      <div className={styles.gallery}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/${locale}/projects/${project.slug}`}
            className={styles.card}
          >
            <Image
              src={project.image}
              alt={t(`${project.slug}.title`)}
              width={600}
              height={400}
            />
            <div className={styles.caption}>{t(`${project.slug}.title`)}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
