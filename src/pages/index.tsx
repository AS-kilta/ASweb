import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import CustomLayout from "@src/components/layouts/CustomLayout"
import Hero from "@src/components/common/Hero"
import SnapWidget from "@src/components/instagram/SnapWidget"
import EventList from "@src/components/events/EventList"

import * as spinner from "./spinner.module.css"
import Logo from "@src/images/as.logo.tekstilla.musta.svg"

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
    return (
        <CustomLayout pageContext={pageContext}>
            <Hero title="Automaatio- ja systeemitekniikan kilta" />
            <div className={spinner.logo}>
                <Logo />
            </div>
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
