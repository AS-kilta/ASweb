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

interface Accolade {
  name: string,
  description: TranslatedEntry
}

interface Accolades {
  name: TranslatedEntry,
  people: Accolade[]
}

interface ArchiveEntry {
  year?: string,
  board?: BoardMember[],
  officials?: CommitteeData[],
  accolades?: Accolades[]
}

interface ArchiveData {
  allArchiveYaml: {
    nodes: ArchiveEntry[]
  }
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
  }
}

const Committee: React.FC<{committee: CommitteeData, lang: string, year: string}> = ({ committee, lang, year }) => {
  return (
    <div>
      <h4 className={style.heading4}>{committee.name[lang]}</h4>
      <div>
        <p>
          {committee.members.map((member: CommitteeMember) => 
            <Fragment key={year + member.name}>
              <strong>{member.title.map((title: TranslatedEntry) => title[lang]).join(", ")}</strong> {member.name}<br />
            </Fragment>
          )}
        </p>
      </div>
    </div>
  )
}

const Board: React.FC<{board: BoardMember[], lang: string, year: string}> = ({ board, lang, year }) => {
  return (
    <Fragment>
      <h3 className={style.heading3}>{translations.board[lang]}</h3>
      <p>
        {board.map((member: BoardMember) => 
          <Fragment key={year + member.name}>
            <strong>{member.title[lang]}</strong> {member.name}<br />
          </Fragment>
        )}
      </p>
    </Fragment>
  )
}

const Officials: React.FC<{officials: CommitteeData[], lang: string, year: string}> = ({ officials, lang, year }) => {
  return (
    <Fragment>
      <h3 className={style.heading3}>{translations.officials[lang]}</h3>
      {officials.map((committee: CommitteeData) =>
        <Committee key={committee.name[lang]} committee={committee} lang={lang} year={year} />
      )}
    </Fragment>
  )
}

const Accolades: React.FC<{accolades: Accolades, lang: string}> = ({ accolades, lang }) => {
  return (
    <Fragment>
      <h3 className={style.heading3}>{accolades.name[lang]}</h3>
      {accolades.people.map((accolade: Accolade) => {
        if (!accolade.description[lang])
          return <div key={accolade.name} className={style.noDescription}>{accolade.name}</div>
        return (
          <CollapseText key={accolade.name} title={accolade.name}>
            {accolade.description[lang].split("\n")
              .map((paragraph: string, i: Number) =>
                <p key={`${accolade.name}p${i}`} className={style.description}>{paragraph}</p>
              )}
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
          name {
            fi
            en
          }
          people {
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

  // Create a copy of queried archive data and sort the array
  const data: ArchiveEntry[] = rawData.allArchiveYaml.nodes.slice()
    .sort((a: ArchiveEntry, b: ArchiveEntry) => Number(b.year) - Number(a.year))

  return (
    <div className={style.container}>
      <button className={style.toggleButton} onClick={toggleCollapse} onKeyDown={toggleOnEnter}>
        {allExpanded ? translations.closeAll[lang] : translations.openAll[lang]}
        {allExpanded ? <BsDash /> : <BsPlus />}
      </button>
      <h2>{translations.formerOfficials[lang]}</h2>
      {data.map((entry: ArchiveEntry) => {
        return entry.year && (
          <CollapseBox key={`officials-${entry.year}`} title={entry.year} expand={allExpanded}>
              {entry.board && <Board board={entry.board} lang={lang} year={entry.year} />}
              {entry.officials && <Officials officials={entry.officials} lang={lang} year={entry.year} />}
          </CollapseBox>
        )
      })}
      <h2>{translations.accolades[lang]}</h2>
      {data.map((entry: ArchiveEntry) => {
        return entry.year && entry.accolades && (
          <CollapseBox key={`accolades-${entry.year}`} title={entry.year} expand={allExpanded}>
            {entry.accolades.map((accolades: Accolades) =>
              <Accolades key={`${accolades.name[lang]}`} accolades={accolades} lang={lang} />
            )}
          </CollapseBox>
        )
      })}
      {data.filter((entry: ArchiveEntry) => !entry.year)
        .map((entry: ArchiveEntry, i: Number) => {
          return entry.accolades && (
            <Fragment key={`other-accolades-${i}`}>
              {entry.accolades.map((accolades: Accolades) =>
                <Accolades key={`${accolades.name[lang]}`} accolades={accolades} lang={lang} />
              )}
            </Fragment>
          )
        })}
    </div>
  )
}

export default Archive
