import React, { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import * as style from './BackToTop.module.scss';

const BackToTop: React.FC<{ lang: string }> = ({ lang }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const scrollToTop: () => void = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleVisibility: () => void = () => {
      const scrollPosition: number = window.scrollY;
      const threshold: number = 500;
      if (scrollPosition >= threshold && !visible) setVisible(true);
      else if (scrollPosition < threshold && visible) setVisible(false);
    };
    handleVisibility();
    window.addEventListener('scroll', handleVisibility);

    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, [visible, setVisible]);

  const classes: string = `${style.button} ${visible ? style.visible : ''}`;
  const translations: Translations = {
    backToTop: {
      fi: 'Takaisin ylös',
      en: 'Back to top',
    },
  };

  return (
    <button
      onClick={scrollToTop}
      className={classes}
      title={translations.backToTop[lang]}
      aria-label={translations.backToTop[lang]}
    >
      <BsArrowUpShort />
    </button>
  );
};

export default BackToTop;
