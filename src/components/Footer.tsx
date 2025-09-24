"use client";

import styles from "@/styles/Footer.module.css";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h4 className={styles.title}>{t("office")}</h4>
          <p className={styles.text}>
            {t("address")}
            <br />
            {t("phone")}
          </p>
        </div>

        <div>
          <h4 className={styles.title}>{t("links")}</h4>
          <ul className={styles.links}>
            <li><a href="#">ESG</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div className={styles.copy}>
          © 2025 {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
