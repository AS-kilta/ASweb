import React, { useState, useContext, createContext } from 'react';
import { BsList, BsX, BsPlus, BsDash } from 'react-icons/bs';

import style from './Navbar.module.scss';
import ASPixelSvgRaw from '@src/assets/logos/as-pixel.svg?raw';
import ASFourierSvgRaw from '@src/assets/logos/as-fourier.svg?raw';

// Create context for navi callbacks (avoid prop drilling)

interface INaviContext {
  navExpanded: boolean;
  toggleNav: () => void;
  hideNav: () => void;
}

const NaviContext = createContext<INaviContext | undefined>(undefined);

const DEFAULT_LOGOS = [ASPixelSvgRaw, ASFourierSvgRaw];

interface SiteLogoProps {
  lang: string;
  logos: string[];
}

const SiteLogo: React.FC<SiteLogoProps> = ({ lang, logos }) => {
  const naviCtx = useContext(NaviContext);
  const [activeVariant, setActiveVariant] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const hasMultiple = logos.length > 1;

  const triggerAnimation = () => {
    if (hasMultiple) {
      setActiveVariant(Math.floor(Math.random() * logos.length));
    }
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div
      id="site-logo-container"
      className={style.navbarLogo}
      data-variant-count={hasMultiple ? logos.length : undefined}
      data-anim-variant={activeVariant !== null ? String(activeVariant) : undefined}
      suppressHydrationWarning
    >
      {hasMultiple && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var el=document.getElementById('site-logo-container');if(el&&!el.hasAttribute('data-anim-variant')){var c=parseInt(el.getAttribute('data-variant-count')||'1',10);el.setAttribute('data-anim-variant',Math.floor(Math.random()*c).toString());}})();`,
          }}
        />
      )}
      <a
        onClick={naviCtx?.hideNav}
        href={lang === 'fi' ? '/' : '/en'}
        aria-label="Etusivulle"
        onMouseEnter={triggerAnimation}
        onFocus={triggerAnimation}
      >
        <span className={style.navbarLogoImg}>
          {logos.map((svgContent, idx) => (
            <span
              key={`variant-${idx}-${activeVariant === idx ? animKey : 'init'}`}
              className={style.logoVariant}
              data-variant={idx}
              dangerouslySetInnerHTML={{ __html: svgContent }}
              aria-hidden="true"
            />
          ))}
        </span>
      </a>
    </div>
  );
};

interface NaviLinkProps {
  title: string;
  link: string;
}

const NaviLink: React.FC<NaviLinkProps> = ({ title, link }) => {
  const naviCtx = useContext(NaviContext);
  const [currentPath, setCurrentPath] = useState('');

  // We can only check window in client-side
  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = currentPath === link || (link !== '/' && currentPath.startsWith(link));

  return (
    <a onClick={naviCtx?.hideNav} className={`${style.naviLink} ${isActive ? style.active : ''}`} href={link}>
      {title}
    </a>
  );
};

interface NaviItemProps {
  entry: NaviData;
  lang: string;
}

const NaviItem: React.FC<NaviItemProps> = ({ entry, lang }) => {
  const title = entry.title[lang];
  const link = entry.link[lang];

  return (
    <li className={style.naviItem}>
      <NaviLink title={title} link={link} />
      <Subnavi data={entry} lang={lang} />
    </li>
  );
};

interface LangSwitcherProps {
  lang: string;
  slug: string;
  translation?: string;
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang, slug, translation }) => {
  let link, title: string;
  if (lang === 'fi') {
    link = `/en${slug}`;
    title = 'In English';
  } else {
    link = slug.startsWith('/en') ? slug.substring(3) || '/' : slug;
    title = 'Suomeksi';
  }

  return (
    <li className={style.naviItem}>
      <NaviLink title={title} link={translation || link} />
    </li>
  );
};

interface SubnaviProps {
  data?: NaviData;
  lang: string;
}

const Subnavi: React.FC<SubnaviProps> = ({ lang, data }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSubnavi = () => {
    setExpanded(!expanded);
  };

  const subnaviData = data?.subnavi;

  if (!subnaviData) {
    return null;
  }

  const subnaviClasses = `${style.subnavi} ${expanded ? style.showDropdown : ''}`;
  const dropdownID = data.title[lang] + '-subnavi';
  return (
    <>
      <button
        type="button"
        className={`${style.dropdownToggle} button-reset`}
        onClick={toggleSubnavi}
        aria-label="Subnavigation"
        aria-expanded={expanded}
        aria-controls={dropdownID}
      >
        {expanded ? <BsDash /> : <BsPlus />}
      </button>
      <ul className={subnaviClasses} id={dropdownID}>
        {subnaviData.map((entry) => {
          if (!entry.title[lang] || !entry.link[lang]) {
            return null;
          }

          return (
            <NaviLink
              title={entry.title[lang]}
              link={entry.link[lang]}
              key={entry.title[lang] + '-' + entry.link[lang]}
            />
          );
        })}
      </ul>
    </>
  );
};

// Types for navigation data scheme

interface SubnaviData {
  title: TranslatedEntry;
  link: TranslatedEntry;
}

interface NaviData {
  title: TranslatedEntry;
  link: TranslatedEntry;
  subnavi?: SubnaviData[];
}

interface NavCollapseProps {
  lang: string;
  slug: string;
  translation?: string;
  isExpanded: boolean;
  naviData: NaviData[];
}

const NavCollapse: React.FC<NavCollapseProps> = ({ lang, slug, translation, isExpanded, naviData }) => {
  return (
    <ul id={style.navbarCollapse} className={isExpanded ? style.show : ''}>
      {naviData.map((entry) => {
        if (!entry.title[lang] || !entry.link[lang]) {
          return null;
        }
        return <NaviItem entry={entry} lang={lang} key={entry.title[lang] + '-' + entry.link[lang]} />;
      })}
      <LangSwitcher lang={lang} slug={slug} translation={translation} />
    </ul>
  );
};

export interface NavbarProps {
  lang: string;
  slug: string;
  translation?: string;
  naviData: NaviData[];
  logoAnimations?: string[];
  logos?: string[];
}

const Navbar: React.FC<NavbarProps> = ({ lang, slug, translation, naviData, logoAnimations, logos }) => {
  const [navExpanded, expandNav] = useState(false);

  const activeLogos =
    logoAnimations && logoAnimations.length > 0 ? logoAnimations : logos && logos.length > 0 ? logos : DEFAULT_LOGOS;

  const toggleNav = (): void => {
    navExpanded ? document.body.classList.remove('hideoverflow') : document.body.classList.add('hideoverflow');
    expandNav(!navExpanded);
  };

  const hideNav = (): void => {
    document.body.classList.remove('hideoverflow');
    expandNav(false);
  };

  const ctx: INaviContext = {
    navExpanded: navExpanded,
    toggleNav: toggleNav,
    hideNav: hideNav,
  };

  return (
    <nav id={style.navbarTop} className={navExpanded ? style.expanded : ''} aria-label="Main Navigation">
      <NaviContext.Provider value={ctx}>
        <SiteLogo lang={lang} logos={activeLogos} />
        <NavCollapse lang={lang} slug={slug} translation={translation} isExpanded={navExpanded} naviData={naviData} />
        <button
          className={`${style.menuToggle} button-reset`}
          onClick={toggleNav}
          aria-label="Nav menu toggle"
          aria-controls={style.navbarCollapse}
        >
          {navExpanded ? <BsX /> : <BsList />}
        </button>
      </NaviContext.Provider>
    </nav>
  );
};

export default Navbar;
