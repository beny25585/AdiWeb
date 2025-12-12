
export type Locale = "he" | "en" | "th";

export interface PathParams {
  locale: string;
}

export interface LocaleParams {
  locale: Locale;
}

export interface RootLayoutProps<T = unknown> {
  children: React.ReactNode;
  params: T;
}

export interface PageProps<T = unknown> {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface ProjectParams extends LocaleParams {
  slug: string;
}

export type ServicesParams = LocaleParams;
