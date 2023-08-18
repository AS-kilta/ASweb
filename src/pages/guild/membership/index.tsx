import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./membership.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import SeparatedHeading1 from "@src/components/common/SeparatedHeading1"

const Membership: React.FC<PageProps> = ({ pageContext }) => {

  return (
    <PageLayout pageContext={pageContext} title='Jäsenyys' background='https://as.fi/static/abimarkkinointi/Antti_Regelin.jpg' heroHeight='60'>
        <div className={style.board}>
        </div>

        <SeparatedHeading1 id="1">
            Jäsenyyden ostaminen
        </SeparatedHeading1>


    </PageLayout>

  )
}

export default Membership

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Jäsenyys" />
)