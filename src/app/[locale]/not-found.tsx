"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import styles from "../../styles/not-found.module.css";

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations("notFound");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.description}>{t("description")}</p>

        <div className={styles.buttonGroup}>
          <Link href={`/${locale}`} className={styles.primaryButton}>
            {t("backHome")}
          </Link>
          <Link href={`/${locale}/contact`} className={styles.secondaryButton}>
            {t("contact")}
          </Link>
        </div>
      </div>

      <div className={styles.backgroundPattern}></div>
    </div>
  );
}
