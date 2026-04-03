import type { ImageMetadata } from 'astro';

interface CustomPageProps {
  slug: string;
  lang: 'fi' | 'en';
  translation?: string;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare global {
  type DynamicImageData = ImageMetadata;

  interface PageProps {
    pageContext: CustomPageProps;
  }

  // Type for translated strings in data schemes
  interface TranslatedEntry {
    [key: string]: string;
  }

  // Type for object containing translations
  interface Translations {
    [key: string]: TranslatedEntry;
  }
}

export type { CustomPageProps };
