"use client";

import styles from "@/styles/Footer.module.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const th = useTranslations("header");
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <footer dir={dir} className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <Image
            src="/Photos/uzanGroup.jpg"
            alt="uzanGroup Logo"
            width={140}
            height={40}
          />
          <h4>{t("companyTitle")}</h4>
          <p>
            {t("address")} <br />
            {t("phone")}
          </p>
        </div>

        <div className={styles.col}>
          <h4>{t("linksTitle")}</h4>
          <ul>
            <li>
              <Link href={`/${locale}/about`}>{th("about")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/services`}>{th("services")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/projects`}>{th("projects")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`}>{th("contact")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/careers`}>{t("careers")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/esg`}>{t("esg")}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>{t("socialTitle")}</h4>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook /> Facebook
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <h4>{t("newsletterTitle")}</h4>
          <form className={styles.newsletter}>
            <input type="email" placeholder={t("newsletterPlaceholder")} />
            <button type="submit">{t("newsletterButton")}</button>
          </form>
        </div>
      </div>

      <div className={styles.copy}>© 2025 {t("rights")}</div>
    </footer>
  );
}
