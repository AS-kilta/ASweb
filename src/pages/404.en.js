import React from "react"
import NormalLayout from "@src/components/layouts/normal/normal.js"

export default function Error404({ pageContext }) {
    return (
        <NormalLayout context={pageContext} title="404 - Not Found :/">
            <p>
                Back to <a href="/en">Home</a>.
            </p>
        </NormalLayout>
    )
}
