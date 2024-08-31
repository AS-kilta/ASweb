import React, { Fragment, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CollapseBox from '../common/CollapseBox';
import { BsPlus, BsDash } from 'react-icons/bs';
import * as style from './Minors.module.scss';
import CollapseText from '../common/CollapseText';

interface Lang {
  [key: string]: Boolean;
}

interface LangList {
  [key: string]: String[];
}

interface InfoAndList {
  info: TranslatedEntry;
  list: LangList;
}

interface MinorEntry {
  name: TranslatedEntry;
  link: TranslatedEntry;
  desc: TranslatedEntry;
  why: TranslatedEntry;
  whatMasters: InfoAndList;
  whatCourses: InfoAndList;

  lang: Lang;
}

interface MinorsData {
  allMinorsYaml: {
    nodes: MinorEntry[];
  };
}

const translations: Translations = {
  openAll: {
    fi: 'Avaa kaikki',
    en: 'Open all',
  },
  closeAll: {
    fi: 'Sulje kaikki',
    en: 'Close all',
  },
  minors: {
    fi: 'Sivuaineet',
    en: 'Minors',
  },
  desc: {
    fi: 'Kuvaus',
    en: 'Description',
  },
  why: {
    fi: 'Miksi tämä sivuaine kannattaisi valita ja miten se tukee pääaineopintoja?',
    en: 'Why should this minor be chosen and how does it support major studies?',
  },
  whatMast: {
    fi: 'Mitä maisteriohjelmia sivuaine mahdollistaa?',
    en: "What master's programs does the minor enable?",
  },
  whatCourses: {
    fi: 'Mitä sivuaineen kursseja suositellaan?',
    en: 'What minor courses are recommended?',
  },
};

const Minor: React.FC<{ minorData: MinorEntry; lang: string }> = ({ minorData, lang }) => {
  return (
    <Fragment>
      <div className={style.container}>
        <a href={minorData.link[lang]}>{minorData.link[lang]}</a>
        {minorData.desc[lang]}

        <h3 className={style.heading3}>{translations.why[lang]}</h3>
        {minorData.why[lang]}

        <h3 className={style.heading3}>{translations.whatMast[lang]}</h3>
        {minorData.whatMasters.info[lang] != '' && minorData.whatMasters.info[lang]}
        {minorData.whatMasters.list[lang] && (
          <ul>
            {minorData.whatMasters.list[lang].map((cours: String) => (
              <li>{cours}</li>
            ))}
          </ul>
        )}

        <h3 className={style.heading3}>{translations.whatCourses[lang]}</h3>
        {minorData.whatCourses.info[lang] != '' && minorData.whatCourses.info[lang]}
        {minorData.whatCourses.list && minorData.whatCourses.list[lang] && (
          <ul>
            {minorData.whatCourses.list[lang].map((cours: String) => (
              <li>{cours}</li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export const query = graphql`
  query GetMinorsData {
    allMinorsYaml {
      nodes {
        lang {
          fi
          en
        }

        name {
          fi
          en
        }
        link {
          fi
          en
        }
        desc {
          fi
          en
        }
        why {
          fi
          en
        }
        whatMasters {
          info {
            fi
            en
          }
          list {
            fi
            en
          }
        }
        whatCourses {
          info {
            fi
            en
          }
          list {
            fi
            en
          }
        }
      }
    }
  }
`;

const Minors: React.FC<{ lang: string }> = ({ lang }) => {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleCollapse = () => {
    setAllExpanded(!allExpanded);
  };

  const toggleOnEnter = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') toggleCollapse();
  };

  const rawData: MinorsData = useStaticQuery(query);

  // Create a copy of queried archive data and sort the array
  const data: MinorEntry[] = rawData.allMinorsYaml.nodes.slice();
  // console.log('WEE');

  return (
    <div className={style.container}>
      <button className={style.toggleButton} onClick={toggleCollapse} onKeyDown={toggleOnEnter}>
        {allExpanded ? translations.closeAll[lang] : translations.openAll[lang]}
        {allExpanded ? <BsDash /> : <BsPlus />}
      </button>
      {data.map((entry: MinorEntry) => {
        return (
          entry.lang[lang] && (
            <CollapseBox key={`minor-${entry.name[lang]}`} title={entry.name[lang]} expand={allExpanded}>
              <Minor minorData={entry} lang={lang}></Minor>
            </CollapseBox>
          )
        );
      })}
    </div>
  );
};

export default Minors;
