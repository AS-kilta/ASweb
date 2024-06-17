import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProfileImg from "@src/components/profiles/ProfileImg"
import * as style from "./Officials.module.scss"

interface Member {
  name: string
  title: TranslatedEntry[]
  picture: DynamicImageData
  leader?: Boolean
}

interface Committee {
  node: {
    name: TranslatedEntry
    members: Member[]
  }
}

interface OfficialCard {
  lang: string
  committeeName: string
  official: Member
  image?: DynamicImageData
}

interface OfficialsData {
  allOfficialsYaml: {
    edges: Committee[]
  }
}

const OfficialCard: React.FC<OfficialCard> = (
  { lang, committeeName, official, image },
) => {
  const leader = official.leader ? style.leader : ""
  return (
    <div className={`${style.official_container} ${leader}`}>
      <ProfileImg src={image} alt={official.name} />
      <div className={style.name}>{official.name}</div>
      {official.title.map((title) => (
        <div
          key={`${committeeName}${official.name}${title[lang]}`}
          className={style.title}
        >
          {title[lang]}
        </div>
      ))}
    </div>
  )
}

const CommitteeSection: React.FC<{ lang: string; committee: Committee }> = (
  { lang, committee },
) => {
  const { name, members }: { name: TranslatedEntry; members: Member[] } =
    committee.node
  return (
    <div className={style.officials_section}>
      <h2 className={style.heading2} id={name[lang]}>{name[lang]}</h2>
      <div className={style.officials_list}>
        {members.map((official) => (
          <OfficialCard
            key={`${committee.node.name[lang]}${official.name}`}
            committeeName={committee.node.name[lang]}
            lang={lang}
            image={official.picture}
            official={official}
          />
        ))}
      </div>
    </div>
  )
}

const Officials: React.FC<{ lang: string }> = ({ lang }) => {
  const data: OfficialsData = useStaticQuery(graphql`
        query getOfficialsData {
            allOfficialsYaml {
                edges {
                  node {
                    members {
                        leader
                        name
                        picture {
                            childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, width: 200)
                            }
                        }
                        title {
                            en
                            fi
                        }
                    }
                    name {
                      en
                      fi
                    }
                  }
                }
              }
        }      
    `)

  return (
    <>
      {data.allOfficialsYaml.edges.map((entry) => (
        <CommitteeSection
          key={entry.node.name[lang]}
          lang={lang}
          committee={entry}
        />
      ))}
    </>
  )
}

export default Officials
