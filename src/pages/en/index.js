import React from "react"
import CustomLayout from "@src/components/layouts/custom/custom-layout.js"
import Jumbotron from "@src/components/common/jumbotron/jumbotron.js"

export default function IndexPage({ pageContext }) {
    return (
        <CustomLayout context={pageContext}>
            <Jumbotron title="Guild of Automation and Systems Technology" />
            <p>Lorem ipsum dolor sit amet.</p>
        </CustomLayout>
    )
}
