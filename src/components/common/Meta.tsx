import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface MetaProps {
    lang: string,
    title?: string,
    description?: string,
    robots?: string
}

interface SiteMetadataScheme {
    site: {
        siteMetadata: {
            author: string,
            robots: string,
            description: TranslatedEntry,
            title: TranslatedEntry
        }
    }
}

interface SeoData {
    title: string,
    description: string
}

const Meta: React.FC<MetaProps> = ({ lang, title, description, robots }) => {
    const data: SiteMetadataScheme = useStaticQuery(graphql`
        query getSiteMetadata {
            site {
                siteMetadata {
                    author
                    robots
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

    const seoData: SeoData = {
        title: `${title ? title + " | " : ""}${data.site.siteMetadata.title[lang]}`,
        description: description ?? data.site.siteMetadata.description[lang]
    }
    
    return (
        <>
            <title>{seoData.title}</title>
            <meta name="robots" content={robots}/>
            <meta name="description" content={seoData.description} />
        </>
    )
}

export default Meta
