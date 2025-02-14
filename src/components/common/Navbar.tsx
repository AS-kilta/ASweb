import React, { useState, useContext, createContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { BsList, BsX, BsPlus, BsDash } from 'react-icons/bs';

import * as style from './Navbar.module.scss';

import Gallery from '../../images/icons/gallery.inline.svg';
import Ilmo from '../../images/icons/ilmov2.inline.svg';
import Forum from '../../images/icons/forum.inline.svg';
import Kimble from '../../images/icons/kimble.inline.svg';

// Create context for navi callbacks (avoid prop drilling)

interface INaviContext {
  navExpanded: boolean;
  toggleNav: () => void;
  hideNav: () => void;
}

const NaviContext = createContext<INaviContext | undefined>(undefined);

const SiteLogo: React.FC<{ lang: string }> = ({ lang }) => {
  const naviCtx = useContext(NaviContext);

  return (
    <div className={style.navbarLogo}>
      <Link onClick={naviCtx?.hideNav} to={lang === 'fi' ? '/' : '/en'}>
        <StaticImage
          src="../../images/aswhite.png"
          alt="AS logo"
          layout="constrained"
          width={40}
          height={40}
          placeholder="none"
        />
      </Link>
    </div>
  );
};

interface NaviLinkProps {
  title: string;
  link: string;
}

const NaviLink: React.FC<NaviLinkProps> = ({ title, link }) => {
  const naviCtx = useContext(NaviContext);
  const local = link.startsWith('/');

  return (
    <>
      {local ? (
        <Link onClick={naviCtx?.hideNav} className={style.naviLink} activeClassName={style.active} to={link}>
          {title}
        </Link>
      ) : (
        <a onClick={naviCtx?.hideNav} className={style.naviLink} href={link}>
          {title}
        </a>
      )}
    </>
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
    link = slug.substring(3) || '/';
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

const QuickLinks: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className={style.quickLinks}>
      <Link to={'https://gallery.as.fi'}>
        <Gallery />
      </Link>
      <Link to={'https://ilmo.as.fi'}>
        <Ilmo />
      </Link>
      <Link to={'https://forum.as.fi'}>
        <Forum />
      </Link>
      <Link to={lang === 'fi' ? 'https://as.fi/kimble/kimblesaannot.pdf' : 'https://as.fi/kimble/kimble-en.pdf'}>
        <Kimble />
      </Link>
    </div>
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

interface NaviDataScheme {
  allNaviYaml: {
    edges: [
      {
        node: NaviData;
      },
    ];
  };
}

interface NavCollapseProps {
  lang: string;
  slug: string;
  translation?: string;
  isExpanded: boolean;
}

const NavCollapse: React.FC<NavCollapseProps> = ({ lang, slug, translation, isExpanded }) => {
  const data: NaviDataScheme = useStaticQuery(graphql`
    query getNaviData {
      allNaviYaml {
        edges {
          node {
            title {
              fi
              en
            }
            link {
              fi
              en
            }
            subnavi {
              title {
                fi
                en
              }
              link {
                fi
                en
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ul id={style.navbarCollapse} className={isExpanded ? style.show : ''}>
      {data.allNaviYaml.edges.map((edge) => {
        const entry = edge.node;
        if (!entry.title[lang] || !entry.link[lang]) {
          return null;
        }
        return <NaviItem entry={entry} lang={lang} key={entry.title[lang] + '-' + entry.link[lang]} />;
      })}
      <LangSwitcher lang={lang} slug={slug} translation={translation} />
      <QuickLinks lang={lang} />
    </ul>
  );
};

interface NavbarProps {
  lang: string;
  slug: string;
  translation?: string;
}

const Navbar: React.FC<NavbarProps> = ({ lang, slug, translation }) => {
  const [navExpanded, expandNav] = useState(false);

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
        <SiteLogo lang={lang} />
        <NavCollapse lang={lang} slug={slug} translation={translation} isExpanded={navExpanded} />
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
