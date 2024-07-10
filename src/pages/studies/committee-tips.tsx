import React, { useState } from 'react';
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./studies.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import { StaticImage } from "gatsby-plugin-image"
import CollapseBox from '@src/components/common/CollapseBox';
import { BsDash, BsPlus } from 'react-icons/bs';

interface Props extends PageProps {
    data: ImageArrayProps
}

const CommitteeTips: React.FC<Props> = ({ pageContext, data }) => {
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleCollapse = () => {
    setAllExpanded(!allExpanded)
  }

  const toggleOnEnter = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter")
      toggleCollapse()
  }

  return (
    <PageLayout
      pageContext={pageContext}
      title="OPTMK:n vinkit"
    >
      <button className={style.toggleButton} onClick={toggleCollapse} onKeyDown={toggleOnEnter}>
        {allExpanded ? translations.closeAll[lang] : translations.openAll[lang]}
        {allExpanded ? <BsDash /> : <BsPlus />}
      </button>
      <p>Tervetuloa AS:n opintotoimikunnan vinkkisivulle, täältä löydät hyödyllisiä vinkkejä ja linkkejä
        opiskeluun!</p>
      <p>Tämän osion tarkoituksena on helpottaa kaikkia opiskelemaan tehokkaammin ja tuoda esille asioita, joita et
        välttämättä tiennyt tarvitsevasi. Tänne on siis lähinnä listattu muun muassa asioita, joita ei välttämättä
        löydä kovin helposti Aallon omilta sivuilta.</p>
      <p>Tämä vinkkisivu on täysin opiskelijoiden ylläpitämä, joten voit itsekin vaikuttaa tämän sivun sisältöön
        halutessasi. Sivun päivittelystä vastaa AS:n opintomestari(en tiiä sähköpostii :D), joten otathan yhteyttä,
        jos haluat lisätä mielestäsi hyödyllistä materiaalia sivuille.</p>

      <CollapseBox title={"Tilat Otaniemessä"}>
        <ul>
          <li>Kanttiinit - Listattuna Otaniemen ruokalat, niiden aukioloajat ja tarjoilu</li>
          <li>Aalto Space - Kännykkäsovellus, jolla voi varata tiloja kampukselta esim. ryhmätöitä varten</li>
          <li>Usefulaaltomap - Tarkka kartta Otaniemen rakennuksista, sen lisäksi antaa vielä lisätietoa eri
            rakennuksista.
          </li>
        </ul>
      </CollapseBox>

      <CollapseBox title={"Opiskelu"}>
        <ul>
          <li>download.aalto.fi - Täältä voit ladata todella hyödyllisiä ohjelmia joihin Aalto-yliopistolla on lisenssi.
            Esimerkiksi MATLAB ja Microsoft Office.
          </li>
          <li>vdi.aalto.fi - Voit käyttää tällä sovelluksella koulun tietokoneita etänä, erittäin hyödyllinen jos
            esimerkiksi oman koneen ja sovellusten välillä ongelmia.
          </li>
          <li>Panopto - Aallon videopalvelu</li>
        </ul>
      </CollapseBox>

      <CollapseBox title={"Ryhmätyöskentely"}>
        <ul>
          <li>Doodle - Etsi sopivat ajat taamiselle nopeasti ja helposti!</li>
          <li>Google Drive - Monikäyttöinen työväline tiedostojen säilytykseen ja ryhmätöiden tekemiseen.</li>
          <li>discord.com - Hyvä sovellus ryhmätyöskentelyyn ja kommunikointiin, voi mm. Jakaa näyttöä puhelun aikana.
          </li>
        </ul>
      </CollapseBox>

      <CollapseBox title={"Terveys"}>
        <ul>
          <li>Opintopsykologi. Kannattaa olla yhteydessä matalalla kynnyksellä.</li>
        </ul>
        <h3>YTHS</h3>
        <ul>
          <li>Hammashoito (esim. viisaudenhampaat), kannattaa hakeutua vuosi ennen valmistumista!</li>
          <li>Yleis- ja mielenterveys palvelut - kannattaa hakeutua ajoissa!</li>
          <li>Lisäksi paljon kaikkea muuta terveyteen liittyvää.</li>
        </ul>
      </CollapseBox>
    </PageLayout>
  )
}

export default CommitteeTips;

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="OPTMK:n vinkit" />
)
