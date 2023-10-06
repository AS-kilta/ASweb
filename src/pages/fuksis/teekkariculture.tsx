import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./fuksis.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import SeparatedHeading1 from "@src/components/common/SeparatedHeading1"

const Teekkariculture: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title='Teekkarikulttuuri' background='https://as.fi/static/abimarkkinointi/Antti_Regelin.jpg' heroHeight='60'>

        <h1 id='haalarit' className={style.heading1}>Haalarit</h1>

        <div className={style.text}>
          <p>Haalarit ovat asuste, josta teekkarin tunnistaa. Haalareita käytetään monissa tilaisuuksissa, joissa liikutaan julkisilla paikoilla teekkareina. Jokaisella killalla on omanvärisensä haalarit. Ne ovat toisin sanoen teekkarin univormu.</p>
          <p>Haalarit on luotu kovaan käyttöön ja etenkin wapun tienoilla ne ovat lähes välttämätön varuste jokaiselle teekkarille ja fuksille. Haalareiden parissa on muutenkin hauska puuhastella vapaa-aikana, esimerkiksi ompelemalla niihin muiden kanssa vaihdeltuja merkkejä tai haalareiden osia.</p>
          <p>Haalarit luovat yhteenkuuluvuutta ja herättävät huomiota. Muista kuitenkin, että haalareissa edustat kaikkia teekkareita ja teekkariutta, joten käytöksesi tulee myös olla sen mukaista. Automaatio- ja systeemitekniikan opiskelijoilla on violetit haalarit, joissa on musta hiha. Kun AS-ohjelmaa perustettiin tietotekniikan alle, ensimmäiset aASit hankkivat Tietokillan mustiin haalareihin violetit hihat erottuakseen omana joukkonaan. Seuraavana vuonna, kun aASit perustivat oman kiltansa, päätettiin ottaa killalle violetit haalarit mustalla hihalla muistoksi juuristamme Tietokillassa.</p>
          <p>Muista, että haalareita ei saa pestä! Jokainen tahra ja naarmu kertoo kokemuksista. Uudet fuksit saavat AS:n kauniin violetit haalarit Haalarigaalassa, joka järjestetään syyskuun lopulla.</p>
        </div>

        <h2 id='tilaaminen' className={style.heading2}> Tilaaminen </h2>

        <div className={style.text}>
          <p>Haalareita voi tilata orientaatioviikolla. Lisätilaukset tulevat kalliiksi, joten jos aiot tilata, se kannattaa tehdä heti! Tilaus on sitova.</p>
          <p>Haalareiden arvo on noin 70 €, mutta kilta tukee fuksien haalaritilauksia siten, että fukseille ensimmäiset haalarit maksavat noin 25 €. Maksat haalarit sitten, kun saat ne. Muista hankkia hieno vyö itse.</p>
          <p>Jos havaitset haalareissa jotain vikaa tai valitettavaa, niin ilmoitathan asiasta heti. Valmistusvirheistä johtuvat viat korjataan kyllä. Kaikki osat, kuten napit ja vetoketju, eivät välttämättä kestä kovaa menoa, mutta ne on sangen helppo korjailla itse. Kysy vinkkejä vanhemmilta killisteiltä.</p>
        </div>

        <h1 id='teekkarilakki' className={style.heading1}> Teekkarilakki </h1>

        <div className={style.text}>
          <p>Teekkarilakki on teekkareiden tunnusmerkki, jonka saa painaa päähänsä ensimmäisenä Wappunaan. Nykyisen mallinen lakki on keikkunut teekkareiden päässä jo yli sadan vuoden ajan. Päällisin puolin se muistuttaa tavallista ylioppilaslakkia, mutta sen kuusi kulmaa, musta tuuhea tupsu ja hammasrataskokardi viestivät kaukaa kantajansa arvokkuudesta.</p>
        </div>

        <h2 id='lakin-kaytto' className={style.heading2}> Lakin käyttö </h2>

        <div className={style.text}>
          <p>Teekkarilakki on teekkareiden tunnusmerkki, jonka saa painaa päähänsä ensimmäisenä Wappunaan. Nykyisen mallinen lakki on keikkunut teekkareiden päässä jo yli sadan vuoden ajan. Päällisin puolin se muistuttaa tavallista ylioppilaslakkia, mutta sen kuusi kulmaa, musta tuuhea tupsu ja hammasrataskokardi viestivät kaukaa kantajansa arvokkuudesta.</p>
        </div>

        <h2 id='oikeus-lakin-kayttoon' className={style.heading2}> Oikeus lakin käyttöön </h2>

        <div className={style.text}>
          <p>Teekkarilakkia ei kuka tahansa saa käyttää - se on ansaittava. Jokainen ensimmäisenä vuotenaan kunnostautunut fuksi saa painaa lakin päähänsä mahdollisesti järjestettävänä Wappuna täsmälleen keskiyöllä. Syksyllä taas lakki lasketaan olalle yksissä vuoden suurimmissa bileissä, Lakinlaskijaisissa.</p>
        </div>

    </PageLayout>
  )
}

export default Teekkariculture

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Teekkarikulttuuri" />
)
