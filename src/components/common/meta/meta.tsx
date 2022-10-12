import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Meta: React.FC<{lang: string, title?: string}> = ({ lang, title }) => {
    const data = useStaticQuery(graphql`
        query getSiteMetadata {
            site {
            siteMetadata {
                author
                description {
                    en
                    fi
                }
                title {
                    en
                    fi
                }
            }
            }
        }
    `)

    return (
        <Helmet>
            <title>{`${title ? title + " | " : ""}${data.site.siteMetadata.title[lang]}`}</title>
        </Helmet>
    )
}

export default Meta
