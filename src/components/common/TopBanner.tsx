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

function isBannerItemActive(item: BannerItem, now: Date): boolean {
  if (item.startDate) {
    const start = new Date(item.startDate);
    if (!isNaN(start.getTime()) && now.getTime() < start.getTime()) {
      return false;
    }
  }

  if (item.endDate) {
    const end = new Date(item.endDate);
    if (!isNaN(end.getTime()) && now.getTime() > end.getTime()) {
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
  let target: Date;
  if (targetDate instanceof Date) {
    target = targetDate;
  } else if (typeof targetDate === 'string') {
    const sanitized = targetDate.includes(' ') && !targetDate.includes('T') ? targetDate.replace(' ', 'T') : targetDate;
    target = new Date(sanitized);
    if (isNaN(target.getTime())) {
      target = new Date(targetDate);
    }
  } else {
    target = new Date(targetDate);
  }

  if (isNaN(target.getTime())) return null;

  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return {
      formatted: isEn ? 'Ended' : 'Päättynyt',
      isEnded: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');

  const formatted = isEn
    ? `${days > 0 ? `${days}d ` : ''}${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
    : `${days > 0 ? `${days}pv ` : ''}${pad(hours)}t ${pad(minutes)}m ${pad(seconds)}s`;

  return { formatted, isEnded: false };
}

/* Star / Plus differentiation marker */
const StarMarker: React.FC = () => <span className={style.starMarker} dangerouslySetInnerHTML={{ __html: starSvg }} />;

const TopBanner: React.FC<TopBannerProps> = ({ enabled = true, items = [] }) => {
  const [now, setNow] = useState<Date>(() => new Date());

  // Detect language from document element set by Astro SSR layout
  const isEn = typeof document !== 'undefined' && document.documentElement.lang.startsWith('en');

  // Filter active items based on current time
  const activeItems = items.filter((item) => isBannerItemActive(item, now));
  const numItems = activeItems.length;

  const hasCountdown = activeItems.some((item) => Boolean(item.countdown));

  // Live timer tick for countdowns every second, throttled when tab is inactive
  useEffect(() => {
    if (!hasCountdown) return;

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
  }, [hasCountdown]);

  if (numItems === 0 || !enabled) {
    return null;
  }

  // Render a single banner item content (text, link, countdown)
  const renderItemContent = (item: BannerItem, isDuplicate = false) => {
    const text =
      typeof item.text === 'object' && item.text !== null
        ? item.text[isEn ? 'en' : 'fi'] ?? item.text.fi ?? ''
        : item.text ?? '';
    const linkUrl = typeof item.link === 'string' ? item.link : item.link?.url;
    const linkLabel =
      typeof item.link === 'object' && item.link?.text
        ? typeof item.link.text === 'object' && item.link.text !== null
          ? item.link.text[isEn ? 'en' : 'fi'] ?? item.link.text.fi
          : item.link.text
        : null;
    const countdownData = item.countdown ? formatCountdown(item.countdown, now, isEn) : null;

    return (
      <div className={style.bannerItemContent}>
        {/* Main Text */}
        {linkUrl && !linkLabel ? (
          <a
            href={linkUrl}
            className={style.itemLink}
            target={linkUrl.startsWith('http') ? '_blank' : undefined}
            rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
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
            target={linkUrl.startsWith('http') ? '_blank' : undefined}
            rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            tabIndex={isDuplicate ? -1 : undefined}
            aria-hidden={isDuplicate ? 'true' : undefined}
          >
            {linkLabel}
          </a>
        )}
      </div>
    );
  };

  // Ensure enough items in each group to smoothly span wide viewports
  const multiplier = numItems === 1 ? 4 : numItems === 2 ? 2 : 2;
  const repeatedItems: BannerItem[] = [];
  for (let i = 0; i < multiplier; i++) {
    repeatedItems.push(...activeItems);
  }

  return (
    <aside className={style.banner} aria-label={isEn ? 'Announcement banner' : 'Ilmoituspalkki'}>
      <div className={style.marqueeContainer}>
        <div className={style.marqueeTrack}>
          {/* Primary item group */}
          <div className={style.marqueeGroup}>
            {repeatedItems.map((item, idx) => (
              <React.Fragment key={`orig-${idx}`}>
                {renderItemContent(item, false)}
                <span className={style.itemSeparator} aria-hidden="true">
                  <StarMarker />
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Duplicate item group for infinite seamless continuous rolling */}
          <div className={style.marqueeGroup} aria-hidden="true">
            {repeatedItems.map((item, idx) => (
              <React.Fragment key={`dup-${idx}`}>
                {renderItemContent(item, true)}
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
