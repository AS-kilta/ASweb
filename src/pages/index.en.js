import React from "react"
import Layout from "../components/layouts/layout.js"

export const frontmatter = {
    title: "Home",
    slug: "/en",
}

export default function IndexPage({ pageContext }) {
    return (
        <Layout context={pageContext} title="Home">
            <p>Lorem ipsum dolor sit amet.</p>
        </Layout>
    )
}
