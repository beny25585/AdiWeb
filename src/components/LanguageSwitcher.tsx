"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {locales.map((lng) => (
        <Link
          key={lng}
          href={pathname.replace(`/${locale}`, `/${lng}`)}
          style={{
            padding: "4px 8px",
            borderRadius: "6px",
            background: lng === locale ? "#0b3a82" : "#eee",
            color: lng === locale ? "#fff" : "#333",
            fontSize: "14px",
          }}
        >
          {lng.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
