import React from "react"
import type { HeadFC, HeadProps, PageProps } from "gatsby"
import Meta from "@src/components/common/meta/meta"
import CustomLayout from "@src/components/layouts/custom-layout.jsx"
import Hero from "@src/components/common/hero/hero"

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
    return (
        <CustomLayout pageContext={pageContext}>
            <Hero title="Guild of Automation and Systems Technology" />
            <p>Lorem ipsum dolor sit amet.</p>
        </CustomLayout>
    )
}

export default IndexPage

export const Head: HeadFC<HeadProps> = () => (
    <Meta lang="en" />
)