import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./fuksis.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import ContactCard from "@src/components/profiles/ContactCard"
import SeparatedHeading1 from "@src/components/common/SeparatedHeading1"
import CircleCard from "@src/components/common/CircleCard"

const Fuksis: React.FC<PageProps> = ({ pageContext }) => {
    const data1 = {
        title: 'fuksikapteeni',
        name: 'Leevi Hormaluoma',
        email: 'fuksikapteenit@as.fi',
        phone: '+358 400366690',
        telegram: '@pelleevi'
    };

    const data2 = {
        title: 'fuksikapteeni',
        name: 'Tuomas Nykänen',
        email: 'fuksikapteenit@as.fi',
        phone: '+358 440160401',
        telegram: '@Ykanen'
    };

  return (
    <PageLayout pageContext={pageContext} title='Fuksina killassa' background='https://as.fi/static/abimarkkinointi/Antti_Regelin.jpg' heroHeight='60'>
        <div className={style.board}>
            <ContactCard data={data1}/>
            <ContactCard data={data2}/>
        </div>

        <SeparatedHeading1 id="1">
            Ennen opintojen alkua
        </SeparatedHeading1>

        <div className={style.table}>
            <CircleCard title='Ota opiskelupaikka vastaan'/>
            <CircleCard title='Ilmoittaudu läsnäolevaksi'/>
            <CircleCard title='Liity killan jäseneksi' link='https://kide.app/memberships/9864c555-8dbe-40c8-9246-064ca682e587'/>
            <CircleCard title='Hae opiskelijakorttia' link="https://www.frank.fi/opiskelijakortti/"/>
            <circle className={style.badge}>
                <text className={style.badgeText}>
                    Hae asuntoa <a href="https://domo.ayy.fi" target="_blank" className={style.badgeLink}> AYY:ltä </a> tai <a href="https://hoas.fi" target="_blank" className={style.badgeLink}> HOASilta</a></text>
            </circle>
            <CircleCard title='Hae opintotukea' link="https://www.kela.fi/opintotuki"/>
            <CircleCard title='Hanki matkakortti' link="https://www.hsl.fi/liput-ja-hinnat/hsl-kortti"/>
            <CircleCard title='Liity AS-fuksien Telegram-ryhmään' link="./fuksis#Telegram" targetSelf={true}/>
        </div>

        <SeparatedHeading1 id="Telegram">
            Telegram
        </SeparatedHeading1>
        <div className={style.text}>
            <p>Otaniemen käytetyin sovellus kommunikaatioon ja tiedotukseen. Telegram, kavereiden kesken ”tg”, on ehdottomasti Otaniemen teekkarin tärkein sovellus. Perustoiminnoiltaan se muistuttaa mitä tahansa viestisovellusta, mutta sen lisäominaisuudet ovat valloittaneet teekkareiden sydämet. Se sisältää esimerkiksi stickereitä, ja toimii myös netissä tai koneella!</p>
            <p>Telegramia käytetään myös oleellisena osana fuksien tiedotuksessa ja toivotaankin, että kaikki fuksit liittyisivät AS-fukseille tarkoitettuun Telegram-ryhmään <a href="https://bit.ly/fuksit23" className={style.link}>bit.ly/fuksit23</a> ja DSD-fuksit myös DSD-fuksien omaan Telegram-ryhmään <a href="https://bit.ly/DSDfuksis23" className={style.link}>bit.ly/DSDfuksis23</a></p>
        </div>

        <SeparatedHeading1 id="Kilta">
            Kilta ja fuksit
        </SeparatedHeading1>
        <div className={style.text}>
            <p>AS-kilta on AYY:n alainen erityisasemayhdistys, joka yhdistää Automaatio ja Robotiikan, Informaatioteknologian sekä Digital Systems and Design pääaineiden opiskelijoita. Kiltaan saattaa kuulua myös muiden koulutusohjelmien opiskelijoita, joita kiinnostaa AS:n toiminta. Kilta järjestää jäsenilleen monipuolista ohjelmaa, valvoo heidän etujaan korkeakoulun toimielimissä ja tekee yhteistyötä muiden opiskelijayhdistyksien ja yrityksien kanssa.</p>
            <p>AS-kilta vastaanottaa vuosittain noin 200 fuksia, joiden integroitumisesta kiltaan huolehtii killan fuksikapteenit, apunaan Masters and International Student Captain, ISO-pomo ja Tosi-ISOt. Yhdessä nämä muodostavat killan fuksitoimikunnan, ASPU:n.</p>
            <p>ASPU:n apuna toimii vielä suuri joukko ISOja, joiden tehtäviin kuuluu tutustuttaa fuksit ensimmäisinä päivinä kampukseen ja opiskelijaelämään, sekä järjestävät vuoden mittaan fuksiryhmilleen ajanvietettä.</p>
        </div>

        <SeparatedHeading1 id="Fuksipistekortti">
            Fuksipistekortti
        </SeparatedHeading1>
        <div className={style.text}>
            <p>Fuksipistekorttiin tarpeeksi pisteitä kerännyt fuksi on oikeutettu teekkarilakin saamiseen mahdollisesti järjestettävänä Wappuna. Pisteitä kertyy useasta kategoriasta, joista mainittakoon esimerkiksi teekkarikulttuuriin tutustuminen, opintoaiheiset tapahtumat sekä erilaiset vapaaehtoistoimet killan parissa ja muualla. Pistekorttia täyttäessä on hieno mahdollisuus tutustua kaikkeen siihen, mitä Aalto-yliopisto, AYY, killat ja Otaniemi opiskelijoille tarjoavat.</p>
            <p>Pistekortit jaetaan orientaatioviikon ensimmäisenä päivänä. Mikäli fuksi ei pääse paikalle, saa hän pistekortin kippareilta myöhemmin kysymällä. Pistekorttiin tehdyt merkinnät hyväksyvät kipparit, ja heiltä voi aina tilaisuuden tullen kysellä pisteistä. Pisteistä ei kannata stressata, sillä asioista innostumalla niitä tuntuu tulevan vähän joka suunnasta!</p>
        </div>

        <h1>Hyödyllisiä linkkejä</h1>

        <div className={style.table}>
            <div className={style.list}>
                <h3 className={style.colored_block}>OPINNOT</h3>
                <ul>
                    <li><a href="https://mycourses.aalto.fi/" target='_blank' className={style.link}>MyCourses</a> (Täältä löytyy tietoa kursseista)</li>
                    <li><a href="https://sisu.aalto.fi/student/" target='_blank' className={style.link}>Sisu</a> (Täällä tapahtuu kursseille, välikokeisiin ja tentteihin ilmoittautuminen)</li>
                    <li>Sähkötekniikan korkeakoulu</li>
                    <li><a href="https://aalto.fi/" target='_blank' className={style.link}>Aalto-yliopisto</a></li>
                    <li><a href="https://aalto.fi/fi/opiskelijan-opas/" target='_blank' className={style.link}>Opiskelijan opas</a> (Tietoa ja ohjeita opinnoista)</li>
                </ul>
            </div>
            <div className={style.list}>
                <h3 className={style.colored_block}>TERVEYDENHOITO</h3>
                <ul>
                    <li><a href="https://www.yths.fi/" target='_blank' className={style.link}>YTHS</a></li>
                    <li>Otaniemi: Otakaari 12</li>
                    <li>Töölö: Töölönkatu 37 a</li>
                </ul>
            </div>
            <div className={style.list}>
                <h3 className={style.colored_block}>LIIKKUMINEN</h3>
                <ul>
                    <li><a href="https://www.hsl.fi/" target='_blank' className={style.link}>HELSINGIN SEUDUN LIIKENNE</a></li>
                    <li><a href="https://www.hsl.fi/liput-ja-hinnat/hsl-kortti" target='_blank' className={style.link}>Matkakortti</a></li>
                    <li><a href="https://www.hsl.fi/liput-ja-hinnat/hsl-sovellus" target='_blank' className={style.link}>HSL-sovellus</a></li>
                </ul>
            </div>
            <div className={style.list}>
                <h3 className={style.colored_block}>RUOKAILU</h3>
                <ul>
                    <li><a href="https://kanttiinit.fi/" target='_blank' className={style.link}>Kanttiinit</a> (opiskelijaravintoloiden ruokalistat)</li>
                </ul>
            </div>
            <div className={style.list}>
                <h3 className={style.colored_block}>ASUMINEN</h3>
                <ul>
                    <li><a href="https://www.ayy.fi/fi/asuminen" target='_blank' className={style.link}>AYY-asumisinfo</a></li>
                    <li><a href="https://domo.ayy.fi/" target='_blank' className={style.link}>Domo-asuntopalvelu (AYY)</a></li>
                    <li><a href="https://hoas.fi/" target='_blank' className={style.link}>HOAS</a></li>
                </ul>
            </div>
        </div>

    </PageLayout>

  )
}

export default Fuksis

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Fukseille" />
)
