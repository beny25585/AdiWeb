"use client";

import styles from "@/styles/Footer.module.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaLine,
} from "react-icons/fa";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const th = useTranslations("header");
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <footer dir={dir} className={styles.footer}>
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
            <a
              href="https://wa.me/66960142849"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://line.me/ti/p/~YOUR_LINE_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLine /> Line
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>

        {/* === BRAND SECTION === */}
        <div className={styles.col}>
          <div className={styles.brandSection}>
            <Image
              src="/Photos/uzanGroup-removebg.png"
              alt="A&S Uzan Group Logo"
              width={180}
              height={110}
              className={styles.logoLeft}
            />
            <Image
              src="/Photos/logoUzan-removebg.png"
              alt="UZAN Logo"
              width={300}
              height={100}
              className={styles.logoRight}
            />
          </div>
        </div>
      </div>
      <div className={styles.copy}>© 2025 {t("rights")}</div>
    </footer>
  );
}
