import React from "react"
import Layout from "../components/layouts/layout.js"

export default function Error404( {location} ) {
  return (
    <Layout location={location} title="404 - Not Found :/" is404>
      <p>Back to <a href="/">Home</a>.</p>
    </Layout>
  )
}
