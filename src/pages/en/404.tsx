import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/meta/meta"
import PageLayout from "@src/components/layouts/PageLayout"

const Error404: React.FC<PageProps> = ({ pageContext }) => {
    return (
        <PageLayout pageContext={pageContext} title="404 - Not Found :/">
            <p>
                Back to <a href="/">Home</a>.
            </p>
        </PageLayout>
    )
}

export default Error404

export const Head: HeadFC<HeadProps> = () => (
    <Meta lang="en" title="404" />
)
