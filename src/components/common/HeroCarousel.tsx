import React, { useState, useEffect, useRef, useCallback } from 'react';
import style from './HeroCarousel.module.scss';
import arrowLeftSvg from '@src/assets/icons/arrow-left.svg?raw';
import arrowRightSvg from '@src/assets/icons/arrow-right.svg?raw';
import pauseSvg from '@src/assets/icons/pause.svg?raw';
import playSvg from '@src/assets/icons/play.svg?raw';

export interface CarouselSlide {
  src?: string;
  svg?: string;
  alt?: string;
  title?: string | Record<string, string>;
  lead?: string | Record<string, string>;
  overlay?: boolean;
}

export interface CarouselConfig {
  items: CarouselSlide[];
  autoplay?: boolean;
  interval?: number;
}

export type HeroCarouselProps = Partial<CarouselConfig>;

// Module-level caches to prevent duplicate requests across renders and navigations
const svgCache = new Map<string, string>();
const pendingFetches = new Map<string, Promise<string | null>>();

const isSvgSource = (src?: string): boolean =>
  Boolean(src && (src.endsWith('.svg') || src.includes('.svg?') || src.includes('format=svg')));

const isSlideAnimated = (slide?: CarouselSlide): boolean =>
  Boolean(slide?.svg || isSvgSource(slide?.src) || slide?.src?.includes('/animations/'));

function getLocalizedSlideText(text: string | Record<string, string> | undefined, isEn: boolean): string | undefined {
  if (!text) return undefined;
  if (typeof text === 'string') return text;
  return text[isEn ? 'en' : 'fi'] ?? text.fi;
}

interface SlideMediaProps {
  slide: CarouselSlide;
  inlinedSvg: string | null;
  isSvg: boolean;
}

const SlideMedia: React.FC<SlideMediaProps> = ({ slide, inlinedSvg, isSvg }) => {
  const slideSrc = slide.src;
  const hasOverlay = Boolean(slide.overlay);

  if (isSvg && inlinedSvg) {
    return (
      <>
        <div className={style.svgWrapper} dangerouslySetInnerHTML={{ __html: inlinedSvg }} />
        {hasOverlay && <div className={style.slideOverlay} aria-hidden="true" />}
      </>
    );
  }

  if (isSvg && slideSrc) {
    return (
      <>
        <div className={style.svgWrapper}>
          <img src={slideSrc} alt={slide.alt ?? ''} className={style.slideMedia} />
        </div>
        {hasOverlay && <div className={style.slideOverlay} aria-hidden="true" />}
      </>
    );
  }

  if (slideSrc) {
    return (
      <div
        className={`${style.imageSlide} ${hasOverlay ? style.hasOverlay : ''}`}
        style={{ backgroundImage: `url(${slideSrc})` }}
        role="img"
        aria-label={slide.alt ?? ''}
      />
    );
  }

  return null;
};

interface PreparedSlide {
  slide: CarouselSlide;
  key: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ items = [], autoplay = true, interval = 6000 }) => {
  const numSlides = items.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoplay));
  const [isHovered, setIsHovered] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

  // Detect language from document element set by Astro SSR layout
  const isEn = typeof document !== 'undefined' && document.documentElement.lang.startsWith('en');

  // Synchronously initialize SVGs already available in cache
  const [svgMap, setSvgMap] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    items.forEach((item) => {
      if (item.src && svgCache.has(item.src)) {
        initial[item.src] = svgCache.get(item.src)!;
      }
    });
    return initial;
  });

  const carouselRef = useRef<HTMLElement>(null);
  const touchCoordsRef = useRef<{ x: number; y: number } | null>(null);

  // Respect system prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsPlaying(false);
    };
    mediaQuery.addEventListener?.('change', handleChange);
    return () => mediaQuery.removeEventListener?.('change', handleChange);
  }, []);

  // Pause when browser tab is inactive to save battery/CPU
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Fetch and inline SVG files once to enable DOM-level CSS and SMIL animation control
  useEffect(() => {
    let isMounted = true;

    items.forEach((item) => {
      if (item.svg || !item.src || !isSvgSource(item.src)) return;

      const src = item.src;
      if (svgCache.has(src)) {
        const cached = svgCache.get(src)!;
        setSvgMap((prev) => (prev[src] === cached ? prev : { ...prev, [src]: cached }));
        return;
      }

      if (!pendingFetches.has(src)) {
        pendingFetches.set(
          src,
          fetch(src)
            .then((res) => (res.ok ? res.text() : null))
            .catch(() => null)
        );
      }

      void pendingFetches
        .get(src)!
        .then((svgText) => {
          if (!svgText) return;
          svgCache.set(src, svgText);
          if (isMounted) {
            setSvgMap((prev) => ({ ...prev, [src]: svgText }));
          }
        })
        .catch(() => {
          /* ignore fetch rejection */
        });
    });

    return () => {
      isMounted = false;
    };
  }, [items]);

  // SMIL pause/unpause: pause animations for inactive slides or when playback is paused
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const activeSlideEl = container.querySelector(`.${style.activeSlide}`);
    const svgs = container.querySelectorAll('svg');

    svgs.forEach((svg) => {
      if (svg.closest(`.${style.controlsLayer}`)) return;
      try {
        if (!isPlaying || !activeSlideEl?.contains(svg)) {
          svg.pauseAnimations();
        } else {
          svg.unpauseAnimations();
        }
      } catch {
        // SVG does not support SMIL or browser doesn't implement it
      }
    });
  }, [isPlaying, currentIndex, svgMap]);

  // Slide navigation
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (numSlides > 0 ? (prev + 1) % numSlides : 0));
  }, [numSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (numSlides > 0 ? (prev - 1 + numSlides) % numSlides : 0));
  }, [numSlides]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || !autoplay || numSlides <= 1 || isHovered || !isDocumentVisible) return;

    const timer = setInterval(
      () => {
        nextSlide();
      },
      Math.max(interval, 2000)
    );

    return () => clearInterval(timer);
  }, [isPlaying, autoplay, numSlides, interval, nextSlide, isHovered, isDocumentVisible, currentIndex]);

  // Keyboard navigation when user is focused inside carousel
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!container.contains(document.activeElement)) return;
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'Home') {
        setCurrentIndex(0);
      } else if (e.key === 'End') {
        setCurrentIndex(numSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, numSlides]);

  // Touch swipe support (directionally aware to avoid intercepting vertical page scrolling)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchCoordsRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchCoordsRef.current) return;
    const diffX = touchCoordsRef.current.x - e.changedTouches[0].clientX;
    const diffY = touchCoordsRef.current.y - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchCoordsRef.current = null;
  };

  const currentSlide = items[currentIndex];
  const activeTitle = getLocalizedSlideText(currentSlide?.title, isEn);
  const activeLead = getLocalizedSlideText(currentSlide?.lead, isEn);

  const showControls = numSlides > 1;
  const currentSlideHasAnimation = isSlideAnimated(currentSlide);
  const showPauseButton = (Boolean(autoplay) && showControls) || currentSlideHasAnimation;

  const pauseLabel = isEn ? 'Pause' : 'Pysäytä toisto';
  const playLabel = isEn ? 'Resume' : 'Jatka toistoa';

  const preparedSlides: PreparedSlide[] = items.map((slide, idx) => {
    const titleKey = typeof slide.title === 'string' ? slide.title : slide.title?.fi ?? '';
    const key = slide.src ? `slide-${slide.src}` : `slide-${titleKey}-${idx}`;
    return { slide, key };
  });

  return (
    <section
      ref={carouselRef}
      className={`${style.heroCarousel} ${!isPlaying ? style.isPaused : ''}`}
      aria-roledescription="carousel"
      aria-label={isEn ? 'Image and animation carousel' : 'Kuva- ja animaatiokaruselli'}
      aria-live={isPlaying ? 'off' : 'polite'}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className={style.slidesContainer}>
        {preparedSlides.map(({ slide, key: sKey }, index) => {
          const isActive = index === currentIndex;
          const slideSrc = slide.src;
          const isSvg = Boolean(slide.svg) || isSvgSource(slideSrc);
          const inlinedSvg = slide.svg ?? (slideSrc ? svgMap[slideSrc] : null);

          return (
            <div
              key={sKey}
              className={`${style.slide} ${isActive ? style.activeSlide : ''}`}
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${numSlides}`}
              aria-hidden={!isActive}
            >
              <SlideMedia slide={slide} inlinedSvg={inlinedSvg} isSvg={isSvg} />
            </div>
          );
        })}
      </div>

      {/* Title & Lead Text */}
      <div className={style.contentOverlay}>
        {activeTitle && <h1 className={style.mainTitle}>{activeTitle}</h1>}
        {activeLead && <p className={style.lead}>{activeLead}</p>}
      </div>

      {/* Controls Layer */}
      <div className={style.controlsLayer}>
        {showControls && (
          <button
            type="button"
            className={`${style.navButton} ${style.prevButton}`}
            onClick={prevSlide}
            aria-label={isEn ? 'Previous slide' : 'Edellinen dia'}
          >
            <span className={style.svgIcon} dangerouslySetInnerHTML={{ __html: arrowLeftSvg }} />
          </button>
        )}

        {showControls && (
          <button
            type="button"
            className={`${style.navButton} ${style.nextButton}`}
            onClick={nextSlide}
            aria-label={isEn ? 'Next slide' : 'Seuraava dia'}
          >
            <span className={style.svgIcon} dangerouslySetInnerHTML={{ __html: arrowRightSvg }} />
          </button>
        )}

        {showControls && (
          <div className={style.indicators} role="tablist" aria-label={isEn ? 'Select slide' : 'Valitse dia'}>
            {preparedSlides.map(({ key: sKey }, idx) => (
              <button
                key={`dot-${sKey}`}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                className={`${style.dot} ${idx === currentIndex ? style.activeDot : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={isEn ? `Go to slide ${idx + 1}` : `Siirry diaan ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {showPauseButton && (
          <button
            type="button"
            className={style.playPauseButton}
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? pauseLabel : playLabel}
            title={isPlaying ? pauseLabel : playLabel}
          >
            <span className={style.svgIcon} dangerouslySetInnerHTML={{ __html: isPlaying ? pauseSvg : playSvg }} />
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;
