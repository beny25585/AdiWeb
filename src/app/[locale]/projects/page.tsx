import { projects } from "@/data/projects";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/lib/i18n";
import styles from "@/styles/ProjectPage.module.css";

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
        Global Architecture. Precision Construction.
      </h1>

      <div className={styles.gallery}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.card}>
            <Image
              src={project.image}
              alt={t(`${project.slug}.title`)}
              width={600}
              height={400}
            />
            <div className={styles.caption}>{t(`${project.slug}.title`)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
