import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const SUPPORTED_LOCALES = ["he", "en", "th"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = SUPPORTED_LOCALES.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : DEFAULT_LOCALE;

  const dir = locale === "he" ? "rtl" : "ltr";

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main data-locale={locale}>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
