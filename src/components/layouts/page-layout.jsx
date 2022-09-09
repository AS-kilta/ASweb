import React from "react"

import Meta from "@src/components/common/meta/meta.jsx"
import Navbar from "@src/components/common/navbar/navbar.jsx"
import Jumbotron from "@src/components/common/jumbotron/jumbotron.jsx"
import Footer from "@src/components/common/footer/footer.jsx"

import * as style from "./page-layout.module.scss"

export default function PageLayout({ pageContext, title, lead, background, children }) {
    return (
        <div id={style.container}>
            <Meta pageContext={pageContext} title={title} />
            <Navbar pageContext={pageContext} />
            <Jumbotron title={title} lead={lead} background={background} />
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
