import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
//import heropic from "@src/images/images/IMG_6067-Edit.jpg" //pitää vaihtaa
import { StaticImage } from "gatsby-plugin-image"

const Orientaatioviikko: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Orientaatioviikko"
      //      background={heropic}
      heroHeight="short"
    >
      <h2 id="Orientaatioviikon aikataulu"></h2>

      <div className="image-container">
        <p>Orientaatioviikko on hektistä aikaa, tekemistä on paljon!</p>
        <p>
          Tässä orientaatioviikon aikataulu, päivittelemme tätä parhaamme mukaan
          kesän aikana.
        </p>
        <StaticImage
          className="centered-image"
          src="../../images/images/DSD_timetable.jpg"
          alt='"DSD_timetable'
        />
      </div>
      <div>
        <p>
          If you have any questions about the schedule or starting your studies,
          don't be afraid to message us at fuksikapteenit@as.fi or on telegram
          @fuksikapteenit
        </p>

        <p>Nauttikaa kesästä!</p>
        <p>Fuksikapteenisi: Eero ja Jenny</p>
      </div>
    </PageLayout>
  )
}

export default Orientaatioviikko

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Orientaatioviikko" />
)
