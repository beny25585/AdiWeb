"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import styles from "@/styles/Header.module.css";
import { useEffect, useRef } from "react";

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const t = useTranslations("header");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

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
          {menuOpen ? "✖" : "☰"}
        </button>

        <nav
          ref={navRef}
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
        >
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
            <Link href="/he" className={locale === "he" ? styles.active : ""}>
              <img
                src="https://flagcdn.com/w40/il.png"
                alt="עברית"
                className={styles.flag}
              />
            </Link>
            <Link href="/en" className={locale === "en" ? styles.active : ""}>
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className={styles.flag}
              />
            </Link>
            <Link href="/th" className={locale === "th" ? styles.active : ""}>
              <img
                src="https://flagcdn.com/w40/th.png"
                alt="ไทย"
                className={styles.flag}
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
