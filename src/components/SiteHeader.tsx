"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FiMenu, FiX } from "react-icons/fi";
import BrandMark from "./BrandMark";
import "@/styles/tailwind.css";

export type NavigationItem = { href: string; label: string };

const languages = [
  { locale: "he", flag: "il" },
  { locale: "en", flag: "us" },
  { locale: "th", flag: "th" },
] as const;

function subscribeToScroll(onScroll: () => void) {
  window.addEventListener("scroll", onScroll, { passive: true, capture: true });
  return () => window.removeEventListener("scroll", onScroll, true);
}

function getScrolledSnapshot() {
  return Math.max(
    window.scrollY,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  ) > 24;
}

function getServerSnapshot() {
  return false;
}

export default function SiteHeader({
  nav,
  currentPath,
  overHero,
}: {
  nav: NavigationItem[];
  currentPath: string;
  overHero: boolean;
}) {
  const locale = useLocale();
  const t = useTranslations("header");
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrolledSnapshot,
    getServerSnapshot,
  );
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    function handleOutside(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
    <header
      ref={headerRef}
      className={`tw:fixed tw:inset-x-0 tw:top-0 tw:z-40 tw:h-22 tw:border-0 tw:border-b tw:border-solid tw:border-white/15 tw:text-white tw:transition-colors tw:duration-200 tw:motion-reduce:transition-none tw:sm:h-28 ${
        !overHero || scrolled || menuOpen ? "tw:bg-black" : "tw:bg-black/70"
      }`}
    >
      <div className="tw:relative tw:mx-auto tw:flex tw:h-full tw:w-full tw:max-w-[1440px] tw:items-center tw:justify-between tw:gap-4 tw:px-5 tw:sm:px-8 tw:lg:px-12">
        <Link
          href={`/${locale}`}
          aria-label={t("brandLabel")}
          className="tw:flex tw:min-h-12 tw:shrink-0 tw:items-center tw:gap-2 tw:no-underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f]"
          onClick={() => setMenuOpen(false)}
        >
          <BrandMark variant="header" />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={t(menuOpen ? "closeMenu" : "openMenu")}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
          className="tw:flex tw:size-12 tw:shrink-0 tw:cursor-pointer tw:items-center tw:justify-center tw:border-0 tw:bg-transparent tw:p-0 tw:text-white tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:xl:hidden"
        >
          {menuOpen ? <FiX aria-hidden="true" className="tw:size-6" /> : <FiMenu aria-hidden="true" className="tw:size-6" />}
        </button>

        <nav
          id={menuId}
          aria-label={t("navigationLabel")}
          className={`tw:absolute tw:inset-x-0 tw:top-full tw:max-h-[calc(100dvh-5.5rem)] tw:flex-col tw:gap-2 tw:overflow-y-auto tw:bg-[#11110f] tw:px-5 tw:py-5 tw:sm:max-h-[calc(100dvh-7rem)] tw:sm:px-8 tw:xl:static tw:xl:flex tw:xl:max-h-none tw:xl:flex-row tw:xl:items-center tw:xl:gap-6 tw:xl:overflow-visible tw:xl:bg-transparent tw:xl:p-0 ${menuOpen ? "tw:flex" : "tw:hidden"}`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === currentPath ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`tw:inline-flex tw:min-h-12 tw:items-center tw:border-0 tw:border-b tw:border-solid tw:py-2 tw:text-lg tw:leading-7 tw:font-medium tw:whitespace-nowrap tw:no-underline tw:transition-colors tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none ${item.href === currentPath ? "tw:border-[#c6ad80] tw:text-[#e0c89f]" : "tw:border-transparent tw:text-white"}`}
            >
              {item.label}
            </Link>
          ))}

          <div
            role="group"
            aria-label={t("languageLabel")}
            className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:xl:ms-3 tw:xl:mt-0"
          >
            {languages.map((language) => (
              <Link
                key={language.locale}
                href={`/${language.locale}`}
                hrefLang={language.locale}
                lang={language.locale}
                aria-current={locale === language.locale ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`tw:inline-flex tw:min-h-11 tw:min-w-11 tw:items-center tw:justify-center tw:border-0 tw:border-b tw:border-solid tw:p-2 tw:no-underline tw:transition-colors tw:hover:bg-white/10 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none ${locale === language.locale ? "tw:border-[#c6ad80]" : "tw:border-transparent"}`}
              >
                <Image
                  src={`https://flagcdn.com/w40/${language.flag}.png`}
                  alt={t(`languages.${language.locale}`)}
                  width={40}
                  height={30}
                  className="tw:block tw:h-4 tw:w-6 tw:object-cover"
                />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
    {!overHero ? <div aria-hidden="true" className="tw:h-22 tw:shrink-0 tw:sm:h-28" /> : null}
    </>
  );
}
