import React from "react"
import CustomLayout from "@src/components/layouts/custom-layout.jsx"
import Hero from "@src/components/common/hero/hero"

export default function IndexPage({ pageContext }) {
    return (
        <CustomLayout pageContext={pageContext}>
            <Hero title="Guild of Automation and Systems Technology" />
            <p>Lorem ipsum dolor sit amet.</p>
        </CustomLayout>
    )
}
