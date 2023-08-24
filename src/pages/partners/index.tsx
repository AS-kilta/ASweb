import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import ContactCard from "../../components/profiles/ContactCard"
import * as style from "./partners.module.scss"

const Partners: React.FC<PageProps> = ({ pageContext }) => {
  const lucasData = {
    title: 'Yrityssuhdevastaava',
    name: 'Lucas Käldström',
    email: 'yrityssuhdevastaava@as.fi',
    phone: '+358 458911847',
    picture: 'https://as.fi/static/toimijat/2023/lucas_kaldstrom.jpg',
    telegram: '@luxask'
  };

  return (
    <PageLayout pageContext={pageContext} background="https://as.fi/static/abimarkkinointi/Antti_Regelin.jpg" heroHeight="60" title="Yrityksille">
      <div style={{marginBlock: "6rem"}}>
        <strong>Automaatio- ja systeemitekniikan kilta on ainejärjestö Aalto-yliopiston Sähkötekniikan korkeakoulun Automaatio- ja informaatioteknologian opiskelijoille. Kilta tarjoaa jäsenilleen ympäri vuoden monenlaista ajanvietettä paitsi opinnoista rentoutumiseen, myös omien tietojensa ja taitojensa kartuttamiseen erilaisten harrastetoimintojen parissa.</strong>
        <p>Kiltalaisistamme kasvaa opintovuosien saatossa uusia osaajia niin automaation, robotiikan, älykkäiden laitteiden kuin myös tietoverkkojen, koneoppimisen ja signaalinkäsittelyn pariin. Useimmat työllistyvät alalleen konsulteiksi, ohjelmistokehittäjiksi tai vaativiin tutkimus- ja kehitystehtäviin.</p>
        <p>Nuoret osaajat ovat kovaa valuuttaa työmarkkinoilla ja monet meistä pyrkivätkin hankkimaan alan työkokemusta jo opiskeluaikoina. Kiltamme kautta on mahdollista tavoittaa tehokkaasti huomattava osa tulevaisuuden ammattilaisista jo varhaisessa vaiheessa. Monet yritykset ovatkin ryhtyneet yhteistyökumppaneiksemme saadakseen lisää näkyvyyttä ja tukeneet samalla kiltamme toimintaa. Alla onkin muutamia yleisimpiä yhteistyötapoja.</p>
      </div>
      
      <section className={style.major}>
        <h3>Excursiot</h3>
        <div className={style.columns}>
          <div className={style.intro}>
            <p>
              <strong>Excursioilla </strong> 
              yritykset pääsevät kertomaan itsestään ja esittelemään toimintaansa omalla toimipisteellään. Matkaan lähtee joukko motivoituneita opiskelijoita, jotka haluavat tutustua potentiaaliseen työnantajaansa iloisissa merkeissä. Monesti excursioihin on liittynyt jokin toiminnallinen osuus esittelyn ohella, jolloin kokemuksesta tulee mieleenpainuvampi.
            </p>
          </div>
        </div>
        <h3>Haalarit</h3>
        <div className={style.columns}>
          <div className={style.intro}>
            <p>
              <strong>Haalareista </strong>
              tunnistaa opiskelijan. Killassamme aloittaa joka vuosi yli 100 uutta opiskelijaa ja määrä on vuosi vuodelta ollut kasvussa. Uudet opiskelijat saavat itselleen ensimmäisen syksyn aikana opiskelijahaalarit, joissa on yhteistyökumppaniemme logoja painettuina. Logo haalareissa takaa näkyvyyden aina siellä, missä haalaripukeiset kiltalaiset ikinä kulkevatkaan.
            </p>
          </div>
        </div>
        <h3>Rekrytointinäkyvyys</h3>
        <div className={style.columns}>
          <div className={style.intro}>
            <p>
              Jaamme mielellämme meitä tukeneiden yritysten rekrytointi-ilmoituksia medioissamme. 
              <strong> Rekrytointilistallamme </strong> 
              työpaikkailmoituksenne tavoittavat kaikki kiltamme jäsenet. Julkaisemme myös neljä kertaa vuodessa omaa
              <strong> kiltalehteämme, </strong>
              <strong>
                <a href="http://gt.as.fi"> GT:tä</a>
              </strong>
              , josta on mahdollista saada tilaa mainoksille tai jopa artikkelille. Järjestämme myös vuosittain yhdessä tietotekniikan opiskelijoiden Tietokillan kanssa
              <strong> UraTiKAS </strong>
              -rekrymessun ja vastaavasti
              <strong> Yritysbrunssin </strong>
              Sähköinsinöörikillan ja bioinformaatioteknologian killan Inkubion kanssa. Nämä tapahtumat ovat tärkeitä kontaktifoorumeita alan yritysten ja opiskelijoiden välillä.
            </p>
          </div>
        </div>
        <h3>…ja myös paljon muuta!</h3>
        <div className={style.columns}>
          <div className={style.intro}>
            <p>
              Koko kiltatoiminta on monen pienen osan summa. Ylläpidämme yliopiston tiloissa kiltahuonettamme ASkia, joka toimii kiltalaisten olohuoneena luentojen ja muun koulunkäynnin lomassa. Järjestämme vuoden mittaan lukuisia eri tapahtumia jäsenillemme pienistä saunailloista aina arvokkaaseen vuosijuhlaamme Stimulaatioon asti. Tukemalla esimerkiksi tarvehankintojamme tai tapahtumiamme voi saada näissä lisää näkyvyyttä itselleen. Viime vuosina esimerkiksi Stimulaatioon on osallistunut kumppaniyritystemme edustajia mukaan juhliin!
            </p>
          </div>
        </div>
        <h2>Kiinnostuitko? Ota yhteyttä!</h2>
        <div className={style.columns}>
          <div className={style.intro}>
            <p>
              Yritysyhteistyöstä vastaa meidän päässämme yrityssuhdetoimikunta, jota koordinoi yrityssuhdevastaava.
            </p>
          </div>
        </div>
      </section>
      <div className={style.testimonials}>
        <ContactCard data={lucasData}/>
      </div>
    </PageLayout>
  )
}

export default Partners

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Partners" />
)
