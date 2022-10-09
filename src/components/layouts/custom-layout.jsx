import React from "react"

import Meta from "@src/components/common/meta/meta.jsx"
import Navbar from "@src/components/common/navbar/navbar"
import Footer from "@src/components/common/footer/footer.jsx"

import * as style from "./custom-layout.module.scss"

export default function CustomLayout({ pageContext, children }) {
    return (
        <div id={style.container}>
            <Meta pageContext={pageContext} />
            <Navbar
                lang={pageContext.lang}
                slug={pageContext.slug}
                translation={pageContext.translation}
            />
            <div id={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
