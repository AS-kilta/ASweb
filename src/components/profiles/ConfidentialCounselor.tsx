import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContactCard from "@src/components/profiles/ContactCard"
import type { ContactInfo } from "@src/components/profiles/ContactCard"
import * as style from "./ConfidentialCounselor.module.scss"

interface ConfidentialCounselor {
    node: {
        title: TranslatedEntry,
        name: string,
        email: string,
        phone: string,
        telegram: string,
        picture: DynamicImageData,
        description?: TranslatedEntry
    }
}

interface CounselorData {
    allCounselorYaml: {
        edges: ConfidentialCounselor[]
    }
}

const ConfidentialCounselors: React.FC<{lang: string}> = ({ lang }) => {
    const data: CounselorData = useStaticQuery(graphql`
        query getCounselorData {
            allCounselorYaml {
                edges {
                    node {
                        title {
                            fi
                            en
                        }
                        name
                        email
                        telegram
                        picture {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 1000
                                    placeholder: BLURRED
                                )
                            }
                        }
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
        <div className={style.counselor}>
            {data.allCounselorYaml.edges.map(member => {
                const contactData: ContactInfo = {
                    ...member.node,
                    title: member.node.title[lang],
                    picture: member.node.picture,
                    description: member.node.description ? member.node.description[lang] : undefined
                }
                return <ContactCard key={member.node.name} data={contactData} />
            })}
        </div>
    )
}

export default ConfidentialCounselors
