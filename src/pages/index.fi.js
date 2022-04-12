import React from "react"
import CustomLayout from "../components/layouts/custom/custom.js"
import Jumbotron from "../components/common/jumbotron/jumbotron.js"

export const frontmatter = {
    title: "Etusivu",
    slug: "/",
    translation: "/en"
}

export default function IndexPage({ pageContext }) {
    return (
        <CustomLayout context={pageContext}>
            <Jumbotron title="Automaatio- ja systeemitekniikan kilta" />
            <p>Lorem ipsum dolor sit amet.</p>
        </CustomLayout>
    )
}
