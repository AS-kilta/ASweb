import React from "react"
import CustomLayout from "@src/components/layouts/custom-layout.jsx"
import Jumbotron from "@src/components/common/jumbotron/jumbotron.jsx"

export default function IndexPage({ pageContext }) {
    return (
        <CustomLayout pageContext={pageContext}>
            <Jumbotron title="Guild of Automation and Systems Technology" />
            <p>Lorem ipsum dolor sit amet.</p>
        </CustomLayout>
    )
}
