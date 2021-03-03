import React from "react"
import Layout from "../components/layouts/layout.js"

export default function Error404( {pageContext} ) {
  return (
    <Layout context={pageContext} title="404 - Sivua ei löydy :/">
      <p>Takaisin <a href="/">etusivulle</a>.</p>
    </Layout>
  )
}
