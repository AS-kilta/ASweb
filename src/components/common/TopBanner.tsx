import React, { useState, useEffect } from 'react';
import starSvg from '@src/assets/icons/star.svg?raw';
import style from './TopBanner.module.scss';

export interface BannerLink {
  url: string;
  text?: string | Record<string, string>;
}

export interface BannerItem {
  text: string | Record<string, string>;
  link?: string | BannerLink;
  startDate?: string | Date;
  endDate?: string | Date;
  countdown?: string | Date;
}

export interface BannerConfig {
  enabled?: boolean;
  items?: BannerItem[];
}

export type TopBannerProps = BannerConfig;

function parseDate(dateVal: string | Date): Date {
  if (dateVal instanceof Date) {
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
  if (typeof dateVal !== 'string') return new Date(NaN);
  const trimmed = dateVal.trim();
  if (!trimmed) return new Date(NaN);

  // If there's only a date without time (e.g. YYYY-MM-DD), interpret as 00:00:00 of localtime
  const dateOnlyMatch = /^(\d{4})[-/](\d{2})[-/](\d{2})$/.exec(trimmed);
  if (dateOnlyMatch) {
    const [, year, month, day] = dateOnlyMatch;
    return new Date(Number(year), Number(month) - 1, Number(day), 0, 0, 0, 0);
  }

  const sanitized = trimmed.includes(' ') && !trimmed.includes('T') ? trimmed.replace(' ', 'T') : trimmed;
  const parsed = new Date(sanitized);
  return Number.isNaN(parsed.getTime()) ? new Date(trimmed) : parsed;
}

function isBannerItemActive(item: BannerItem, now: Date): boolean {
  if (item.startDate) {
    const start = parseDate(item.startDate);
    if (!Number.isNaN(start.getTime()) && now.getTime() < start.getTime()) {
      return false;
    }
  }

  if (item.endDate) {
    const end = parseDate(item.endDate);
    if (!Number.isNaN(end.getTime()) && now.getTime() > end.getTime()) {
      return false;
    }
  }

  return true;
}

function formatCountdown(
  targetDate: string | Date,
  now: Date,
  isEn: boolean
): { formatted: string; isEnded: boolean } | null {
  const target = parseDate(targetDate);
  if (Number.isNaN(target.getTime())) return null;

  const diff = target.getTime() - now.getTime();
  const isNegative = diff < 0;
  const absDiff = Math.abs(diff);

  const totalSeconds = Math.floor(absDiff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');

  const sign = isNegative ? '-' : '';
  const dayPrefix = days > 0 ? (isEn ? `${days}d ` : `${days}pv `) : '';
  const timeUnit = isEn ? 'h' : 't';
  const formatted = `${sign}${dayPrefix}${pad(hours)}${timeUnit} ${pad(minutes)}m ${pad(seconds)}s`;

  return { formatted, isEnded: isNegative };
}

function getLocalizedText(text: string | Record<string, string> | undefined, isEn: boolean): string {
  if (!text) return '';
  if (typeof text === 'string') return text;
  return text[isEn ? 'en' : 'fi'] ?? text.fi ?? '';
}

/* Star differentiation marker */
const StarMarker: React.FC = () => <span className={style.starMarker} dangerouslySetInnerHTML={{ __html: starSvg }} />;

interface BannerItemContentProps {
  item: BannerItem;
  now: Date;
  isEn: boolean;
  isDuplicate?: boolean;
}

const BannerItemContent: React.FC<BannerItemContentProps> = ({ item, now, isEn, isDuplicate = false }) => {
  const text = getLocalizedText(item.text, isEn);
  const linkUrl = typeof item.link === 'string' ? item.link : item.link?.url;
  const linkLabel = typeof item.link === 'object' && item.link?.text ? getLocalizedText(item.link.text, isEn) : null;
  const countdownData = item.countdown ? formatCountdown(item.countdown, now, isEn) : null;
  const isExternal = Boolean(linkUrl?.startsWith('http'));

  return (
    <div className={style.bannerItemContent}>
      {/* Main Text */}
      {linkUrl && !linkLabel ? (
        <a
          href={linkUrl}
          className={style.itemLink}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          tabIndex={isDuplicate ? -1 : undefined}
          aria-hidden={isDuplicate ? 'true' : undefined}
        >
          <span className={style.itemText}>{text}</span>
        </a>
      ) : (
        <span className={style.itemText}>{text}</span>
      )}

      {/* Optional Countdown */}
      {countdownData && (
        <span
          className={`${style.countdownBadge} ${countdownData.isEnded ? style.countdownEnded : ''}`}
          aria-live="polite"
          suppressHydrationWarning
        >
          {countdownData.formatted}
        </span>
      )}

      {/* Optional Action Link */}
      {linkUrl && linkLabel && (
        <a
          href={linkUrl}
          className={style.itemLink}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          tabIndex={isDuplicate ? -1 : undefined}
          aria-hidden={isDuplicate ? 'true' : undefined}
        >
          {linkLabel}
        </a>
      )}
    </div>
  );
};

interface PreparedBannerItem {
  item: BannerItem;
  key: string;
}

const TopBanner: React.FC<TopBannerProps> = ({ enabled = true, items = [] }) => {
  const [now, setNow] = useState<Date>(() => new Date());

  const isEn = typeof document !== 'undefined' && document.documentElement.lang.startsWith('en');

  // Filter active items based on current time
  const activeItems = items.filter((item) => isBannerItemActive(item, now));
  const numItems = activeItems.length;

  const hasExpiringItems = items.some((item) => Boolean(item.countdown || item.endDate || item.startDate));

  // Live timer tick for countdowns and auto-disappearing every second, throttled when tab is inactive
  useEffect(() => {
    if (!hasExpiringItems) return;

    let timer: NodeJS.Timeout | null = null;
    const startTimer = () => {
      if (!timer && !document.hidden) {
        timer = setInterval(() => setNow(new Date()), 1000);
      }
    };
    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        setNow(new Date());
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [hasExpiringItems]);

  if (numItems === 0 || !enabled) {
    return null;
  }

  // Ensure enough items in each group to smoothly span wide viewports
  const multiplier = numItems === 1 ? 4 : 2;
  const repeatedItems: PreparedBannerItem[] = [];
  for (let cycle = 0; cycle < multiplier; cycle++) {
    for (let i = 0; i < activeItems.length; i++) {
      const it = activeItems[i];
      const textKey = typeof it.text === 'string' ? it.text : it.text.fi ?? it.text.en ?? '';
      repeatedItems.push({
        item: it,
        key: `c${cycle}-i${i}-${textKey}`,
      });
    }
  }

  return (
    <aside className={style.banner} aria-label={isEn ? 'Announcement banner' : 'Ilmoituspalkki'}>
      <div className={style.marqueeContainer}>
        <div className={style.marqueeTrack}>
          {/* Primary item group */}
          <div className={style.marqueeGroup}>
            {repeatedItems.map(({ item, key }) => (
              <React.Fragment key={`orig-${key}`}>
                <BannerItemContent item={item} now={now} isEn={isEn} isDuplicate={false} />
                <span className={style.itemSeparator} aria-hidden="true">
                  <StarMarker />
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Duplicate item group for infinite seamless continuous rolling */}
          <div className={style.marqueeGroup} aria-hidden="true">
            {repeatedItems.map(({ item, key }) => (
              <React.Fragment key={`dup-${key}`}>
                <BannerItemContent item={item} now={now} isEn={isEn} isDuplicate={true} />
                <span className={style.itemSeparator} aria-hidden="true">
                  <StarMarker />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TopBanner;
