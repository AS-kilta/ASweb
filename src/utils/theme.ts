import { getCollection, getEntry } from 'astro:content';

export interface ThemeColors {
  [colorName: string]: string | undefined;
}

export interface ThemeConfig {
  colors?: ThemeColors | null;
  startDate?: string | Date | null;
  endDate?: string | Date | null;
  carousel?: string | boolean | null;
  logo?: string | string[] | { animations?: string[]; items?: string[] } | null;
  logos?: string[] | null;
}

export interface ResolvedTheme {
  themeId: string;
  isConflict: boolean;
  colors: Record<string, string>;
  carousel: string | boolean;
  logoAnimations: string[];
  cssVariables: string;
}

const DEFAULT_COLORS: Record<string, string> = {
  'as-violet': '#610396',
  'as-violet-1': '#610396',
  'as-violet-2': '#bf99d6',
  'natural-white': '#f9faf3',
  'natural-black': '#1b1b1b',
  'accent-violet-1': '#721ea2',
  'background-violet': '#661a76',
  'arduino-blue': '#04b0b8',
};

const rawSvgs = import.meta.glob<string>('/src/assets/**/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function resolveRawSvg(pathOrSvg: string): string | null {
  if (!pathOrSvg) return null;
  const trimmed = pathOrSvg.trim();
  if (trimmed.startsWith('<svg') || trimmed.startsWith('<?xml')) {
    return trimmed;
  }
  const normalized = trimmed
    .replace(/^@assets\//, '/src/assets/')
    .replace(/^@src\//, '/src/')
    .replace(/^\/?assets\//, '/src/assets/');

  if (rawSvgs[normalized]) {
    return rawSvgs[normalized];
  }

  const filename = trimmed.split('/').pop()?.toLowerCase();
  for (const [key, content] of Object.entries(rawSvgs)) {
    if (key === normalized || (filename && key.toLowerCase().endsWith('/' + filename))) {
      return content;
    }
  }

  return null;
}

export function parseThemeDate(dateVal: string | Date | null | undefined, isEnd = false): Date | null {
  if (!dateVal) return null;
  if (dateVal instanceof Date) return dateVal;
  if (typeof dateVal === 'string') {
    const trimmed = dateVal.trim();
    if (!trimmed) return null;
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return new Date(trimmed + (isEnd ? 'T23:59:59.999Z' : 'T00:00:00.000Z'));
    }
    const d = new Date(trimmed);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
}

export function isThemeActive(theme: ThemeConfig, now: Date): boolean {
  const start = parseThemeDate(theme.startDate, false);
  const end = parseThemeDate(theme.endDate, true);

  // If neither startDate nor endDate is specified, the theme is not time-scheduled
  if (!start && !end) return false;

  if (start && now.getTime() < start.getTime()) {
    return false;
  }
  if (end && now.getTime() > end.getTime()) {
    return false;
  }
  return true;
}

function extractLogos(themeData?: ThemeConfig | null): string[] {
  if (!themeData) return [];
  const rawLogos = themeData.logo ?? themeData.logos;
  if (typeof rawLogos === 'string') {
    return [rawLogos];
  }
  if (Array.isArray(rawLogos)) {
    return rawLogos.filter((item): item is string => typeof item === 'string');
  }
  if (rawLogos && typeof rawLogos === 'object') {
    const obj = rawLogos as Record<string, unknown>;
    if (Array.isArray(obj.animations)) {
      return obj.animations.filter((item): item is string => typeof item === 'string');
    }
    if (Array.isArray(obj.items)) {
      return obj.items.filter((item): item is string => typeof item === 'string');
    }
  }
  return [];
}

export async function resolveTheme(requestedTheme?: string, now: Date = new Date()): Promise<ResolvedTheme> {
  const defaultEntry = await getEntry('theme', 'default');
  const defaultData: ThemeConfig = (defaultEntry?.data as ThemeConfig) ?? {};

  let activeThemeData: ThemeConfig = defaultData;
  let activeThemeId = 'default';
  let isConflict = false;

  if (requestedTheme && typeof requestedTheme === 'string') {
    const requestedEntry = await getEntry('theme', requestedTheme);
    if (requestedEntry) {
      activeThemeData = (requestedEntry.data as ThemeConfig) ?? {};
      activeThemeId = requestedTheme;
    }
  } else {
    // Check all non-default themes for active scheduling
    const allThemes = await getCollection('theme');
    const activeScheduledThemes = allThemes.filter((entry) => {
      if (entry.id === 'default') return false;
      return isThemeActive((entry.data as ThemeConfig) ?? {}, now);
    });

    if (activeScheduledThemes.length === 1) {
      activeThemeData = (activeScheduledThemes[0].data as ThemeConfig) ?? {};
      activeThemeId = activeScheduledThemes[0].id;
    } else if (activeScheduledThemes.length > 1) {
      // Scheduling conflict! Per requirement:
      // "in case of scheduling conflicts the default theme should be used"
      isConflict = true;
      console.warn(
        `[Theme] Scheduling conflict: ${activeScheduledThemes.length} themes active (${activeScheduledThemes.map((t) => t.id).join(', ')}). Using default theme.`
      );
      activeThemeData = defaultData;
      activeThemeId = 'default';
    } else {
      activeThemeData = defaultData;
      activeThemeId = 'default';
    }
  }

  // 1. Merge Colors (override defaults with active theme)
  const mergedColors = { ...DEFAULT_COLORS };

  if (defaultData.colors) {
    for (const [key, val] of Object.entries(defaultData.colors)) {
      if (typeof val === 'string' && val.trim()) {
        mergedColors[key] = val.trim();
      }
    }
  }

  if (activeThemeData !== defaultData && activeThemeData.colors) {
    for (const [key, val] of Object.entries(activeThemeData.colors)) {
      if (typeof val === 'string' && val.trim()) {
        mergedColors[key] = val.trim();
      }
    }
  }

  // Alias as-violet and as-violet-1 if one is defined in active theme but not the other
  if (activeThemeData.colors?.['as-violet'] && !activeThemeData.colors?.['as-violet-1']) {
    mergedColors['as-violet-1'] = mergedColors['as-violet'];
  } else if (activeThemeData.colors?.['as-violet-1'] && !activeThemeData.colors?.['as-violet']) {
    mergedColors['as-violet'] = mergedColors['as-violet-1'];
  }

  // Generate CSS variables string
  const cssVariables = Object.entries(mergedColors)
    .map(([key, val]) => {
      const prop = key.startsWith('--') ? key : `--${key}`;
      return `${prop}: ${val};`;
    })
    .join(' ');

  // 2. Carousel resolution (override if defined)
  const carousel =
    activeThemeData.carousel !== undefined && activeThemeData.carousel !== null
      ? activeThemeData.carousel
      : defaultData.carousel !== undefined && defaultData.carousel !== null
        ? defaultData.carousel
        : 'default';

  // 3. Logo animations resolution (override if defined)
  let logoList = extractLogos(activeThemeData);
  if (logoList.length === 0 && activeThemeData !== defaultData) {
    logoList = extractLogos(defaultData);
  }

  const logoAnimations = logoList
    .map(resolveRawSvg)
    .filter((svg): svg is string => typeof svg === 'string' && svg.length > 0);

  return {
    themeId: activeThemeId,
    isConflict,
    colors: mergedColors,
    carousel,
    logoAnimations,
    cssVariables,
  };
}
