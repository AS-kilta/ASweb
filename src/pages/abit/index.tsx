import React from "react"
import type { PageProps } from "gatsby"
import PageLayout from "@src/components/layouts/page-layout.jsx"
import ArticleCard from "../../components/profiles/ArticleCard"
import * as style from "./abit.module.scss"


const Abit: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Abeille">
      <div>
        <ArticleCard
          name="Antti Regelin"
          image="https://as.fi/static/abimarkkinointi/Antti_Regelin.jpg"
          link="https://www.aalto.fi/fi/uutiset/opiskelija-antti-regelin-aallossa-meita-kannustetaan-olemaan-luovia-ja-rohkeita"
          quote="Yksi unohtumaton kurssi oli ensimmäisen vuoden Sähköpaja-kurssi, jossa rakennetaan eri alojen opiskelijoista koostuvissa ryhmissä erilaisia sähköisiä laitteita. Kurssiprojektina rakensimme ryhmäni kanssa Bluetooth-yhteydellä toimivan minisähköauton." />
        <ArticleCard reverse
          name="Zachary Burda"
          image="https://as.fi/static/abimarkkinointi/Zachary_Burda.jpg"
          link="https://www.aalto.fi/fi/uutiset/opiskelija-zachary-burda-haluaa-kehittaa-ihmisten-arkea-helpottavia-robotteja"
          quote="Haaveeni on kehittää robotteja, jotka voivat olla vuorovaikutuksessa ihmisten kanssa ja suoriutua arkipäiväisistä askareista." />
      </div> 
    </PageLayout>
  )
}

export default Abit;
