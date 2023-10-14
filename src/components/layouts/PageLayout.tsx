import React from "react"

import Navbar from "@src/components/common/Navbar"
import Hero from "@src/components/common/Hero"
import Footer from "@src/components/common/Footer"

import * as style from "./PageLayout.module.scss"

interface Props {
    pageContext: PageProps["pageContext"],
    title: string,
    lead?: string,
    background?: string,
    children?: React.ReactNode,
    heroHeight?: "short" | "tall"
}

const PageLayout: React.FC<Props> = ({ pageContext, title, lead, background, heroHeight, children }) => {
    return (
        <div id={style.container}>
            <Navbar 
                lang={pageContext.lang}
                slug={pageContext.slug}
                translation={pageContext.translation}
            />
            <Hero title={title} lead={lead} background={background} heroHeight={heroHeight} />
            <main id={style.content}>
                {children}
            </main>
            <Footer lang={pageContext.lang} />
        </div>
    )
}

export default PageLayout
