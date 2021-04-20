import React from "react"
import Layout from "../components/layouts/layout.js"

export default function Error404({ pageContext }) {
    return (
        <Layout context={pageContext} title="404 - Not Found :/">
            <p>
                Back to <a href="/en">Home</a>.
            </p>
        </Layout>
    )
}
