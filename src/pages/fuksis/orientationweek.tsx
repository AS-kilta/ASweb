import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import heropic from "@src/images/images/IMG_6067-Edit.jpg" //pitää vaihtaa
import { StaticImage } from "gatsby-plugin-image"

const Orientaatioviikko: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title='Orientaatioviikko'
      background={heropic}
      heroHeight='short'
    >

        <h2 id='Orientaatioviikon aikataulu'>aikataulu</h2>

        <div>
          <p>Haalarit ovat asuste, josta teekkarin tunnistaa. Haalareita käytetään monissa tilaisuuksissa, joissa liikutaan julkisilla paikoilla teekkareina. Jokaisella killalla on omanvärisensä haalarit. Ne ovat toisin sanoen teekkarin univormu.</p>
          <StaticImage className="image wide" src='../../images/images/yj_alkupamaus_2017-100.jpg' alt=''/>
        </div>
    </PageLayout>
  )
}

export default Orientaatioviikko

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Orientaatioviikko" />
)
