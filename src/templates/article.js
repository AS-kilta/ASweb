import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import NormalLayout from "@src/components/layouts/normal/normal.js"

export default function Article({ pageContext, data }) {
    const { mdx } = data
    const { frontmatter, body } = mdx

    return (
        <NormalLayout context={pageContext} title={frontmatter.title} lead={frontmatter.lead} background={frontmatter.background}>
            <article className="post">
                <div className="post-content">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
            </article>
        </NormalLayout>
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
                background
            }
        }
    }
`
