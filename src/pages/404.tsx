import React from "react"
import type { HeadFC, HeadProps, PageProps } from "gatsby"
import Meta from "@src/components/common/meta/meta"
import PageLayout from "@src/components/layouts/page-layout.jsx"

const Error404: React.FC<PageProps> = ({ pageContext }) => {
    return (
        <PageLayout pageContext={pageContext} title="404 - Sivua ei löydy :/">
            <p>
                Takaisin <a href="/">etusivulle</a>.
            </p>
        </PageLayout>
    )
}

export default Error404

export const Head: HeadFC<HeadProps> = () => (
    <Meta lang="fi" title="404" />
)
