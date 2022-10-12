import React from "react"
import CustomLayout from "@src/components/layouts/custom-layout.jsx"
import Hero from "@src/components/common/hero/hero"

export default function IndexPage({ pageContext }) {
    return (
        <CustomLayout pageContext={pageContext}>
            <Hero title="Automaatio- ja systeemitekniikan kilta" />
            <p>Lorem ipsum dolor sit amet.</p>
        </CustomLayout>
    )
}
