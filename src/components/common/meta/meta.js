import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Meta({ context, title }) {
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
            <title>{`${title ? title + " | " : ""}${data.site.siteMetadata.title[`${context.lang}`]}`}</title>
        </Helmet>
    )
}
