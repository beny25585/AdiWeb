"use client";
import { insulationImages } from "../data/insulationData";
import Image from "next/image";
import styles from "@/styles/insulation.module.css";
import { useTranslations } from "next-intl";

export default function IsolationComponent() {
  const t = useTranslations("isolation");

  // Duplicate images for seamless infinite scroll
  const infiniteImages = [
    ...insulationImages,
    ...insulationImages,
    ...insulationImages,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>

        <div className={styles.description}>{t("description")}</div>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          {infiniteImages.map((img, index) => (
            <div key={index} className={styles.gridItem}>
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className={styles.gridImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
