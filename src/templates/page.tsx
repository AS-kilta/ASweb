import React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"

import { MDXProvider } from "@mdx-js/react"

import PageLayout from "@src/components/layouts/page-layout.jsx"
import SeparatedHeading1 from "@src/components/common/headings/separated-heading-1"

import { createSlug } from "./helpers/slugger"
import type { Slugs } from "./helpers/slugger" 

interface Props extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        [key:string]: string;
      }
    }
  }
}

const PageTemplate: React.FC<Props> = ({ pageContext, data, children }) => {
  const { title, lead, background } = data.mdx.frontmatter
  const slugs: Slugs = {}

  return (
      <PageLayout
          pageContext={pageContext}
          title={title}
          lead={lead}
          background={background}
      >
          <MDXProvider components={{
              h1: (props) => <SeparatedHeading1 {...props} id={createSlug(props.children as string, slugs)} />,
              h2: (props) => <h2 {...props} id={createSlug(props.children as string, slugs)} className="pageHeading2" />,
              h3: (props) => <h3 {...props} id={createSlug(props.children as string, slugs)} className="pageHeading3" />,
              h4: (props) => <h4 {...props} id={createSlug(props.children as string, slugs)} className="pageHeading4" />
          }}>
              {children}
          </MDXProvider>
      </PageLayout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        lead
        background
      }
    }
  }
`

export default PageTemplate
