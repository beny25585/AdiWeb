export const locales = ['he', 'en', 'th'] as const;
export type Locale = typeof locales[number];
export const defaultLocale = 'en';

export function dir(locale: string) {
  return locale === 'he' ? 'rtl' : 'ltr';
}
