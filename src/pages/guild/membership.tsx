import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./membership.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import SeparatedHeading1 from "@src/components/common/SeparatedHeading1"

const Membership: React.FC<PageProps> = ({ pageContext }) => {

  return (
    <PageLayout pageContext={pageContext} title='Jäsenyys' background='https://as.fi/static/abimarkkinointi/Antti_Regelin.jpg' heroHeight="1">

    <div className={style.textDiv}>
      <p>Killan varsinaiseksi jäseneksi voidaan hyväksyä kaikki AYY:n jäsenistöön kuuluvat henkilöt. Killan jäsenenä saat äänioikeuden kiltakokouksissa, oikeuden osallistua killan tapahtumiin ja käyttää kiltahuonetta sekä pääsyn killan sähköpostilistoille. Jäseneksi pääset alla olevia ohjeita noudattamalla. Lisätietoa killan jäsenyydestä löytyy killan säännöistä luvusta 2.</p>
    </div>

    <a className={style.coloredBlock + " rounded-button"} target="_blank" href="https://kide.app/memberships/9864c555-8dbe-40c8-9246-064ca682e587">Liity jäseneksi</a>

    <SeparatedHeading1 id="1">Varsinainen jäsenyys</SeparatedHeading1>

    <div className={style.textDiv}>
      <p>Killan varsinaiseksi jäseneksi voidaan hyväksyä kaikki AYY:n jäsenistöön kuuluvat henkilöt. Killan jäsenenä saat äänioikeuden kiltakokouksissa, oikeuden osallistua killan tapahtumiin ja käyttää kiltahuonetta sekä pääsyn killan sähköpostilistoille. Jäseneksi pääset alla olevia ohjeita noudattamalla Lisätietoa killan jäsenyydestä löytyy killan säännöistä luvusta 2.</p>
    </div>

    <SeparatedHeading1 id="2">Ulkojäsenyys</SeparatedHeading1>

    <div className={style.textDiv}>
      <p>Killan ulkojäseneksi voidaan hyväksyä killan toiminnasta kiinnostunut henkilö, jota ei voida hyväksyä varsinaiseksi tai vanhaksi jäseneksi. Jäseneksi haetaan samoin kuin varsinaiseksi jäseneksi ja jäsenmaksun suuruus on sama.</p>
    </div>

    <SeparatedHeading1 id="3">Vanha jäsenyys</SeparatedHeading1>

    <div className={style.textDiv}>
      <p>Killan vanhaksi jäseneksi voi hakea henkilö, joka on ollut killan varsinainen jäsen, mutta ei ole enää AYY:n jäsen. Vanhaksi jäseneksi voit hakea täyttämällä vanhan jäsenen lomakkeen. Vanhan jäsenen ei tarvitse maksaa jäsenmaksua.</p>
    </div>

    </PageLayout>
  )
}

export default Membership

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Jäsenyys" />
)