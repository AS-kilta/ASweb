import React from "react"

import PageLayoutMdx from "@src/components/layouts/page-layout-mdx.jsx"

// Wrap MDX pages in defined layout, default to PageLayoutMdx

export const wrapPageElement = ({ element, props }) => {
    if (props.pageContext.frontmatter) {
        /* Switch statement for future, if more layouts will be implemented...
        switch (props.pageContext.frontmatter.layout) {
            case "layout-name-here":
                return <LayoutComponent pageContext={props.pageContext}>{element}</LayoutComponent>
            default:
                return <PageLayoutMdx pageContext={props.pageContext}>{element}</PageLayoutMdx>            
        }
        */
        return <PageLayoutMdx pageContext={props.pageContext}>{element}</PageLayoutMdx>
    }
}
