import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Locale } from "@/types/routing";
import styles from "@/styles/page.module.css";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale: Locale =
    locale === "he" || locale === "en" || locale === "th" ? (locale as Locale) : "en";

  const featured = projects.slice(0, 3);

  return (
    <main>
      <Hero />

      <section className={styles.projectsSection} dir={safeLocale === "he" ? "rtl" : "ltr"}>
        <h2 className={styles.projectsTitle}>
          {safeLocale === "he"
            ? "פרויקטים נבחרים"
            : safeLocale === "th"
            ? "ผลงานเด่น"
            : "Featured Projects"}
        </h2>
        <div className={styles.projectsGrid}>
          {featured.map((p) => (
            <ProjectCard key={p.slug} locale={safeLocale} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
