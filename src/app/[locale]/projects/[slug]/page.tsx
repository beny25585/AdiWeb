import { projectImages } from "@/data/projectImages";
import styles from "@/styles/ProjectPage.module.css";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/i18n";

export default async function ProjectPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const { locale, slug } = params;
  const t = await getTranslations({ locale, namespace: "projects" }); // ✅

  const dir = locale === "he" ? "rtl" : "ltr";
  const images = projectImages[slug] || [];

  return (
    <section className={styles.project} dir={dir}>
      <h1 className={styles.title}>{t(`${slug}.title`)}</h1>
      <p className={styles.desc}>{t(`${slug}.description`)}</p>

      <div className={styles.gallery}>
        {images.map((src, i) => (
          <div
            key={i}
            className={styles.imageWrap}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <Image src={src} alt={`${slug} ${i}`} width={400} height={300} />
          </div>
        ))}
      </div>
    </section>
  );
}
