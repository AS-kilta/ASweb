import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProfileImg from "@src/components/profiles/ProfileImg"
import * as style from "./Officials.module.scss"

interface Member {
    name: string,
    title: TranslatedEntry[],
    picture?: string,
    leader?: Boolean
}

interface Committee {
    node: {
        name: TranslatedEntry,
        members: Member[]
    }
}

interface OfficialsData {
    allOfficialsYaml: {
        edges: Committee[]
    }
}

const OfficialCard: React.FC<{lang: string, official: Member}> = ({lang, official}) => {
    const leader = official.leader ? style.leader : ''
    return (
        <div className={`${style.official_container} ${leader}`} >
            <ProfileImg src={official.picture}/>
            <div className={style.name}>{official.name}</div>
            {official.title.map(title => <div key={title[lang]} className={style.title}>{title[lang]}</div>)}
        </div>
    )
}

const CommitteeSection: React.FC<{lang: string, committee: Committee}> = ({lang, committee}) => {
    const {name, members}: {name: TranslatedEntry, members: Member[]} = committee.node;
    return (
        <div className={style.officials_section}>
            <h2 id="name">{name[lang]}</h2>
            <div className={style.officials_list}>
                {members.map(official => <OfficialCard key={official.name} lang={lang} official={official} />)}
            </div>
        </div>
    )
}

const Officials: React.FC<{lang: string}> = ({ lang }) => {
    const data: OfficialsData = useStaticQuery(graphql`
        query getOfficialsData {
            allOfficialsYaml {
                edges {
                    node {
                        name {
                            fi
                            en
                        }
                        members {
                            picture
                            name
                            title {
                                fi
                                en
                            }
                            leader
                        }
                    }
                }
            }
        }      
    `)

    return (
        <>
            {data.allOfficialsYaml.edges.map(entry => <CommitteeSection key={entry.node.name[lang]} lang={lang} committee={entry} />)}
        </>
    )
}

export default Officials
