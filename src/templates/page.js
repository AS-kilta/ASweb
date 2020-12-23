import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/layout.js"

export default function Template({data}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <article className="post">
                <h1 className="post-title">{frontmatter.title}</h1>
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
