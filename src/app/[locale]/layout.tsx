import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "@/styles/globals.css";

const SUPPORTED_LOCALES = ["he", "en", "th"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = SUPPORTED_LOCALES.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : DEFAULT_LOCALE;

  const dir = locale === "he" ? "rtl" : "ltr";

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ScrollToTop />
      <div lang={locale} dir={dir}>
        <Header />
        <main data-locale={locale}>{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
