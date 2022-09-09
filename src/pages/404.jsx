import React from "react"
import PageLayout from "@src/components/layouts/page-layout.jsx"

export default function Error404({ pageContext }) {
    return (
        <PageLayout pageContext={pageContext} title="404 - Sivua ei löydy :/">
            <p>
                Takaisin <a href="/">etusivulle</a>.
            </p>
        </PageLayout>
    )
}
