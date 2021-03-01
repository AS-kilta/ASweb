import React from "react"
import Layout from "../components/layouts/layout.js"

export default function IndexPage( {location} ) {
  return (
    <Layout location={location} title="Content">
      <p>Lorem ipsum dolor sit amet.</p>
    </Layout>
  )
}
