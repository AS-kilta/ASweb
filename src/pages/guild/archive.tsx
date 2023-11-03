import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import Archive from "@src/components/archive/Archive"
import CollapseText from "@src/components/common/CollapseText"
import * as archiveStyle from "@src/components/archive/Archive.module.scss"

import heropic from "@src/images/images/archive.jpg"

const ArchivePage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Arkisto"
      lead="Täältä löydät kaikki killan hallitukset, toimihenkilöt ja myönnetyt kunnianosoitukset vuosien varrelta."
      background={heropic}
    >
      <Archive lang={pageContext.lang} />
      <h2>Kunniajäsenet</h2>
      <CollapseText title="Annika Salama">
        <p className={archiveStyle.description}>
          Tämä varsinkin usealle hieman vanhemmalle opiskelijalle tuttu nainen on muodostunut monelle killistille ehkä hieman jonkinlaiseksi äitihahmoksi, joka varjelee viatonta opiskelijaa ison instituution byrokratialta, ja löytää helposti ratkaisun ongelmaan kuin ongelmaan silloin kun hätä on suurin. Tälle leppoisalle ja maanläheiselle henkilölle meidän opiskelijoiden asiat ovat ihan oikeasti tärkeitä - voisi jopa leikkimielisesti sanoa, että moni tässäkin killassa on valmistumisensa tälle henkilölle velkaa.
        </p>
        <p className={archiveStyle.description}>
          Hän käyttää sujuvasti ASkicamia sekä kiltahuoneen puhelinta, ja poikkeaa välillä jopa kahville. Hän on auttanut aASeja eteenpäin opinnoissaan jo vuodesta 2009 alkaen. Vaikka hän majaileekin nykyään Otakaari 5:n tiloissa, on hän silti ja totisesti ansainnut paikkansa meidän violetissa killassamme, ja joka ikisen vanhaa tutkinto-ohjelmaa käyvän aASin sydämessä.
        </p>
      </CollapseText>
    </PageLayout>
  )
}

export default ArchivePage

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Arkisto" />
)
