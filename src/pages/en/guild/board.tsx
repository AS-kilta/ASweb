import React from "react"
import type { HeadFC, HeadProps, PageProps } from "gatsby"
import Board from "@src/components/profiles/Board"
import Meta from "@src/components/common/meta/meta"
import PageLayout from "@src/components/layouts/page-layout.jsx"

interface Props extends PageProps {
  pageContext: any
}

const BoardPage: React.FC<Props> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Board">
      <Board lang={pageContext.lang} />
    </PageLayout>
  )
}

export default BoardPage

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="Board" />
)
