import React from "react"

import Navbar from "../common/navbar/navbar.js"
import Footer from "../common/footer/footer.js"

import "./layout.css"

export default function Layout({ context, title, children }) {
    return (
        <div id="container">
            <Navbar context={context} />
            <div id="jumbotron">
                {title && <h1>{title}</h1>}
            </div>
            <div id="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}
