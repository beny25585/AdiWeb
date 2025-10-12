import { projectImages } from "@/data/projectImages";
import styles from "@/styles/ProjectCard.module.css";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/i18n";

export default async function ProjectPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const { locale, slug } = params;
  const t = await getTranslations({ locale, namespace: "projects" });

  const dir = locale === "he" ? "rtl" : "ltr";
  const images = projectImages[slug] || [];

  return (
    <section className={styles.project} dir={dir}>
      <header className={styles.header}>
        <div className={styles.textContent}>
          <h1 className={styles.projectTitle}>{t(`${slug}.title`)}</h1>
          <p className={styles.projectSubtitle}>{t(`${slug}.description`)}</p>
        </div>
      </header>
      <div className={styles.galleryVertical}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageBlock}>
            <Image
              src={src}
              alt={`${slug} ${i}`}
              width={1600}
              height={1000}
              className={styles.imageFull}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
