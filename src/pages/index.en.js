import React from "react"
import CustomLayout from "../components/layouts/custom/custom.js"

export const frontmatter = {
    title: "Home",
    slug: "/en",
}

export default function IndexPage({ pageContext }) {
    return (
        <CustomLayout context={pageContext}>
            <p>Lorem ipsum dolor sit amet.</p>
        </CustomLayout>
    )
}
