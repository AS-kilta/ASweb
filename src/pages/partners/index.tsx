import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import ContactCard from "../../components/profiles/ContactCard"
import CircleCard from "../../components/common/CircleCard"
import * as style from "./partners.module.scss"

const Partners: React.FC<PageProps> = ({ pageContext }) => {
  const ysvData = {
    title: 'Yrityssuhdevastaava',
    name: 'Lucas Käldström',
    email: 'yrityssuhdevastaava@as.fi',
    phone: '+358 458911847',
    localImage: 'https://as.fi/static/toimijat/2023/lucas_kaldstrom.jpg',
    telegram: '@luxask'
  };

  return (
    <PageLayout pageContext={pageContext} background="https://as.fi/static/abimarkkinointi/Antti_Regelin.jpg" heroHeight="short" title="Yrityksille">
      <div className={style.introduction}>
        <ContactCard data={ysvData}/>
        <p className={style.intro_quote}>"Hei yrityksen edustaja! Olen Automaatio- ja systeemitekniikan killan yrityssuhdevastaava. Kantsii tehä meidän kanssa yhteistyötä ja tältä sivulta löydät lisätietoa yhteistyömahdollisuuksista. Ota minuun yhteyttä niin jutellaan lisää ja räätälöidään just teille sopiva paketti!"</p>
      </div>

      <h3>Yhteistyö killan kanssa</h3>
        <p><strong>Automaatio- ja systeemitekniikan kilta on ainejärjestö Aalto-yliopiston Sähkötekniikan korkeakoulun Automaatio- ja informaatioteknologian opiskelijoille. Kilta tarjoaa jäsenilleen ympäri vuoden monenlaista ajanvietettä paitsi opinnoista rentoutumiseen, myös omien tietojensa ja taitojensa kartuttamiseen erilaisten harrastetoimintojen parissa.</strong></p>
        <p>Kiltalaisistamme kasvaa opintovuosien saatossa uusia osaajia niin automaation, robotiikan, älykkäiden laitteiden kuin myös tietoverkkojen, koneoppimisen ja signaalinkäsittelyn pariin. Useimmat työllistyvät alalleen konsulteiksi, ohjelmistokehittäjiksi tai vaativiin tutkimus- ja kehitystehtäviin.</p>
        <p>Nuoret osaajat ovat kovaa valuuttaa työmarkkinoilla ja monet meistä pyrkivätkin hankkimaan alan työkokemusta jo opiskeluaikoina. Kiltamme kautta on mahdollista tavoittaa tehokkaasti huomattava osa tulevaisuuden ammattilaisista jo varhaisessa vaiheessa. Monet yritykset ovatkin ryhtyneet yhteistyökumppaneiksemme saadakseen lisää näkyvyyttä ja tukeneet samalla kiltamme toimintaa. Alla onkin muutamia yleisimpiä yhteistyötapoja.</p>

      <h3>Yhteistyömuodot</h3>
        <div className={style.table}>
          <CircleCard title="Rekrytointi- näkyvyys" link="./partners#Rekrytointinäkyvyys" targetSelf={true}/>
          <CircleCard title="Haalarit" link="./partners#Haalarit" targetSelf={true}/>
          <CircleCard title="Excursiot" link="./partners#Excursiot" targetSelf={true}/>
          <CircleCard title="Tapahtumat" link="./partners#Tapahtumat" targetSelf={true}/>
          <CircleCard title="Vuosijuhla- edustus" link="./partners#Vuosijuhlaedustus" targetSelf={true}/>
          <CircleCard title="Näkyvyys Kiltahuoneella" link="./partners#NäkyvyysKiltahuoneella" targetSelf={true}/>
        </div>
      <h3 id="Rekrytointinäkyvyys">Rekrytointinäkyvyys</h3>
      <p>Jaamme mielellämme meitä tukeneiden yritysten rekrytointi-ilmoituksia kanavissamme.<strong> Rekrytointikanavallamme </strong>työpaikkailmoituksenne tavoittavat jopa 500 jäsentämme ja sosiaalisen mediassa tavoitamme julkaisuillamme yli tuhat ihmistä. Julkaisemme myös omaa<strong> kiltalehteämme, </strong><strong><a href="http://gt.as.fi"> GT:tä</a></strong>, josta on mahdollista saada tilaa mainoksille tai jopa artikkelille. Järjestämme myös vuosittain yhdessä tietotekniikan opiskelijoiden Tietokillan kanssa<strong> UraTiKAS </strong>-rekrymessun ja vastaavasti<strong> Yritysbrunssin </strong>Sähköinsinöörikillan ja bioinformaatioteknologian killan Inkubion kanssa. Nämä tapahtumat ovat tärkeitä kontaktifoorumeita alan yritysten ja opiskelijoiden välillä.</p>

      <h3 id="Haalarit">Haalarit</h3>
        <p><strong>Haalareista </strong>tunnistaa opiskelijan. Killassamme aloittaa joka vuosi noin 300 uutta opiskelijaa ja määrä on vuosi vuodelta ollut kasvussa. Uudet opiskelijat saavat itselleen ensimmäisen syksyn aikana opiskelijahaalarit, joissa on yhteistyökumppaniemme logoja painettuina. Logo haalareissa takaa näkyvyyden aina siellä, missä haalaripukeiset kiltalaiset ikinä kulkevatkaan.</p>

      <h3 id="Excursiot">Excursiot</h3>
        <p><strong>Excursioilla </strong>yritykset pääsevät kertomaan itsestään ja esittelemään toimintaansa omalla toimipisteellään. Matkaan lähtee joukko motivoituneita opiskelijoita, jotka haluavat tutustua potentiaaliseen työnantajaansa iloisissa merkeissä. Monesti excursioihin on liittynyt jokin toiminnallinen osuus esittelyn ohella, jolloin kokemuksesta tulee mieleenpainuvampi.</p>

      <h3 id="Tapahtumat">Tapahtumat</h3>
      <p>Opiskelijatapahtumat ovat iso osa monien opiskelijoiden arkea. Järjestämme vuoden mittaan lukuisia erilaisia tapahtumia jäsenillemme pienemmistä saunailloista aina isoihin pöytäjuhliin. Olemalla osa tapahtumiamme yrityksenne saa arvokasta näkyvyyttä opiskelijoiden keskuudessa. Yritysten edustajilla on myös mahdollisuus osallistua tapahtumiin ja päästä kohtaamaan opiskelijoitamme.</p>

      <h3 id="Vuosijuhlaedustus">Vuosijuhlaedustus</h3>
        <p>Arvokas vuosijuhlamme Stimulaatio järjestetään vuosittain marraskuussa.</p>

      <h3 id="NäkyvyysKiltahuoneella">Näkyvyys kiltahuoneella</h3>
        <p>Jotain kiltahuoneella.</p>

      <h3>…ja myös paljon muuta!</h3>
        <p>Koko kiltatoiminta on monen pienen osan summa. Ylläpidämme yliopiston tiloissa kiltahuonettamme ASkia, joka toimii kiltalaisten olohuoneena luentojen ja muun koulunkäynnin lomassa. Järjestämme vuoden mittaan lukuisia eri tapahtumia jäsenillemme pienistä saunailloista aina arvokkaaseen vuosijuhlaamme Stimulaatioon asti. Tukemalla esimerkiksi tarvehankintojamme tai tapahtumiamme voi saada näissä lisää näkyvyyttä itselleen. Viime vuosina esimerkiksi Stimulaatioon on osallistunut kumppaniyritystemme edustajia mukaan juhliin!</p>

      <h2>Kiinnostuitko? Ota yhteyttä!</h2>
        <p>Yritysyhteistyöstä vastaa meidän päässämme yrityssuhdetoimikunta, jota koordinoi yrityssuhdevastaava.</p>
    </PageLayout>
  )
}

export default Partners

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Yrityksille" />
)
