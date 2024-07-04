import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import { StaticImage } from "gatsby-plugin-image"

const stylep= {"margin-top": "1.5rem"} as React.CSSProperties;

const ArchivePage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Kilta" documentStyle="document">
      <div>
        <StaticImage className="image wide up" src='../../images/images/IMG_0141.jpg' alt=''/>
        <p style={stylep}>Killan tarkoituksena on yhdistää automaatio- ja robotiikan, informaatioteknologian ja Digital Systems and Design opiskelijoita sekä edistää heidän yhteiskunnallisia, sosiaalisia ja henkisiä, sekä opiskeluun ja opiskelijan asemaan yliopistossa ja yhteiskunnassa liittyviä pyrkimyksiä, sekä kasvattaa heistä teekkari- ja ammatti-identiteetiltään vahvoja osaajia. Kilta toimii Aalto-yliopiston ylioppilaskunnan AYY:n piirissä.</p>
      </div>

      <h2> Viestintä </h2>
      
      <p>Kilta käyttää useita eri viestintävälineitä killan sisäiseen viestintään. Merkittävimmät viestintäkanavat ovat:</p>

      <div>
        <ul>
          <li><p><strong>Sähköpostilistat</strong>: Viikkotiedotteet ja muut viralliset tiedotteet lähetetään sähköpostilistoille. Sähköpostilistoille lähetettävästä viikkotiedotteesta saattaa myös bongata viikon koirakuvan!</p></li>
          <StaticImage className="image box up" src='../../images/images/dogoftheweek.jpg' alt=''/>
          <li><p><strong>Telegram</strong>: Yleiset keskustelukanavat löytyvät Telegramista. Kanavia löytyy sekä yleistä keskustelua että erillisiä aihepiirejä, kuten opiskelua ja liikuntatoimintaa varten. Lisäksi virallisista killan asioista keskustelua varten on erillinen AivanVirallinen -kanava. Killan yhteistyökumppanien rekryilmoitukset lähetetään erillisen rekrykanavan kautta.</p></li>
          <li><p><strong>Foorumi</strong>: Keskustelufoorumi löytyy osoitteesta forum.as.fi. Sitä käytetään pääasiassa viralliseen keskusteluun esimerkiksi kiltakokousten ja -vaalien yhteydessä.</p></li>
        </ul>
      </div>

      <p>Lisäksi ASkista löytyy ilmoitustaulu hallituksen tiedotteita sekä muita tärkeitä ilmoitusasioita varten. Linkit keskustelukanaville löytyvät viikkotiedotteista tai kysymällä viestintämestarilta.</p>
      <p>Jos haluat saada viestisi killan tiedotukseen, ota yhteyttä viestintämestariin. Löydät hallituksen yhteystiedot <a target='_self' href='/guild/board'>hallitussivulta</a>.</p>

      <h2> ASki </h2>
      <div>
        <p>Kiltahuoneemme ASki sijaitsee <a target='_self' href='https://www.openstreetmap.org/#map=19/60.1873/24.81847'>TUAS-talon ensimmäisessä kerroksessa</a>, kirjaston takaisen käytävän päässä. ASkin nimi juontaa juurensa killan alkuajoilta, kun kiltahuoneena oli pikkuinen huone Tietotalossa. Nykyiselle paikalleen ASki muutti TUAS-talon auetessa 2003. Avajaisia vietettiin vuosijuhlaviikolla 17.11.2003 ja nykyisin ASkin synttäreitä juhlitaan noihin aikoihin.</p>
        <StaticImage className="image wide" src='../../images/images/IMG_0624.JPG' alt=''/>
      </div>
      <p>ASki on kiltalaisten olohuone, jossa voi paitsi kuluttaa aikaa luentojen välillä myös esimerkiksi pelata lauta- tai videopelejä ja lukea lehtiä. Tiedetään ASkissa joskus jonkun myös opiskelleen. ASkin pieni kioski palvelee kiltalaisia ja kiltahuoneelta saakin kahvin ja teen lisäksi purtavaa niin pieneen kuin suureenkin suolaisen ja makean nälkään.</p>
      <p>ASkissa on myös killan varastokomero, josta hallitus ja toimikunnan jäsenet voivat myydä esimerkiksi killan haalarimerkkejä ja historiikkeja.</p>

      <h2> Kultainen Tomaatti aka GT </h2>
      <p>Kultainen tomaatti eli GT on killan virallinen lehti, joka ilmestyy x kertaa vuodessa. Lehteen voivat kirjoittaa kaikki kiltalaiset, joten jos lehden tekeminen kiinnostaa, kannattaa ottaa yhteyttä Kultaiseen päätoimittajaan: gt@as.fi. GT:n ensimmäinen julkaisu ilmestyi vuonna 2000.</p>

      <h2> Hallitus </h2>
      <p>Hallituksen jäsenten sähköpostiosoitteet ovat muotoa hallitusvirka@as.fi. Koko hallituksen tavoittaa sähköpostiosoitteesta hallitus (at) as.fi. Löydät hallituksen yhteystiedot <a target='_self' href='/guild/board'>hallitussivulta</a>.</p>

    </PageLayout>
  )
}

export default ArchivePage

const description: string =
"Killan tarkoituksena on yhdistää automaatio- ja robotiikan, informaatioteknologian ja Digital Systems and Design \
opiskelijoita sekä edistää heidän yhteiskunnallisia, sosiaalisia ja henkisiä, sekä opiskeluun ja opiskelijan asemaan \
yliopistossa ja yhteiskunnassa liittyviä pyrkimyksiä, sekä kasvattaa heistä teekkari- ja ammatti-identiteetiltään vahvoja osaajia."

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Kilta" description={description} />
)
