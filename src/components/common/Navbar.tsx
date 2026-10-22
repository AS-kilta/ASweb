import React, { useState, useContext, createContext } from 'react';
import { BsList, BsX, BsPlus, BsDash } from 'react-icons/bs';

import style from './Navbar.module.scss';

interface INaviContext {
  navExpanded: boolean;
  toggleNav: () => void;
  hideNav: () => void;
}

const NaviContext = createContext<INaviContext | undefined>(undefined);

interface SiteLogoProps {
  lang: string;
  logo?: string;
}

const SiteLogo: React.FC<SiteLogoProps> = ({ lang, logo }) => {
  const naviCtx = useContext(NaviContext);
  const [animKey, setAnimKey] = useState(0);

  if (!logo) {
    return null;
  }

  const triggerAnimation = () => {
    setAnimKey((prev) => prev + 1);
  };

  const isSvg = logo.trim().startsWith('<svg');

  return (
    <div className={style.navbarLogo}>
      <a
        onClick={naviCtx?.hideNav}
        href={lang === 'fi' ? '/' : '/en'}
        aria-label="Etusivulle"
        onMouseEnter={triggerAnimation}
        onFocus={triggerAnimation}
      >
        {isSvg ? (
          <span
            key={animKey}
            className={style.navbarLogoImg}
            dangerouslySetInnerHTML={{ __html: logo }}
            aria-hidden="true"
          />
        ) : (
          <span key={animKey} className={style.navbarLogoImg} aria-hidden="true">
            <img src={logo} alt="Logo" />
          </span>
        )}
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
  logo?: string;
  logos?: string[];
  logoAnimations?: string[];
}

const Navbar: React.FC<NavbarProps> = ({ lang, slug, translation, naviData, logo, logos, logoAnimations }) => {
  const [navExpanded, expandNav] = useState(false);

  const activeLogo =
    logo ||
    (logos && logos.length > 0 ? logos[0] : undefined) ||
    (logoAnimations && logoAnimations.length > 0 ? logoAnimations[0] : undefined);

  const toggleNav = (): void => {
    if (navExpanded) {
      document.body.classList.remove('hideoverflow');
    } else {
      document.body.classList.add('hideoverflow');
    }
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
        <SiteLogo lang={lang} logo={activeLogo} />
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
