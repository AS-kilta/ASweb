import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';
import heropic from '@src/images/images/IMG_6067-Edit.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const Teekkariculture: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Teekkarikulttuuri" background={heropic} heroHeight="short">
      <h2 id="haalarit">Haalarit</h2>

      <div>
        <p>
          Haalarit ovat asuste, josta teekkarin tunnistaa. Haalareita käytetään monissa tilaisuuksissa, joissa liikutaan
          julkisilla paikoilla teekkareina. Jokaisella killalla on omanvärisensä haalarit. Ne ovat toisin sanoen
          teekkarin univormu.
        </p>
        <StaticImage className="image wide" src="../../images/images/yj_alkupamaus_2017-100.jpg" alt="" />
        <p>
          Haalarit on luotu kovaan käyttöön ja etenkin Wapun tienoilla ne ovat lähes välttämätön varuste jokaiselle
          teekkarille ja fuksille. Haalareiden parissa on muutenkin hauska puuhastella vapaa-aikana, esimerkiksi
          ompelemalla niihin muiden kanssa vaihdeltuja merkkejä tai haalareiden osia.
        </p>
        <p>
          Haalarit luovat yhteenkuuluvuutta ja herättävät huomiota. Muista kuitenkin, että haalareissa edustat kaikkia
          teekkareita ja teekkariutta, joten käytöksesi tulee myös olla sen mukaista. Automaatio- ja systeemitekniikan
          opiskelijoilla on violetit haalarit, joissa on musta hiha. Kun AS-ohjelmaa perustettiin tietotekniikan alle,
          ensimmäiset aASit hankkivat Tietokillan mustiin haalareihin violetit hihat erottuakseen omana joukkonaan.
          Seuraavana vuonna, kun aASit perustivat oman kiltansa, päätettiin ottaa killalle violetit haalarit mustalla
          hihalla muistoksi juuristamme Tietokillassa.
        </p>
        <p>
          Muista, että haalareita ei saa pestä! Jokainen tahra ja naarmu kertoo kokemuksista. Uudet fuksit saavat AS:n
          kauniin violetit haalarit Haalarigaalassa, joka järjestetään syyskuun lopulla.
        </p>
      </div>

      <h3 id="tilaaminen"> Tilaaminen </h3>

      <div>
        <p>
          Haalareita voi tilata orientaatioviikolla. Lisätilaukset tulevat kalliiksi, joten jos aiot tilata, se
          kannattaa tehdä heti! Tilaus on sitova.
        </p>
        <StaticImage className="image wide" src="../../images/images/photo_2025-03-11_13-58-09.jpg" alt="" />
        <p>
          Haalareiden arvo on noin 70 €, mutta kilta tukee fuksien haalaritilauksia siten, että fukseille ensimmäiset
          haalarit maksavat tästä noin puolet. Maksat haalarit sitten, kun saat ne. Hienon vyön saat ilmaiseksi, kun
          liityt TEKin jäseneksi!
        </p>
        <p>
          Jos havaitset haalareissa jotain vikaa tai valitettavaa, niin ilmoitathan asiasta heti. Valmistusvirheistä
          johtuvat viat korjataan kyllä. Kaikki osat, kuten napit ja vetoketju, eivät välttämättä kestä kovaa menoa,
          mutta ne on sangen helppo korjailla itse. Kysy vinkkejä vanhemmilta killisteiltä.
        </p>
      </div>
      <div>
        <h2 id="teekkarilakki"> Teekkarilakki </h2>

        <div>
          <p>
            Teekkarilakki on teekkarin tärkein tunnusmerkki, jonka saa painaa päähänsä ensimmäisenä Wappunaan. Nykyisen
            mallinen lakki on keikkunut teekkareiden päässä jo yli sadan vuoden ajan. Päällisin puolin se muistuttaa
            tavallista ylioppilaslakkia, mutta sen kuusi kulmaa, musta tuuhea tupsu ja hammasrataskokardi viestivät
            kaukaa kantajansa arvokkuudesta.
          </p>
        </div>
      </div>
      <h3 id="lakin-kaytto"> Lakin käyttö </h3>

      <div>
        <StaticImage id="teekkaricap" className="image box" src="../../images/images/DSC_0132.jpg" alt="" />
        <p>
          Teekkarilakin käyttökausi on toukokuusta syyskuuhun, tai tarkemmin Wapusta Lakinlaskijaisiin.
          Erikoistapauksiin, kuten excursioon tai muuhun teekkarien edustustilaisuuteen voi kuitenkin käyttökauden
          ulkopuolella hakea lakinkäyttölupaa teekkarijaostolta. Teekkarilakista ei saa tahallisesti sotkea. Ajan myötä
          teekkarilakki kuitenkin tummuu ja likaantuu käytössä, jolloin se kertoo omistajan kokeneisuudesta teekkarina.
        </p>
      </div>

      <h3 id="oikeus-lakin-kayttoon"> Oikeus lakin käyttöön </h3>

      <div>
        <p>
          Teekkarilakkia ei kuka tahansa saa käyttää - se on ansaittava. Jokainen ensimmäisenä vuotenaan kunnostautunut
          ja lakkitutkinnon suorittanut fuksi saa painaa lakin päähänsä mahdollisesti järjestettävänä Wappuna täsmälleen
          keskiyöllä. Syksyllä taas lakki lasketaan olalle yksissä vuoden suurimmissa bileissä, Lakinlaskijaisissa.
        </p>
      </div>
    </PageLayout>
  );
};

export default Teekkariculture;

const description: string = 'Lyhyesti teekkarikulttuurista fukseille';

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Teekkarikulttuuri" description={description} />;
