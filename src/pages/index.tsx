import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/meta/meta"
import CustomLayout from "@src/components/layouts/custom-layout.jsx"
import Hero from "@src/components/common/hero/hero"
import SnapWidget from "@src/components/instagram/SnapWidget"
import EventList from "@src/components/events/EventList"

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
    return (
        <CustomLayout pageContext={pageContext}>
            <Hero title="Automaatio- ja systeemitekniikan kilta" />
            <p>Lorem ipsum dolor sit amet.</p>
            <EventList number={5} />
            <SnapWidget />
        </CustomLayout>
    )
}

export default IndexPage

export const Head: HeadFC<HeadProps> = () => (
    <Meta lang="fi" />
)
