import React from "react"
import PageLayout from "@src/components/layouts/page-layout.jsx"

export default function Error404({ pageContext }) {
    return (
        <PageLayout pageContext={pageContext} title="404 - Not Found :/">
            <p>
                Back to <a href="/en">Home</a>.
            </p>
        </PageLayout>
    )
}
