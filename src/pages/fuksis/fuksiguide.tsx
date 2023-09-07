import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./fuksis.module.scss"
import SeparatedHeading1 from "@src/components/common/SeparatedHeading1"
import CustomLayout from "@src/components/layouts/CustomLayout"

const Fuksiguide: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <CustomLayout pageContext={pageContext}>
        <div className={style.board}>
            <SeparatedHeading1 id='fuksiopas'> Fuksiopas 2023 </SeparatedHeading1>
        </div>
        <div className={style.text}>Fuksiopas sisältää kaiken, mitä sinun tarvitsee tietää tulevasta opiskelijaelämästä ja AS-killasta.</div>

    </CustomLayout>
  )
}

export default Fuksiguide

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Fuksiopas" />
)
