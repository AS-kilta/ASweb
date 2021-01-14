import React from "react"
import Layout from "../components/layouts/layout.js"

export default function Error404( {location} ) {
  return (
    <Layout location={location}>
      <h1>404 - Not Found :/</h1>
    </Layout>
  )
}
