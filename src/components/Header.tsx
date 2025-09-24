"use client";

import Link from "next/link";
import { locales } from "@/lib/i18n";
import styles from "@/styles/Header.module.css";
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");

  const nav = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={`/${locale}`} className={styles.logo}>
          Company
        </Link>
        <nav className={styles.nav}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.langs}>
          {locales.map((lng) => (
            <Link
              key={lng}
              href={`/${lng}`}
              className={lng === locale ? styles.active : ""}
            >
              {lng.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
