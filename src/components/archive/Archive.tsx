import React, { Fragment, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import CollapseBox from "../common/CollapseBox";
import { BsPlus, BsDash } from "react-icons/bs"
import * as style from "./Archive.module.scss"
import CollapseText from "../common/CollapseText";

interface CommitteeMember {
  title: TranslatedEntry[],
  name: string,
  picture?: string,
  leader?: boolean
}

interface CommitteeData {
  name: TranslatedEntry,
  members: CommitteeMember[]
}

interface BoardMember {
  name: string,
  title: TranslatedEntry,
  email?: string,
  phone?: string,
  telegram?: string,
  picture?: string,
  description?: TranslatedEntry
}

interface Year {
  year: string,
  board: BoardMember[],
  officials: CommitteeData[],
  accolades: {
    golden_accolades?: Accolade[],
    silvery_accolades?: Accolade[],
    ratas?: Accolade[],
    alumnus_of_the_year?: Accolade[]
  }
}

interface ArchiveData {
  allArchiveYaml: {
    nodes: Year[]
  }
}

interface Accolade {
  name: string,
  description: TranslatedEntry
}

const translations: Translations = {
  openAll: {
    fi: "Avaa kaikki",
    en: "Open all"
  },
  closeAll: {
    fi: "Sulje kaikki",
    en: "Close all"
  },
  board: {
    fi: "Hallitus",
    en: "Board"
  },
  officials: {
    fi: "Toimihenkilöt",
    en: "Officials"
  },
  formerOfficials: {
    fi: "Vanhat toimijat",
    en: "Former officials"
  },
  accolades: {
    fi: "Kunnianosoitukset",
    en: "Accolades"
  },
  goldenAccolade: {
    fi: "Kultainen pränikkä",
    en: "Golden accolade"
  },
  silveryAccolade: {
    fi: "Hopeinen pränikkä",
    en: "Silvery accolade"
  },
  ratas: {
    fi: "RATAS-kunnianosoitukset",
    en: "RATAS accolade"
  },
  alumnusOfTheYear: {
    fi: "Vuoden kilta-alumni",
    en: "Alumnus of the year"
  }
}

const Committee: React.FC<{committee: CommitteeData, lang: string}> = ({ committee, lang }) => {
  return (
    <div>
      <h4 className={style.heading4}>{committee.name[lang]}</h4>
      <div>
        <p>
          {committee.members.map((member: CommitteeMember) => 
            <Fragment key={member.name}>
              <strong>{member.title.map((title: TranslatedEntry) => title[lang]).join(", ")}</strong> {member.name}<br />
            </Fragment>
          )}
        </p>
      </div>
    </div>
  )
}

const Board: React.FC<{board: BoardMember[], lang: string}> = ({ board, lang }) => {
  return (
    <Fragment>
      <h3 className={style.heading3}>{translations.board[lang]}</h3>
      <p>
        {board.map((member: BoardMember) => 
          <Fragment key={member.name}>
            <strong>{member.title[lang]}</strong> {member.name}<br />
          </Fragment>
        )}
      </p>
    </Fragment>
  )
}

const Officials: React.FC<{officials: CommitteeData[], lang: string}> = ({ officials, lang }) => {
  return (
    <Fragment>
      <h3 className={style.heading3}>{translations.officials[lang]}</h3>
      {officials.map((committee: CommitteeData) => <Committee key={committee.name[lang]} committee={committee} lang={lang} />)}
    </Fragment>
  )
}

// TODO: Create a separate component for collapsable text

const Accolades: React.FC<{accolades: Accolade[], lang: string}> = ({ accolades, lang }) => {
  return (
    <Fragment>
      {accolades.map((accolade: Accolade) => {
        if (!accolade.description[lang])
          return <div key={accolade.name} className={style.noDescription}>{accolade.name}</div>
        return (
          <CollapseText key={accolade.name} title={accolade.name}>
            {accolade.description[lang].split("\n").map((paragraph: string, i: Number) => <p key={`${i}`} className={style.description}>{paragraph}</p>)}
          </CollapseText>
        )
      })}
    </Fragment>
  )
}

export const query = graphql`
  query GetArchiveData {
    allArchiveYaml {
      nodes {
        year
        board {
          name
          title {
            fi
            en
          }
        }
        officials {
          members {
            name
            title {
              fi
              en
            }
          }
          name {
            fi
            en
          }
        }
        accolades {
          golden_accolades {
            name
            description {
              fi
              en
            }
          }
          silvery_accolades {
            name
            description {
              fi
              en
            }
          }
          ratas {
            name
            description {
              fi
              en
            }
          }
          alumnus_of_the_year {
            name
            description {
              fi
              en
            }
          }
        }
      }
    }
  }
`

const Archive: React.FC<{lang: string}> = ({ lang }) => {
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleCollapse = () => {
    setAllExpanded(!allExpanded)
  }

  const toggleOnEnter = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter")
      toggleCollapse()
  }

  const rawData: ArchiveData = useStaticQuery(query)

  // Create a copy of queried archive data and reverse the array
  const data: Year[] = rawData.allArchiveYaml.nodes.slice().reverse()

  return (
    <div className={style.container}>
      <button className={style.toggleButton} onClick={toggleCollapse} onKeyDown={toggleOnEnter}>
        {allExpanded ? translations.closeAll[lang] : translations.openAll[lang]}
        {allExpanded ? <BsDash /> : <BsPlus />}
      </button>
      <h2>{translations.formerOfficials[lang]}</h2>
      {data.map((entry: Year) => {
        return (
          <CollapseBox key={`officials-${entry.year}`} title={entry.year} expand={allExpanded}>
            <Fragment>
              {entry.board && <Board board={entry.board} lang={lang} />}
              {entry.officials && <Officials officials={entry.officials} lang={lang} />}
            </Fragment>
          </CollapseBox>
        )
      })}
      <h2>{translations.accolades[lang]}</h2>
      {data.map((entry: Year) => {
        return (
          <CollapseBox key={`accolades-${entry.year}`} title={entry.year} expand={allExpanded}>
            <div>
              {entry.accolades.golden_accolades
                && (
                  <Fragment>
                    <h3 className={style.heading3}>{translations.goldenAccolade[lang]}</h3>
                    <Accolades accolades={entry.accolades.golden_accolades} lang={lang} />
                  </Fragment>
                )}
              {entry.accolades.silvery_accolades
                && (
                  <Fragment>
                    <h3 className={style.heading3}>{translations.silveryAccolade[lang]}</h3>
                    <Accolades accolades={entry.accolades.silvery_accolades} lang={lang} />
                  </Fragment>
                )}
              {entry.accolades.ratas
                && (
                  <Fragment>
                    <h3 className={style.heading3}>{translations.ratas[lang]}</h3>
                    <Accolades accolades={entry.accolades.ratas} lang={lang} />
                  </Fragment>
                )}
              {entry.accolades.alumnus_of_the_year
                && (
                  <Fragment>
                    <h3 className={style.heading3}>{translations.alumnusOfTheYear[lang]}</h3>
                    <Accolades accolades={entry.accolades.alumnus_of_the_year} lang={lang} />
                  </Fragment>
                )}
            </div>
          </CollapseBox>
        )
      })}
    </div>
  )
}

export default Archive
