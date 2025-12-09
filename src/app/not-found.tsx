"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/not-found.module.css";

export default function NotFound() {
  const t = useTranslations("notFound");
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isRTL = locale === "he";

  return (
    <div className={styles.container} dir={isRTL ? "rtl" : "ltr"}>
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

        <div className={styles.quickLinks}>
          <h3>{t("quickLinks")}</h3>
          <ul>
            <li>
              <Link href={`/${locale}/projects`}>{t("projects")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/architecture`}>{t("services")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/about`}>{t("about")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/finishing`}>{t("finishing")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.backgroundPattern}></div>
    </div>
  );
}
