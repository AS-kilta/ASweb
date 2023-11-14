import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import * as style from "./stimu.modules.scss"
import { StaticImage } from "gatsby-plugin-image"


const BoardPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Stimulaatio hype!!">
        <div id="stimu">
            <StaticImage className={style.stimu}
                src="../../images/logo_tekstilla.svg"
                alt="Something's wrong I can feel it..."
                placeholder="none"
            />
        </div>
    </PageLayout>
  )
}

export default BoardPage

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Stimulaatio" />
)
