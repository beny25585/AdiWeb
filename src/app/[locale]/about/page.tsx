import styles from "@/styles/about.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <section className={styles.about}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.subtitle}>{t("subtitle")}</p>

      <div className={styles.grid}>
        <div className={styles.person}>
          <Image src="/images/adi.jpg" alt={t("adiAlt")} width={300} height={300} />
          <h3>{t("adiName")}</h3>
          <p>{t("adiRole")}</p>
        </div>
        <div className={styles.person}>
          <Image src="/images/shira.jpg" alt={t("shiraAlt")} width={300} height={300} />
          <h3>{t("shiraName")}</h3>
          <p>{t("shiraRole")}</p>
        </div>
      </div>

      <div className={styles.vision}>
        <h2>{t("visionTitle")}</h2>
        <p>{t("visionText")}</p>
      </div>
    </section>
  );
}
