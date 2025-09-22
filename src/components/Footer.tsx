"use client";

import styles from "@/styles/Footer.module.css";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h4 className={styles.title}>
            {locale === "he"
              ? "מטה החברה"
              : locale === "en"
              ? "Head Office"
              : "สำนักงานใหญ่"}
          </h4>
          <p className={styles.text}>
            {locale === "he"
              ? "בני גאון 12, נתניה"
              : locale === "en"
              ? "12 Bnei Gaon, Netanya"
              : "12 Bnei Gaon, Netanya"}
            <br />
            {locale === "he" ? "טל׳: 09-8633744" : "+972-9-8633744"}
          </p>
        </div>

        <div>
          <h4 className={styles.title}>
            {locale === "he"
              ? "קישורים"
              : locale === "en"
              ? "Links"
              : "ลิงก์"}
          </h4>
          <ul className={styles.links}>
            <li><a href="#">ESG</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div className={styles.copy}>
          © 2025{" "}
          {locale === "he"
            ? "כל הזכויות שמורות"
            : locale === "en"
            ? "All rights reserved"
            : "ลิขสิทธิ์ทั้งหมด"}
        </div>
      </div>
    </footer>
  );
}
