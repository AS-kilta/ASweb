import React from "react"

import Navbar from "../common/navbar/navbar.js"
import Footer from "../common/footer/footer.js"

import * as style from "./layout.module.scss"

export default function Layout({ context, title, lead, children }) {
    return (
        <div id={style.container}>
            <Navbar context={context} />
            <div id={style.jumbotron}>
                {title && <h1>{title}</h1>}
                {lead &&
                    <>
                        <div className={style.separator}></div>
                        <p className={style.lead}>{lead}</p>
                    </>}
            </div>
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
