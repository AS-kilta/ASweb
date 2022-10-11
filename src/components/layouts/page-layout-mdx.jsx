/* eslint-disable jsx-a11y/heading-has-content */

import React from "react"
import { MDXProvider } from "@mdx-js/react"

import PageLayout from "./page-layout.jsx"
import SeparatedHeading1 from "@src/components/common/headings/separated-heading-1"

import { createSlug } from "./helpers/slugger.js"

export default function PageLayoutMdx({ pageContext, children }) {

    const { title, lead, background } = pageContext.frontmatter

    const slugs = {}

    return (
        <PageLayout
            pageContext={pageContext}
            title={title}
            lead={lead}
            background={background}
        >
            <MDXProvider components={{
                h1: (props) => <SeparatedHeading1 {...props} id={createSlug(props.children, slugs)} />,
                h2: (props) => <h2 {...props} id={createSlug(props.children, slugs)} className="pageHeading2" />,
                h3: (props) => <h3 {...props} id={createSlug(props.children, slugs)} className="pageHeading3" />,
                h4: (props) => <h4 {...props} id={createSlug(props.children, slugs)} className="pageHeading4" />
            }}>
                {children}
            </MDXProvider>
        </PageLayout>
    )
}
