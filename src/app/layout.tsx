import { Metadata } from "next";
import AccessibilityWidget from "../components/AccessibilityWidget";

const SUPPORTED_LOCALES = ["he", "en", "th"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";

const baseUrl = "https://uzangroups.com";
const companyPhone = "+972-64-274-8346";
const companyEmail = "info@uzangroups.com";

// Metadata per language
const metadataByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string;
  }
> = {
  he: {
    title: "A&S UZAN GROUP | הנדסה, אדריכלות ובנייה בתאילנד וישראל",
    description:
      "A&S UZAN GROUP - חברת הנדסה, אדריכלות ובנייה מובילה. מתמחים בעיצוב פנים, בניית וילות יוקרה, פרויקטים מסחריים ומגורים. ניסיון של מעל 10 שנים בתאילנד וישראל. צוות מקצועי, סטנדרטים בינלאומיים.",
    keywords:
      "אדריכלות, הנדסת בניין, בנייה, עיצוב פנים, קבלן בניה, פרויקטים, תאילנד, בנגקוק, ישראל, עדי אוזן, שירה אוזן, אוזן גרופ, אוזר גרופ, Uzan Group, UZAN GROUP, A&S UZAN, וילה, בית פרטי, משרדים, עיצוב מודרני, שיפוצים, גמרים, קבלן בנייה, חברת בנייה, אוזן, אוזר, עדי ושירה אוזן",
  },
  en: {
    title:
      "A&S UZAN GROUP | Engineering, Architecture & Construction in Thailand & Israel",
    description:
      "A&S UZAN GROUP - Leading engineering, architecture, and construction company. Specializing in interior design, luxury villa construction, commercial and residential projects. Over 10 years of experience in Thailand and Israel. Professional team, international standards.",
    keywords:
      "architecture, civil engineering, construction, interior design, general contractor, projects, Thailand, Bangkok, Israel, Adi Uzan, Shira Uzan, villa, house, office, modern design, renovation, finishing",
  },
  th: {
    title:
      "A&S UZAN GROUP | วิศวกรรม สถาปัตยกรรม และก่อสร้างในประเทศไทยและอิสราเอล",
    description:
      "A&S UZAN GROUP - บริษัทวิศวกรรม สถาปัตยกรรม และก่อสร้างชั้นนำ เชี่ยวชาญการออกแบบตกแต่งภายใน ก่อสร้างวิลล่าหรู โครงการพาณิชย์และที่อยู่อาศัย ประสบการณ์กว่า 10 ปีในประเทศไทยและอิสราเอล ทีมมืออาชีพ มาตรฐานสากล",
    keywords:
      "สถาปัตยกรรม, วิศวกรรมโยธา, ก่อสร้าง, ออกแบบตกแต่งภายใน, ผู้รับเหมา, โครงการ, ประเทศไทย, กรุงเทพ, อิสราเอล, วิลล่า, บ้าน, สำนักงาน, ออกแบบสมัยใหม่, ปรับปรุง, ตกแต่ง",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = SUPPORTED_LOCALES.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : DEFAULT_LOCALE;

  const meta = metadataByLocale[locale];
  const localeUrl =
    locale === DEFAULT_LOCALE ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "A&S UZAN GROUP" }],
    creator: "A&S UZAN GROUP",
    publisher: "A&S UZAN GROUP",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: localeUrl,
      languages: {
        he: `${baseUrl}/he`,
        en: `${baseUrl}/en`,
        th: `${baseUrl}/th`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "he" ? "he_IL" : locale === "th" ? "th_TH" : "en_US",
      url: localeUrl,
      title: meta.title,
      description: meta.description,
      siteName: "A&S UZAN GROUP",
      images: [
        {
          url: `${baseUrl}/Photos/uzanGroup.jpg`,
          width: 1200,
          height: 630,
          alt: "A&S UZAN GROUP - Engineering, Architecture & Construction",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/Photos/uzanGroup.jpg`],
      creator: "@uzangroup",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Replace with actual Google Search Console verification code
    },
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=no",
    },
  };
}

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

  // JSON-LD Structured Data for GeneralContractor
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "A&S UZAN GROUP CO., LTD.",
    alternateName: "UZAN GROUP",
    description: metadataByLocale[locale].description,
    url: baseUrl,
    logo: `${baseUrl}/Photos/uzanGroup.jpg`,
    image: `${baseUrl}/Photos/uzanGroup.jpg`,
    telephone: companyPhone,
    email: companyEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1219/2 Sukhumvit Rd, Khlong Tan Nuea",
      addressLocality: "Watthana",
      addressRegion: "Bangkok",
      postalCode: "10110",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.7367",
      longitude: "100.5832",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Thailand",
      },
      {
        "@type": "Country",
        name: "Israel",
      },
    ],
    sameAs: [
      "https://www.facebook.com/uzangroup",
      "https://www.instagram.com/uzangroup",
      "https://www.linkedin.com/company/uzangroup",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Adi Uzan",
        jobTitle: "CEO & Director",
      },
      {
        "@type": "Person",
        name: "Shira Uzan",
        jobTitle: "CEO & Chief Architect",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10-50",
    },
    priceRange: "$$$",
    openingHours: "Mo-Fr 08:00-18:00",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    currenciesAccepted: "THB, USD, ILS",
  };

  return (
    <html lang={locale} dir={dir} data-scroll-behavior="smooth">
      <head>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <link rel="icon" href="/Photos/uzanGroup.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/Photos/uzanGroup.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Language alternates */}
        <link rel="alternate" hrefLang="he" href={`${baseUrl}/he`} />
        <link rel="alternate" hrefLang="en" href={baseUrl} />
        <link rel="alternate" hrefLang="th" href={`${baseUrl}/th`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      </head>
      <body>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
