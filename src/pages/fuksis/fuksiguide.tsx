import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"

const Fuksiguide: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Fuksiopas 2024" lead="Fuksiopas sisältää kaiken, mitä sinun tarvitsee tietää tulevasta opiskelijaelämästä ja AS-killasta.">
      <div style={{width: "100%"}}>
        <a style={{marginBlock: "1rem"}} className="rounded-button"
            target="_blank" href="https://drive.google.com/file/d/1o2nUcE9bMQtjhzx45XA6PhdsAbkzPWmt/view?usp=sharing">
              Lataa PDF
          </a>
          <iframe src="https://drive.google.com/file/d/1o2nUcE9bMQtjhzx45XA6PhdsAbkzPWmt/preview" width="100%" height="800" allow="autoplay"></iframe>
      </div>
    </PageLayout>
  )
}

export default Fuksiguide

const description: string = "Fuksiopas sisältää kaiken, mitä sinun tarvitsee tietää tulevasta opiskelijaelämästä ja AS-killasta."

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Fuksiopas" description={description} />
)
