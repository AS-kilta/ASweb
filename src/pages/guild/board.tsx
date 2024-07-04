import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Board from "@src/components/profiles/Board"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"


const BoardPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Hallitus" lead="Koko hallituksen tavoittaa osoitteesta hallitus ät as.fi.">
      <Board lang={pageContext.lang} />
    </PageLayout>
  )
}

export default BoardPage

const description: string =
"Täältä löydät killan hallituksen yhteystiedot. Koko hallituksen tavoittaa osoitteesta hallitus ät as.fi."

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Hallitus" description={description} />
)
