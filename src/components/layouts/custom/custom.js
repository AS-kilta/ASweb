import React from "react"

import Navbar from "@src/components/common/navbar/navbar.js"
import Footer from "@src/components/common/footer/footer.js"

import * as style from "./custom.module.scss"

export default function CustomLayout({ context, children }) {
    return (
        <div id={style.container}>
            <Navbar context={context} />
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
