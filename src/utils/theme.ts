import { DEFAULT_THEME } from '@src/consts';

export interface ScheduledThemeWindow {
  id: string;
  startDate?: string | Date | null;
  endDate?: string | Date | null;
}

export interface ScheduledThemeColors {
  id: string;
  startDate: string | null;
  endDate: string | null;
  cssVariables: string;
}

export interface ScheduledThemeLogo {
  id: string;
  startDate: string | null;
  endDate: string | null;
  logoKey: string;
}

export interface ScheduledThemeCarousel {
  id: string;
  startDate: string | null;
  endDate: string | null;
  carouselKey: string;
}

const MAX_TIMEOUT_MS = 2147483647;

/**
 * Serializes a YAML date/string value while preserving date-only entries as YYYY-MM-DD
 * so client-side parsing matches local midnight semantics.
 */
export function serializeThemeDate(dateVal: string | Date | null | undefined): string | null {
  if (!dateVal) return null;
  if (dateVal instanceof Date) {
    if (Number.isNaN(dateVal.getTime())) return null;
    if (
      dateVal.getUTCHours() === 0 &&
      dateVal.getUTCMinutes() === 0 &&
      dateVal.getUTCSeconds() === 0 &&
      dateVal.getUTCMilliseconds() === 0
    ) {
      const year = dateVal.getUTCFullYear();
      const month = String(dateVal.getUTCMonth() + 1).padStart(2, '0');
      const day = String(dateVal.getUTCDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return dateVal.toISOString();
  }
  if (typeof dateVal === 'string') {
    const trimmed = dateVal.trim();
    return trimmed || null;
  }
  return null;
}

/**
 * Parses a theme start/end date string or Date object into a local Date.
 */
export function parseThemeDate(dateVal: string | Date | null | undefined): Date | null {
  if (!dateVal) return null;
  if (dateVal instanceof Date) {
    if (Number.isNaN(dateVal.getTime())) return null;
    if (
      dateVal.getUTCHours() === 0 &&
      dateVal.getUTCMinutes() === 0 &&
      dateVal.getUTCSeconds() === 0 &&
      dateVal.getUTCMilliseconds() === 0
    ) {
      return new Date(dateVal.getUTCFullYear(), dateVal.getUTCMonth(), dateVal.getUTCDate(), 0, 0, 0, 0);
    }
    return dateVal;
  }
  if (typeof dateVal === 'string') {
    const trimmed = dateVal.trim();
    if (!trimmed) return null;
    const dateOnlyMatch = /^(\d{4})[-/](\d{2})[-/](\d{2})$/.exec(trimmed);
    if (dateOnlyMatch) {
      const [, year, month, day] = dateOnlyMatch;
      return new Date(Number(year), Number(month) - 1, Number(day), 0, 0, 0, 0);
    }
    const normalized = trimmed.includes(' ') && !trimmed.includes('T') ? trimmed.replace(' ', 'T') : trimmed;
    const d = new Date(normalized);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  return null;
}

/**
 * Returns true if a scheduled theme is active at the given timestamp.
 */
export function isThemeActive(
  themeData: { startDate?: string | Date | null; endDate?: string | Date | null },
  now: Date
): boolean {
  const start = parseThemeDate(themeData.startDate);
  const end = parseThemeDate(themeData.endDate);

  if (!start && !end) return false;

  if (start && now.getTime() < start.getTime()) {
    return false;
  }
  if (end && now.getTime() > end.getTime()) {
    return false;
  }
  return true;
}

/**
 * Resolves the single active scheduled theme ID, or null if none or conflicting.
 */
export function resolveScheduledThemeId(themes: ReadonlyArray<ScheduledThemeWindow>, now: Date): string | null {
  const active = themes.filter((entry) => isThemeActive(entry, now));
  return active.length === 1 ? active[0].id : null;
}

/**
 * Merges theme color overrides with DEFAULT_THEME.colors.
 */
export function mergeThemeColors(colors?: Record<string, string> | null): Record<string, string> {
  const merged = { ...DEFAULT_THEME.colors };
  if (!colors) return merged;

  for (const [key, val] of Object.entries(colors)) {
    if (typeof val === 'string' && val.trim()) {
      merged[key] = val.trim();
    }
  }
  if (colors['as-violet'] && !colors['as-violet-1']) {
    merged['as-violet-1'] = colors['as-violet'];
  }
  return merged;
}

/**
 * Formats merged theme color tokens as CSS custom property declarations.
 */
export function formatThemeCssVariables(colors: Record<string, string>): string {
  return Object.entries(colors)
    .map(([key, val]) => {
      const prop = key.startsWith('--') ? key : `--${key}`;
      return `${prop}: ${val};`;
    })
    .join(' ');
}

/**
 * Returns the milliseconds until the next scheduled theme start or end boundary.
 */
export function getNextThemeTransitionDelay(themes: ReadonlyArray<ScheduledThemeWindow>, now: Date): number | null {
  const nowMs = now.getTime();
  let minDelay = Number.POSITIVE_INFINITY;

  for (const theme of themes) {
    const start = parseThemeDate(theme.startDate);
    const end = parseThemeDate(theme.endDate);

    if (start && start.getTime() > nowMs) {
      minDelay = Math.min(minDelay, start.getTime() - nowMs);
    }
    if (end && end.getTime() + 1 > nowMs) {
      minDelay = Math.min(minDelay, end.getTime() + 1 - nowMs);
    }
  }

  return Number.isFinite(minDelay) && minDelay > 0 ? minDelay : null;
}

/**
 * Evaluates scheduled themes immediately and re-evaluates on upcoming boundaries or tab focus.
 */
export function observeThemeSchedule(
  themes: ReadonlyArray<ScheduledThemeWindow>,
  onUpdate: (activeThemeId: string | null) => void
): () => void {
  const update = () => {
    onUpdate(resolveScheduledThemeId(themes, new Date()));
  };

  let timer: ReturnType<typeof setTimeout> | null = null;
  const scheduleNext = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    const delay = getNextThemeTransitionDelay(themes, new Date());
    if (delay !== null && delay <= MAX_TIMEOUT_MS) {
      timer = setTimeout(() => {
        update();
        scheduleNext();
      }, delay);
    }
  };

  const handleVisibility = () => {
    if (!document.hidden) {
      update();
      scheduleNext();
    }
  };

  update();
  scheduleNext();
  document.addEventListener('visibilitychange', handleVisibility);

  return () => {
    if (timer) clearTimeout(timer);
    document.removeEventListener('visibilitychange', handleVisibility);
  };
}
