import React from "react"
import PageLayout from "@src/components/layouts/page/page-layout.js"

export default function Error404({ pageContext }) {
    return (
        <PageLayout context={pageContext} title="404 - Sivua ei löydy :/">
            <p>
                Takaisin <a href="/">etusivulle</a>.
            </p>
        </PageLayout>
    )
}
