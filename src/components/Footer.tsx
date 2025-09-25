"use client";

import styles from "@/styles/Footer.module.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <h4>{t("companyTitle")}</h4>
          <p>
            {t("address")} <br />
            {t("phone")}
          </p>
        </div>

        <div className={styles.col}>
          <h4>{t("linksTitle")}</h4>
          <ul>
            <li><Link href={`/${locale}/about`}>{t("about")}</Link></li>
            <li><Link href={`/${locale}/services`}>{t("services")}</Link></li>
            <li><Link href={`/${locale}/projects`}>{t("projects")}</Link></li>
            <li><Link href={`/${locale}/contact`}>{t("contact")}</Link></li>
            <li><Link href={`/${locale}/careers`}>{t("careers")}</Link></li>
            <li><Link href={`/${locale}/esg`}>{t("esg")}</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>{t("socialTitle")}</h4>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://youtube.com" target="_blank">YouTube</a>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        © 2025 {t("rights")}
      </div>
    </footer>
  );
}
