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
  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/Photos/uzanGroup.jpg" type="image/jpeg" />
        <title>UZAN GROUP</title>
        <meta
          name="description"
          content="A&S Uzan Group - Engineering, Architecture and Construction"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
