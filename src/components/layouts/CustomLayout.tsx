import React from "react"

import Navbar from "@src/components/common/Navbar"
import Footer from "@src/components/common/Footer"

import * as style from "./CustomLayout.module.scss"

interface Props {
    pageContext: PageProps["pageContext"],
    children?: React.ReactNode
}

const CustomLayout: React.FC<Props> = ({ pageContext, children }) => {
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

export default CustomLayout
