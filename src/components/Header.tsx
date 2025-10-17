"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import styles from "@/styles/Header.module.css";
import { useEffect, useRef } from "react";

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = useTranslations("header");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest(`.${styles.hamburger}`)
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
    { href: `/${locale}/architecture`, label: t("architecture") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={`/${locale}`} className={styles.logo}>
          <div className={styles.logosWrap}>
            <Image
              src="/Photos/uzanGroup-removebg.png"
              alt="uzanGroup Logo"
              width={100}
              height={100}
              className={styles.left}
            />
            <Image
              src="/Photos/logoUzan-removebg.png"
              alt="UZAN Logo"
              width={240}
              height={150}
              className={styles.right}
            />
          </div>
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
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
              <Image
                src="https://flagcdn.com/w40/il.png"
                alt="עברית"
                className={styles.flag}
                width={140}
                height={100}
              />
            </Link>
            <Link href="/en" className={locale === "en" ? styles.active : ""}>
              <Image
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className={styles.flag}
                width={140}
                height={100}
              />
            </Link>
            <Link href="/th" className={locale === "th" ? styles.active : ""}>
              <Image
                src="https://flagcdn.com/w40/th.png"
                alt="ไทย"
                className={styles.flag}
                width={140}
                height={100}
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
