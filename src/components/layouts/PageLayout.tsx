import React from "react"

import Navbar from "@src/components/common/Navbar"
import Hero, { HeroProps } from "@src/components/common/Hero"
import Footer from "@src/components/common/Footer"

import * as style from "./PageLayout.module.scss"

interface Props extends HeroProps {
    pageContext: PageProps["pageContext"],
    children?: React.ReactNode,
    documentStyle?: string
}

const PageLayout: React.FC<Props> = ({ pageContext, title, lead, background, heroHeight, documentStyle, children }) => {
    return (
        <div id={style.container}>
            <Navbar 
                lang={pageContext.lang}
                slug={pageContext.slug}
                translation={pageContext.translation}
            />
            <Hero title={title} lead={lead} background={background} heroHeight={heroHeight} />
            <main id={style.content} className={documentStyle ?? ""}>
                {children}
            </main>
            <Footer lang={pageContext.lang} />
        </div>
    )
}

export default PageLayout
