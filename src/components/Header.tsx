"use client";

import Link from "next/link";
import { locales } from "@/lib/i18n";
import styles from "@/styles/Header.module.css";
import { useLocale } from "next-intl";

const nav = (locale: string) => [
  { href: `/${locale}`, label: locale === "he" ? "בית" : locale === "en" ? "Home" : "หน้าแรก" },
  { href: `/${locale}/about`, label: locale === "he" ? "אודות" : locale === "en" ? "About" : "เกี่ยวกับ" },
  { href: `/${locale}/services`, label: locale === "he" ? "שירותים" : locale === "en" ? "Services" : "บริการ" },
  { href: `/${locale}/projects`, label: locale === "he" ? "פרויקטים" : locale === "en" ? "Projects" : "ผลงาน" },
  { href: `/${locale}/contact`, label: locale === "he" ? "צור קשר" : locale === "en" ? "Contact" : "ติดต่อ" },
];

export default function Header() {
  const locale = useLocale(); // 👈 לוקח את השפה מתוך NextIntlClientProvider

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={`/${locale}`} className={styles.logo}>
          {locale === "he" ? "שם החברה" : locale === "en" ? "Company" : "บริษัท"}
        </Link>
        <nav className={styles.nav}>
          {nav(locale).map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.langs}>
          {locales.map((lng) => (
            <Link key={lng} href={`/${lng}`} className={lng === locale ? styles.active : ""}>
              {lng.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
