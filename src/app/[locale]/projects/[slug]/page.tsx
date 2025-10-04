import { projectImages } from "@/data/projectImages";
import styles from "@/styles/ProjectPage.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const t = useTranslations("projects");

  const images = projectImages[slug] || [];

  return (
    <section className={styles.project}>
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
