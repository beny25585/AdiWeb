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
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const th = useTranslations("header");
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <footer dir={dir} className={styles.footer}>
      <div className={styles.inner}>
        {/* === COMPANY INFO === */}
        <div className={styles.col}>
          <h4>{t("companyTitle")}</h4>
          <div className={styles.contactInfo}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                t("address")
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <FaMapMarkerAlt className={styles.icon} />
              <span>{t("address")}</span>
            </a>

            <a
              href={`tel:${t("phone").replace(/[\s-]/g, "")}`}
              className={styles.contactItem}
            >
              <FaPhone className={styles.icon} />
              <span>{t("phone")}</span>
            </a>

            <a
              href={`https://wa.me/${t("WhatsApp").replace(/[\s+-]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <FaWhatsapp className={styles.icon} />
              <span>{t("WhatsApp")}</span>
            </a>

            <a
              href="mailto:info@asuzangroup.com"
              className={styles.contactItem}
            >
              <FaEnvelope className={styles.icon} />
              <span>info@uzangroups.com</span>
            </a>
          </div>
        </div>

        {/* === QUICK LINKS === */}
        <div className={styles.col}>
          <h4>{t("linksTitle")}</h4>
          <ul>
            <li>
              <Link href={`/${locale}`}>{th("home")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/about`}>{th("about")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/architecture`}>{th("architecture")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/projects`}>{th("projects")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`}>{th("contact")}</Link>
            </li>
          </ul>
        </div>

        {/* === SOCIAL MEDIA === */}
        <div className={styles.col}>
          <h4>{t("socialTitle")}</h4>
          <div className={styles.socials}>
            <a
              href={`https://wa.me/${t("WhatsApp").replace(/[\s+-]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://line.me/ti/p/F6ExtLjmb_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLine /> Line
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61584594541314"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>

        {/* === BRAND / LOGOS === */}
        <div className={styles.col}>
          <div className={styles.brandSection}>
            <Image
              src="/Photos/A&S-removebg.png"
              alt="A&S Uzan Group Logo"
              width={250}
              height={160}
              className={styles.logoLeft}
              priority
            />
            <div className={styles.rightWrapper}>
              <Image
                src="/Photos/UZAN-removebg.png"
                alt="UZAN Logo"
                width={400}
                height={130}
                className={styles.logoRight}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div className={styles.copy}>{t("rights")}</div>
    </footer>
  );
}
