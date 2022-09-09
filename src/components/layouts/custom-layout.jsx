import React from "react"

import Meta from "@src/components/common/meta/meta.jsx"
import Navbar from "@src/components/common/navbar/navbar.jsx"
import Footer from "@src/components/common/footer/footer.jsx"

import * as style from "./custom-layout.module.scss"

export default function CustomLayout({ pageContext, children }) {
    return (
        <div id={style.container}>
            <Meta pageContext={pageContext} />
            <Navbar pageContext={pageContext} />
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
