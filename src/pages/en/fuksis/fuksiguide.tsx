import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"

const Fuksiguide: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Fuksiguide 2023" lead="The fuksiguide has everything that you should know about the upcoming student life and the AS guild.">
      <div style={{width: "100%"}}>
        <a style={{marginBlock: "1rem"}} className="rounded-button"
          target="_blank" href="https://drive.google.com/file/d/14Ew0gsN5HKbIRWwXVne50ICVLe5d35TC/view?usp=sharing">
            Download PDF
        </a>
        <iframe src="https://drive.google.com/file/d/1pgZRF3xgids06hv_BGdpZhYR0FbFg-Zt/preview" width="100%" height="800" allow="autoplay"></iframe>
      </div>
    </PageLayout>
  )
}

export default Fuksiguide

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="Fuksiguide" />
)
