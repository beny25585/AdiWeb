import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ProjectCard.module.css";
import type { Locale } from "@/lib/i18n";

type Project = {
  slug: string;
  titleHE: string;
  titleEN: string;
  titleTH: string;
  location: string;
  image: string;
};

export default function ProjectCard({ locale, project }: { locale: Locale; project: Project }) {
  const title =
    locale === "he" ? project.titleHE : locale === "th" ? project.titleTH : project.titleEN;

  return (
    <Link href={`/${locale}/projects/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={project.image} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>{project.location}</p>
      </div>
    </Link>
  );
}
