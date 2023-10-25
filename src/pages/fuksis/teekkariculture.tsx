import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./fuksis.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import heropic from "@src/images/images/IMG_6067-Edit.jpg"

const Teekkariculture: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title='Teekkarikulttuuri' background={heropic} heroHeight='short'>

        <h2 id='haalarit'>Haalarit</h2>

        <div>
          <p>Haalarit ovat asuste, josta teekkarin tunnistaa. Haalareita käytetään monissa tilaisuuksissa, joissa liikutaan julkisilla paikoilla teekkareina. Jokaisella killalla on omanvärisensä haalarit. Ne ovat toisin sanoen teekkarin univormu.</p>
          <p>Haalarit on luotu kovaan käyttöön ja etenkin wapun tienoilla ne ovat lähes välttämätön varuste jokaiselle teekkarille ja fuksille. Haalareiden parissa on muutenkin hauska puuhastella vapaa-aikana, esimerkiksi ompelemalla niihin muiden kanssa vaihdeltuja merkkejä tai haalareiden osia.</p>
          <p>Haalarit luovat yhteenkuuluvuutta ja herättävät huomiota. Muista kuitenkin, että haalareissa edustat kaikkia teekkareita ja teekkariutta, joten käytöksesi tulee myös olla sen mukaista. Automaatio- ja systeemitekniikan opiskelijoilla on violetit haalarit, joissa on musta hiha. Kun AS-ohjelmaa perustettiin tietotekniikan alle, ensimmäiset aASit hankkivat Tietokillan mustiin haalareihin violetit hihat erottuakseen omana joukkonaan. Seuraavana vuonna, kun aASit perustivat oman kiltansa, päätettiin ottaa killalle violetit haalarit mustalla hihalla muistoksi juuristamme Tietokillassa.</p>
          <p>Muista, että haalareita ei saa pestä! Jokainen tahra ja naarmu kertoo kokemuksista. Uudet fuksit saavat AS:n kauniin violetit haalarit Haalarigaalassa, joka järjestetään syyskuun lopulla.</p>
        </div>

        <h3 id='tilaaminen'> Tilaaminen </h3>

        <div>
          <p>Haalareita voi tilata orientaatioviikolla. Lisätilaukset tulevat kalliiksi, joten jos aiot tilata, se kannattaa tehdä heti! Tilaus on sitova.</p>
          <p>Haalareiden arvo on noin 70 €, mutta kilta tukee fuksien haalaritilauksia siten, että fukseille ensimmäiset haalarit maksavat noin 25 €. Maksat haalarit sitten, kun saat ne. Muista hankkia hieno vyö itse.</p>
          <p>Jos havaitset haalareissa jotain vikaa tai valitettavaa, niin ilmoitathan asiasta heti. Valmistusvirheistä johtuvat viat korjataan kyllä. Kaikki osat, kuten napit ja vetoketju, eivät välttämättä kestä kovaa menoa, mutta ne on sangen helppo korjailla itse. Kysy vinkkejä vanhemmilta killisteiltä.</p>
        </div>

        <h2 id='teekkarilakki'> Teekkarilakki </h2>

        <div>
          <p>Teekkarilakki on teekkareiden tunnusmerkki, jonka saa painaa päähänsä ensimmäisenä Wappunaan. Nykyisen mallinen lakki on keikkunut teekkareiden päässä jo yli sadan vuoden ajan. Päällisin puolin se muistuttaa tavallista ylioppilaslakkia, mutta sen kuusi kulmaa, musta tuuhea tupsu ja hammasrataskokardi viestivät kaukaa kantajansa arvokkuudesta.</p>
        </div>

        <h3 id='lakin-kaytto'> Lakin käyttö </h3>

        <div>
          <p>Teekkarilakki on teekkareiden tunnusmerkki, jonka saa painaa päähänsä ensimmäisenä Wappunaan. Nykyisen mallinen lakki on keikkunut teekkareiden päässä jo yli sadan vuoden ajan. Päällisin puolin se muistuttaa tavallista ylioppilaslakkia, mutta sen kuusi kulmaa, musta tuuhea tupsu ja hammasrataskokardi viestivät kaukaa kantajansa arvokkuudesta.</p>
        </div>

        <h3 id='oikeus-lakin-kayttoon'> Oikeus lakin käyttöön </h3>

        <div>
          <p>Teekkarilakkia ei kuka tahansa saa käyttää - se on ansaittava. Jokainen ensimmäisenä vuotenaan kunnostautunut fuksi saa painaa lakin päähänsä mahdollisesti järjestettävänä Wappuna täsmälleen keskiyöllä. Syksyllä taas lakki lasketaan olalle yksissä vuoden suurimmissa bileissä, Lakinlaskijaisissa.</p>
        </div>

    </PageLayout>
  )
}

export default Teekkariculture

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Teekkarikulttuuri" />
)
