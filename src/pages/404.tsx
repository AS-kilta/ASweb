import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"

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
