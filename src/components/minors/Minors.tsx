import React, { Fragment, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CollapseBox from '../common/CollapseBox';
import { BsPlus, BsDash } from 'react-icons/bs';
import * as style from './Minors.module.scss';

interface Lang {
  [key: string]: boolean;
}

interface TranslatedList {
  [key: string]: string[];
}

interface InfoAndList {
  info: TranslatedEntry;
  list: TranslatedList;
}

interface MinorEntry {
  curriculum: TranslatedEntry;
  name: TranslatedEntry;
  link: TranslatedEntry;
  desc: TranslatedEntry;
  why: TranslatedEntry;
  masters: InfoAndList;
  courses: InfoAndList;

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
  curriculum: {
    fi: 'Opintosuunnitelma',
    en: 'Curriculum',
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
  courses: {
    fi: 'Mitä sivuaineen kursseja suositellaan?',
    en: 'What minor courses are recommended?',
  },
  linkText: {
    fi: 'Linkki sivuaineen sivuille',
    en: "Link to the minor's website",
  },
};

const Minor: React.FC<{ minorData: MinorEntry; lang: string }> = ({ minorData, lang }) => {
  return (
    <Fragment>
      <div className={style.container}>
        {translations.curriculum[lang]}: {minorData.curriculum[lang]}
        <a href={minorData.link[lang]}>{translations.linkText[lang]}</a>
        {minorData.desc[lang] && <p>{minorData.desc[lang]}</p>}
        <h3 className={style.heading3}>{translations.why[lang]}</h3>
        {minorData.why[lang] && <p>{minorData.why[lang]}</p>}
        <h3 className={style.heading3}>{translations.whatMast[lang]}</h3>
        {minorData.masters.info[lang] && <p>{minorData.masters.info[lang]}</p>}
        {minorData.masters.list[lang] && (
          <ul>
            {minorData.masters.list[lang].map((master: string) => (
              <li key={master}>{master}</li>
            ))}
          </ul>
        )}
        <h3 className={style.heading3}>{translations.courses[lang]}</h3>
        {minorData.courses.info[lang] && <p>{minorData.courses.info[lang]}</p>}
        {minorData.courses.list && minorData.courses.list[lang] && (
          <ul>
            {minorData.courses.list[lang].map((course: string) => (
              <li key={course}>{course}</li>
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
        curriculum {
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
        masters {
          info {
            fi
            en
          }
          list {
            fi
            en
          }
        }
        courses {
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
              <Minor minorData={entry} lang={lang} />
            </CollapseBox>
          )
        );
      })}
    </div>
  );
};

export default Minors;
