import React from "react"

import Meta from "@src/components/common/meta/meta.js"
import Navbar from "@src/components/common/navbar/navbar.js"
import Footer from "@src/components/common/footer/footer.js"

import * as style from "./custom-layout.module.scss"

export default function CustomLayout({ context, children }) {
    return (
        <div id={style.container}>
            <Meta context={context} />
            <Navbar context={context} />
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
