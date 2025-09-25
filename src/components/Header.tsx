"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { locales } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en"; 
  const t = useTranslations("header");
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={`/${locale}`} className={styles.logo}>
          Company
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className={styles.langs}>
            {locales.map((lng) => (
              <Link
                key={lng}
                href={`/${lng}`}
                className={lng === locale ? styles.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                {lng.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
