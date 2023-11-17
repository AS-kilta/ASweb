import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"

const Abit: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Did you mean IB?">
    </PageLayout>
  )
}

export default Abit

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="Did you mean IB?" robots="none"/>
)
