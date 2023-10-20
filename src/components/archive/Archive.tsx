import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import CollapseBox from "../common/CollapseBox";
import { BsPlus, BsDash } from "react-icons/bs"
import * as style from "./Archive.module.scss"

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
  officials: CommitteeData[]
}

interface ArchiveData {
  allArchiveYaml: {
    nodes: Year[]
  }
}

const Committee: React.FC<{committee: CommitteeData, lang: string}> = ({ committee, lang }) => {
  return (
    <div>
      <h3>{committee.name[lang]}</h3>
      <div>
        {committee.members.map((member: CommitteeMember) => {
          return (
            <p><strong>{member.title.map((title: TranslatedEntry) => title[lang]).join(", ")}</strong> {member.name}</p>
          )
        })}
      </div>
    </div>
  )
}

const Board: React.FC<{board: BoardMember[], lang: string}> = ({ board, lang }) => {
  return (
    <>
      <h2>Hallitus</h2>
      {board.map((member: BoardMember) => {
        return (
          <p><strong>{member.title[lang]}</strong> {member.name}</p>
        )
      })}
    </>
  )
}

const Officials: React.FC<{officials: CommitteeData[], lang: string}> = ({ officials, lang }) => {
  return (
    <>
      <h2>Toimihenkilöt</h2>
      {officials.map((committee: CommitteeData) => <Committee committee={committee} lang={lang} />)}
    </>
  )
}

export const query = graphql`
  query GetOldOfficials {
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

  const data: ArchiveData = useStaticQuery(query)

  return (
    <div className={style.container}>
      <button className={style.toggleButton} onClick={toggleCollapse} onKeyDown={toggleOnEnter}>
        {allExpanded ? "Sulje kaikki" : "Avaa kaikki"}
        {allExpanded ? <BsDash /> : <BsPlus />}
      </button>
      {data.allArchiveYaml.nodes.map((entry: Year) => {
        return (
          <>
            <CollapseBox title={entry.year} expand={allExpanded}>
              <div>
                <Board board={entry.board} lang={lang} />
                <Officials officials={entry.officials} lang={lang} />
              </div>
            </CollapseBox>
          </>
        )
      })}
    </div>
  )
}

export default Archive
