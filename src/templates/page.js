import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/layout.js"

export default function Template( {location, data} ) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout location={location} title={frontmatter.title}>
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
