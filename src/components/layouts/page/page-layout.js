import React from "react"

import Meta from "@src/components/common/meta/meta.js"
import Navbar from "@src/components/common/navbar/navbar.js"
import Jumbotron from "@src/components/common/jumbotron/jumbotron.js"
import Footer from "@src/components/common/footer/footer.js"

import * as style from "./page-layout.module.scss"

export default function PageLayout({ context, title, lead, background, children }) {
    return (
        <div id={style.container}>
            <Meta context={context} title={title} />
            <Navbar context={context} />
            <Jumbotron title={title} lead={lead} background={background} />
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
