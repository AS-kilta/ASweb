import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import Archive from "@src/components/archive/Archive"
import * as archiveStyle from "@src/components/archive/Archive.module.scss"

const ArchivePage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Archive"
      lead="Here you can find the former boards, officials and awarded accolades from the past years."
    >
      <Archive lang={pageContext.lang} />
      <h2>Honorary members</h2>
      <div className={archiveStyle.noDescription}>
        Annika Salama
      </div>
    </PageLayout>
  )
}

export default ArchivePage

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="Archive" />
)
