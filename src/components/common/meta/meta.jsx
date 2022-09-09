import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Meta({ pageContext, title }) {
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
            <title>{`${title ? title + " | " : ""}${data.site.siteMetadata.title[pageContext.lang]}`}</title>
        </Helmet>
    )
}
