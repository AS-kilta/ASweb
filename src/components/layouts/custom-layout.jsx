import React from "react"

import Navbar from "@src/components/common/navbar/navbar"
import Footer from "@src/components/common/footer/footer"

import * as style from "./custom-layout.module.scss"

export default function CustomLayout({ pageContext, children }) {
    return (
        <div id={style.container}>
            <Navbar
                lang={pageContext.lang}
                slug={pageContext.slug}
                translation={pageContext.translation}
            />
            <div id={style.content}>
                {children}
            </div>
            <Footer lang={pageContext.lang} />
        </div>
    )
}
