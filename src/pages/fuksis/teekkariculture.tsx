import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./fuksis.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import ContactCard from "@src/components/profiles/ContactCard"
import SeparatedHeading1 from "@src/components/common/SeparatedHeading1"

const Teekkariculture: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title='Teekkarikulttuuri' background='https://as.fi/static/abimarkkinointi/Antti_Regelin.jpg' heroHeight='60'>
        <div className={style.board}>
            <SeparatedHeading1 id='asd'> Lorem Ipsum </SeparatedHeading1>
        </div>


    </PageLayout>
  )
}

export default Teekkariculture

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Teekkarikulttuuri" />
)
