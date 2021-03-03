import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/layout.js"

export default function PageTemplate( {pageContext, data} ) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout context={pageContext} title={frontmatter.title}>
            <article className="post">
                <div 
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
            }
        }
    }
`
