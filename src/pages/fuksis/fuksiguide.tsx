import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./fuksis.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"

const Fuksiguide: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Fuksi 2023">
      <div className={style.text}>Fuksiopas sisältää kaiken, mitä sinun tarvitsee tietää tulevasta opiskelijaelämästä ja AS-killasta.</div>

      <a className={style.rounded + " rounded-button"} target="_blank" href="https://drive.google.com/file/d/14Ew0gsN5HKbIRWwXVne50ICVLe5d35TC/view?usp=sharing">Lataa PDF</a>

      <div >
        <iframe src="https://drive.google.com/file/d/14Ew0gsN5HKbIRWwXVne50ICVLe5d35TC/preview" width="100%" height="600" allow="autoplay"></iframe>
      </div>
    </PageLayout>
  )
}

export default Fuksiguide

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Fuksiopas" />
)