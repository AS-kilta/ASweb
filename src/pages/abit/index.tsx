import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import ArticleCard from "../../components/profiles/ArticleCard"
import * as style from "./abit.module.scss"

const Abit: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Abeille">
      <div style={{marginBlock: "6rem"}}>
        <h2>Opinnot</h2>
        <p>Yliopiston kurssit jaetaan pakollisiin pääainekursseihin, vapaasti valittavaan sivuaineeseen ja muihin vapaasti valittaviin kursseihin, joten pääset rakentamaan itsellesi sopivan kokonaisuuden.</p>
        <p>Opintojen ensimmäiset 3 vuotta muodostavat kandidaatintutkinnon, jonka päätteeksi kirjoitetaan kandidaatintyö. Loput 2 vuotta opinnoista kuuluvat maisterivaiheeseen, josta diplomityön kautta valmistutaan diplomi-insinööriksi. Tästä voi kätevästi siirtyä työelämään tai jatkaa vielä tohtoriopintoihin, mikäli tutkimus ja akateeminen ura kiinnostavat enemmän.</p>
        <p>Tällä tulevaisuuden opiskelualalla työllistyminen opintojen jälkeen on lähes taattu. Monet opiskelijat hakeutuvatkin alan työpaikkoihin jo opintojensa aikana.</p>
      </div>
      
      <h3 className={style.full_width_bg}>AS-killan alla on 3 eri hakukohdetta</h3>
      
      <section className={style.major}>
        <h3 className="underline">Automaatio ja robotiikka</h3>
        <div className={style.columns}>
          <div className={style.intro}>
            <p >Kiinnostaako, miten teollisuuden robottikäsivarret ja automaatiojärjestelmät toimivat? Haluatko päästä koodaamaan lähelle rautaa? Automaation piirissä pääsee tutustumaan mm. tietokoneiden ja koneiden väliseen rajapintaan ja itseohjautuviin järjestelmiin. Opintojen loppuvaiheessa onkin mahdollista erikoistua automaatio-ohjelmistojen, tehdasautomaation sekä robotiikan lisäksi myös ns. älykkäisiin tuotteisiin tai vaikka yhdistellä alueita oman kiinnostuksen mukaan.</p>
          </div>
          <div className={style.testimonials}>
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
        </div>
        <h4 className="underline">Esimerkkejä pääainekursseista</h4>
        <dl className={style.course_examples}>
          <div>
            <dt>Sähköpaja</dt>
            <dd>Kurssilla pääset rakentelemaan elektronisen laitteen ryhmäsi kanssa, ja opit perusteita mikrokontrollereista ja tuotekehityksestä.</dd>
          </div>
          <div>
            <dt>Säätötekniikka</dt>
            <dd>Kurssilla syvennytään säätö- ja systeemiteorian alkeisiin, jotka muodostavatkin vahvan pohjan erilaisiin automaatiojärjestelmiin.</dd>
          </div>
          <div>
            <dt>Robotiikka</dt>
            <dd>Kurssilla tutustutaan ja syvennytään robottien toimintaan sekä ohjelmoinnin että matematiikan tasolla.</dd>
          </div>
        </dl>
        <a className={style.find_more + " rounded-button"} target="_blank" href="https://www.aalto.fi/fi/koulutustarjonta/automaatio-ja-robotiikka-tekniikan-kandidaatti-ja-diplomi-insinoori">Lue lisää Automaation ja Robotiikan Opinnoista Intosta</a>
      </section>

      <section className={style.major}>
        <h3 className="underline">Informaatio&shy;teknologia</h3>
        <div className={" columns"}>
          <div className={style.intro}>
            <p>Verkkoon kytkettyjen laitteiden määrä kasvaa räjähdysmäisesti ja esineiden internet on kaikkien huulilla. IT-pääaineessa pääset tutustumaan, mitä trendikkäiden termien takana oikeasti tapahtuu! Saat kattavan pohjan tietoverkkojen tekniikasta, langattomasta tiedonsiirrosta, signaalin käsittelystä ja ohjelmoinnista. Opintojen loppuvaiheessa valittavanasi on useita suuntauksia perinteisemmistä tietoliikennesovellutuksista koneoppimiseen sekä signaalin, puheen ja kielen prosessointiin.</p>
          </div>
          <div className={style.testimonials}>
            <ArticleCard
              name="Niina Tapanainen"
              image="https://as.fi/static/abimarkkinointi/Niina_Tapanainen.jpg"
              link="https://www.aalto.fi/fi/uutiset/opiskelija-niina-tapanainen-opiskelen-tekniikkaa-koska-haluan-parantaa-ihmisten-elamaa"
              quote="Suosittelen alaa kenelle vain, joka tykkää ongelmanratkaisusta ja matikasta tai on kiinnostunut yhdistämään esimerkiksi humanistiset tieteet ja tekniikan."
              />
          </div> 
        </div>
        <h4 className="underline">Esimerkkejä pääainekursseista</h4>
        <dl className={style.course_examples}>
          <div>
            <dt>Sähköpaja</dt>
            <dd>Kurssilla pääset rakentelemaan elektronisen laitteen ryhmäsi kanssa, ja opit perusteita mikrokontrollereista ja tuotekehityksestä.</dd>
          </div>
          <div>
            <dt>Tietokoneverkot</dt>
            <dd>Kurssilla opiskelijat pääsevät opiskelemaan internetin perustalla toimivia teknologioita aina alhaisimmalta tasolta lähtien.</dd>
          </div>
          <div>
            <dt>Akustiikan Ja Psykoakustiikan Perusteet</dt>
            <dd>Kurssilla tutustutaan akustiikan perusteisiin sekä kuulon toimintaa.</dd>
          </div>
        </dl>
        <a className={style.find_more + " rounded-button"} target="_blank" href="https://www.aalto.fi/fi/koulutustarjonta/informaatioteknologia-tekniikan-kandidaatti-ja-diplomi-insinoori">Lue lisää Informaatioteknologian opinnoista Intosta</a>
      </section>

      <section className={style.major}>
        <h3 className="underline">Digital systems and Design</h3>
        <div className={style.columns}>
          <div className={style.intro}>
            <p>Kiinnostaako kansainvälisyys ja mahdollisuus aloittaa opiskelu englanniksi jo kandivaiheessa? Digital Systems and Design on yksi Aallon uusista ja moderneista englanninkielisistä kandipääaineista. Tämän monipuolisen pääaineen opiskelijana pääset tutustumaan esimerkiksi tietoverkkoihin, koneoppimiseen, fotoniikkaan ja käyttäjäkokemuksen (UX) suunnitteluun. Opinnot mahdollistavat sulavan siirtymän moniin eri maisteripääaineisiin sähkö- ja tietotekniikan korkeakouluissa mm. datatieteen, nanoteknologian ja automaation aloille.</p>
          </div>
          <div className={style.testimonials}>
            <ArticleCard
              name="Veera Ihalainen"
              image="https://as.fi/static/abimarkkinointi/Veera_Ihalainen.jpg"
              link="https://www.aalto.fi/fi/uutiset/opinnot-avasivat-veera-ihalaiselle-ohjelmoinnin-maailman"
              quote="Kävin englanninkielisen lukion ja halusin ehdottomasti jatkaa opiskelua englanniksi. Digitaalisuus ja innovaatiot kiinnostavat minua ja siksi halusin tekniikan alalle." />
            <ArticleCard reverse
              name="Johan Sarpoma"
              image="https://as.fi/static/abimarkkinointi/Johan_Sarpoma.jpg"
              link="https://www.aalto.fi/fi/uutiset/yliopisto-ei-ollutkaan-pelkkaa-teoriaa-englanninkielinen-kandiohjelma-ja-opiskelijaelama"
              quote="Aalto-yliopisto on lähtökohtaisesti hyvä paikka kaikelle tekemiselle ja täällä on hyvät resurssit toteuttaa vaikka mitä!" />
          </div> 
        </div>
        <h4 className="underline">Esimerkkejä pääainekursseista</h4>
        <dl className={style.course_examples}>
          <div>
            <dt>Design Thinking and Electronic Prototyping</dt>
            <dd>Kurssilla tutustutaan lähemmin tuotekehityksen eri vaiheisiin ja siihen miten eri teknologioita voidaan tässä hyödyntää.</dd>
          </div>
          <div>
            <dt>Introduction to Estimation, Detection and Learning</dt>
            <dd>Kurssi kehittää ymmärrystä ja taitoja signaalien ja parametrien arvioimiseen, sekä tapahtumien havaitsemiseen datasta.</dd>
          </div>
          <div>
            <dt>Embedded Real-Time Systems</dt>
            <dd>Kurssilla tutustutaan esimerkiksi keskeisiin tietokonearkkitehtuurikonsepteihin järjestelmien suunnittelijan näkökulmasta.</dd>
          </div>
        </dl>
        <a className={style.find_more + " rounded-button"} target="_blank" href="https://www.aalto.fi/fi/koulutustarjonta/aalto-bachelors-programme-in-science-and-technology-digital-systems-and-design">Lue lisää Digital Systems and Design opinnoista Intosta</a>
      </section>
      <section style={{marginBlock: "6rem"}}>
        <h2>Hakeminen</h2>
        <span>Automaatio ja Robotiikan sekä Informaatioteknologian pääaineisiin voi hakea seuraavilla tavoilla</span>
        <ul>
          <li><strong>Todistusvalinta:</strong> Opiskelupaikan voit saada pelkän ylioppilastodistuksen perusteella. Lisää tietoa eri aineiden pisteytyksestä, kynnysehdoista sekä vanhoista pääsyrajoista löydät DIA-yhteisvalinnan sivuilta.</li>
          <li><strong>Valintakokeet:</strong> Opiskelupaikan voit saada osallistumalla valintakokeeseen, jossa mitataan matematiikan, fysiikan, kemian ja tekniikan alan luovaa ongelmanratkaisukykyä. Matematiikasta tehtäviä on kolme ja fysiikasta, kemiasta ja ongelmanratkaisusta yhteensä kuusi joista kolmeen vastataan. Lisää tietoa valintakokeista löytyy DIA-yhteisvalinnan sivuilta.</li>
          <li><strong>Avoin väylä:</strong> Opiskelupaikan voit saada myös avoimen yliopiston kautta suorittamalla riittävän määrän opintoja riittävin arvosanoin tietyn ajan sisällä. Lisää tietoa löydät avoimen yliopiston sivuilta.</li>
        </ul>
        <p>Digital Systems and Design pääaineeseen, kuten muihinkin Aallon Bachelor's Programme in Science and Technology -kandidaattiohjelmiin tapahtuu yhteishaun ensimmäisessä vaiheessa tammikuussa. Valinta englanninkielisiin tekniikan kandidaattiopintoihin tapahtuu joko SAT-testin tulosten tai ylioppilas-, IB-, EB- tai DIA-/RP-tutkinnon arvosanojen perusteella.</p>
        <p>Lisää tietoa hakemisesta englanninkielisiin kandiohjelmiin löydät Aallon nettisivuilta ja opintopolusta. Huomioi, että haku DSD-ohjelmaan tapahtuu jo tammikuussa!</p>
      </section>
    </PageLayout>
  )
}

export default Abit

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Abeille" />
)
