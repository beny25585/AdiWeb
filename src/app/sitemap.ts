import { MetadataRoute } from "next";
import { projectsList } from "@/data/projects";

const baseUrl = "https://uzangroups.com";
const locales = ["he", "en", "th"];

// Define all pages on your site
const pages = [
  { path: "", priority: 1.0, changeFrequency: "monthly" as const }, // Homepage
  { path: "about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "projects", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "architecture", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "privacy", priority: 0.5, changeFrequency: "yearly" as const },
];

// Project pages - add your actual project slugs here

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for all main pages in all languages
  pages.forEach((page) => {
    locales.forEach((locale) => {
      const isDefaultLocale = locale === "en";
      const url = isDefaultLocale
        ? `${baseUrl}${page.path ? `/${page.path}` : ""}`
        : `${baseUrl}/${locale}${page.path ? `/${page.path}` : ""}`;

      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            he: `${baseUrl}/he${page.path ? `/${page.path}` : ""}`,
            en: `${baseUrl}${page.path ? `/${page.path}` : ""}`,
            th: `${baseUrl}/th${page.path ? `/${page.path}` : ""}`,
          },
        },
      });
    });
  });

  // Generate entries for individual project pages
  projectsList.forEach((project) => {
    locales.forEach((locale) => {
      const isDefaultLocale = locale === "en";
      const url = isDefaultLocale
        ? `${baseUrl}/projects/${project.slug}`
        : `${baseUrl}/${locale}/projects/${project.slug}`;

      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            he: `${baseUrl}/he/projects/${project.slug}`,
            en: `${baseUrl}/projects/${project.slug}`,
            th: `${baseUrl}/th/projects/${project.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
