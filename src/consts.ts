export const SITE_METADATA = {
  title: {
    fi: 'Automaatio- ja systeemitekniikan kilta',
    en: 'Guild of Automation and Systems Technology',
  },
  description: {
    fi: 'AS-killan nettisivut',
    en: 'AS-guild website',
  },
  author: 'AS',
};

export interface ThemeColors {
  [colorName: string]: string | undefined;
}

export interface ThemeConfig {
  startDate?: string | Date | null;
  endDate?: string | Date | null;
  colors?: Record<string, string> | null;
  carousel?: string | boolean | null;
  logos?: string | string[] | null;
}

export interface ResolvedTheme {
  themeId: string;
  isConflict: boolean;
  colors: Record<string, string>;
  carousel: string | boolean;
  logos: string[];
  cssVariables: string;
}

export const DEFAULT_THEME_COLORS: Record<string, string> = {
  'as-violet-1': '#610396',
  'as-violet-2': '#bf99d6',
  'natural-white': '#f9faf3',
  'natural-black': '#1b1b1b',
  'accent-violet-1': '#721ea2',
  'background-violet': '#661a76',
  'arduino-blue': '#04b0b8',
};

export const DEFAULT_THEME: {
  colors: Record<string, string>;
  carousel: string;
  logos: string[];
} = {
  colors: DEFAULT_THEME_COLORS,
  carousel: 'default',
  logos: ['@assets/logos/as-pixel.svg', '@assets/logos/as-fourier.svg'],
};
