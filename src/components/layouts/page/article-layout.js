import React from "react"

import PageLayout from "./page-layout.js"

export default function ArticleLayout({ pageContext, children }) {

    const { title, lead, background } = pageContext.frontmatter

    return (
        <PageLayout
            context={pageContext}
            title={title}
            lead={lead}
            background={background}
        >
            {children}
        </PageLayout>
    )
}
