import Image from "next/image";
import { insulationImages } from "@/data/insulationData";
import { useTranslations } from "next-intl";
import styles from "./insulation.module.css";
import { getImageUrl } from "@/utils/getImageUrl";
import CallToAction from "@/components/CallToActionCard";

export default function IsolationPage() {
  const t = useTranslations("isolation");
  const track = [...insulationImages, ...insulationImages];

  return (
    <section className={styles.page} aria-labelledby="isolation-title">
      {/* ── TEXT CARD ── */}
      <article className={`${styles.textSection} ${styles.card}`}>
        <h1 id="isolation-title" className={styles.title}>
          {t("title")}
        </h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <p className={styles.description}>{t("description")}</p>
      </article>

      {/* ── IMAGE CAROUSEL ── */}
      <div
        className={styles.carousel}
        role="region"
        aria-label={t("carouselLabel")}
      >
        <div className={styles.track}>
          {track.map((img, i) => (
            <figure key={i} className={styles.item}>
              <Image
                src={getImageUrl(img.src)}
                alt={img.alt}
                width={300}
                height={300}
                className={styles.image}
                loading="lazy"
                sizes="(max-width: 768px) 80vw, 300px"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            </figure>
          ))}
        </div>
        <CallToAction />
      </div>
    </section>
  );
}
