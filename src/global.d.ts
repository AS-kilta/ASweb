interface CustomPageProps {
  slug: string;
  lang: 'fi' | 'en';
  translation?: string;
}

declare global {
  // Type declaration for SCSS modules

  declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
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
