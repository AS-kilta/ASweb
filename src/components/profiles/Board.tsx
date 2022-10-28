import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContactCard from "@src/components/profiles/ContactCard"
import type { ContactInfo } from "@src/components/profiles/ContactCard"
import * as style from "./Board.module.scss"

interface BoardMember {
    node: {
        title: TranslatedEntry,
        name: string,
        email: string,
        phone: string,
        telegram: string,
        picture?: string,
        description: TranslatedEntry
    }
}

interface BoardData {
    allBoardYaml: {
        edges: BoardMember[]
    }
}

const Board: React.FC<{lang: string}> = ({ lang }) => {
    const data: BoardData = useStaticQuery(graphql`
        query getBoardData {
            allBoardYaml {
                edges {
                    node {
                        title {
                            fi
                            en
                        }
                        name
                        email
                        phone
                        telegram
                        picture
                        description {
                            fi
                            en
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className={style.board}>
            {data.allBoardYaml.edges.map(member => {
                const contactData: ContactInfo = {
                    ...member.node,
                    title: member.node.title[lang],
                    description: member.node.description[lang]
                }
                return <ContactCard data={contactData} />
            })}
        </div>
    )
}

export default Board
