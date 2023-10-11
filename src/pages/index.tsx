import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import CustomLayout from "@src/components/layouts/CustomLayout"
import Hero from "@src/components/common/Hero"
import SnapWidget from "@src/components/instagram/SnapWidget"
import EventList from "@src/components/events/EventList"
import * as style from './index.module.scss'

import heroimg from "../images/images/20201029195159-eef0d345-xx.jpg"
import pohina1 from "../images/images/20210916110956-5b58846e-xx.jpg"
import festival from "../images/images/20210916111426-b9d67578-xx.jpg"

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
    return (
        <CustomLayout pageContext={pageContext}>
            <Hero title="Automaatio- ja systeemitekniikan kilta" background={heroimg}/>
            <div className={`even-columns ${style.frontpagebox}`}>
                <div>
                    <h2>Mikä AS?</h2>
                    <p>AS on opiskelijajärjestö, joka yhdistää Aalto-yliopiston opiskelijoilta monelta eri alalta. Kiltaamme kuuluu Automaation ja robotiikan, Informaatioteknologian ja Digital Systems and Designin sekä niitä lähellä olevien tutkinto-ohjelmien opiskelijoita. Kilta järjestää jäsenilleen vapaa-ajan toimintaa, valvoo heidän etuaan opintoihin liittyvissä asioissa ja ylläpitää suhteita alan yrityksiin.</p>
                </div>
                <img src={festival} alt="" />
            </div>
            <div className={`even-columns ${style.frontpagebox}`}>
                <img className="no-mobile" src={pohina1} alt="" />
                <div className={style.eventsContainer}>
                    <h2>Tapahtumat</h2>
                    <EventList number={5} lang={pageContext.lang} />
                </div>
            </div>
            <SnapWidget />
        </CustomLayout>
    )
}

export default IndexPage

export const Head: HeadFC<HeadProps> = () => (
    <Meta lang="fi" />
)
