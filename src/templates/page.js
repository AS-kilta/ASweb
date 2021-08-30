import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layouts/layout.js"

export default function PageTemplate({ pageContext, data }) {
    const { mdx } = data
    const { frontmatter, body } = mdx

    return (
        <Layout context={pageContext} title={frontmatter.title} lead={frontmatter.lead}>
            <article className="post">
                <div className="post-content">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
            </article>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            body
            frontmatter {
                slug
                title
                lead
            }
        }
    }
`
