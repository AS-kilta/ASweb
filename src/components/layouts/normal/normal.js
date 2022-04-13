import React from "react"

import Navbar from "@src/components/common/navbar/navbar.js"
import Jumbotron from "@src/components/common/jumbotron/jumbotron.js"
import Footer from "@src/components/common/footer/footer.js"

import * as style from "./normal.module.scss"

export default function NormalLayout({ context, title, lead, background, children }) {
    return (
        <div id={style.container}>
            <Navbar context={context} />
            <Jumbotron title={title} lead={lead} background={background} />
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
