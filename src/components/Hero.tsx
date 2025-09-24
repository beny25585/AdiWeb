"use client";

import Link from "next/link";
import styles from "@/styles/Hero.module.css";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>{t("headline")}</h1>
        <p>{t("sub")}</p>
        <div className={styles.buttons}>
          <Link href={`/${locale}/projects`} className={styles.buttonPrimary}>
            {t("projectsBtn")}
          </Link>
          <Link href={`/${locale}/contact`} className={styles.buttonSecondary}>
            {t("contactBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
