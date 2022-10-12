import React from "react"

import Meta from "@src/components/common/meta/meta"
import Navbar from "@src/components/common/navbar/navbar"
import Footer from "@src/components/common/footer/footer"

import * as style from "./custom-layout.module.scss"

export default function CustomLayout({ pageContext, children }) {
    return (
        <div id={style.container}>
            <Meta lang={pageContext.lang} />
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
