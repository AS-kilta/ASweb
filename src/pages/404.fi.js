import React from "react"
import NormalLayout from "../components/layouts/normal/normal.js"

export default function Error404({ pageContext }) {
    return (
        <NormalLayout context={pageContext} title="404 - Sivua ei löydy :/">
            <p>
                Takaisin <a href="/">etusivulle</a>.
            </p>
        </NormalLayout>
    )
}
