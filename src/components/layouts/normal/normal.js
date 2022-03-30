import React from "react"

import Navbar from "../../common/navbar/navbar.js"
import Jumbotron from "../../common/jumbotron/jumbotron.js"
import Footer from "../../common/footer/footer.js"

import * as style from "./normal.module.scss"

export default function NormalLayout({ context, title, lead, children }) {
    return (
        <div id={style.container}>
            <Navbar context={context} />
            <Jumbotron title={title} lead={lead} />
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
