import React, { useState, useEffect } from 'react';
import arrowUpSvg from '@src/assets/icons/arrow-up.svg?raw';
import style from './BackToTop.module.scss';

const BackToTop: React.FC<{ lang: string }> = ({ lang }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const scrollToTop: () => void = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const handleVisibility: () => void = () => {
      const scrollPosition: number = window.scrollY;
      const threshold: number = 500;
      setVisible(scrollPosition >= threshold);
    };

    handleVisibility();
    window.addEventListener('scroll', handleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  const classes: string = `${style.button} ${visible ? style.visible : ''}`;
  const translations: Translations = {
    backToTop: {
      fi: 'Takaisin ylös',
      en: 'Back to top',
    },
  };

  const label = translations.backToTop[lang as 'fi' | 'en'] ?? translations.backToTop.fi;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={classes}
      title={label}
      aria-label={label}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <span className={style.svgIcon} dangerouslySetInnerHTML={{ __html: arrowUpSvg }} />
    </button>
  );
};

export default BackToTop;
