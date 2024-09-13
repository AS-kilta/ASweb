import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import * as style from './studies.module.scss';
import PageLayout from '@src/components/layouts/PageLayout';
import { StaticImage } from 'gatsby-plugin-image';

interface Props extends PageProps {
  data: ImageArrayProps;
}

const Studies: React.FC<Props> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Opinnot">
      <div className={style.table}>
        <div className={style.list}>
          <p></p>
          <p>
            AS:n opintoasioista huolehtii opintotoimikunta opintomestarin johdolla. Opintotoimikunta ajaa AS:n
            opiskelijoiden asiaa opintoasioihin liittyen korkeakoulun ja yliopiston eri toimielimissä, sekä suoraan
            koulun henkilökunnan kanssa. Opintotoimikunta välittää myös tärkeää tietoa yliopistolta ja korkeakoululta
            opiskelijoille. Jos haluat antaa palautetta opintoihin liittyvistä asioista tai haluat opintotoimikunnan
            tietävän jostain opintoihin liittyvästä epäkohdasta, voit ottaa yhteyttä opintomestariin (opintomestari ät
            as.fi)
          </p>
          <h2>Tenttiarkisto</h2>
          <div>
            <a href="https://tenttiarkisto.fi" target="_blank" rel="noreferrer">
              tenttiarkisto.fi
            </a>{' '}
            on sivusto, josta löytyy kurssien vanhoja tenttejä. Se on siis erinomainen sivusto opiskella tuleviin
            tentteihin. Tenttiarkisto on opiskelijoiden ylläpitämä sivusto, johon opiskelijät itsenäisesti skannaavat ja
            julkaiset tenttejä eri kursseilta.
          </div>

          <h2>Opintojen UKK</h2>
          <h3>1. En pääse tentteihin/labroihin, mitä teen?</h3>
          <p>
            Ilmoita esteestä mahdollisimman ajoissa kurssin opetushenkilökunnalle (yhteystiedot löytyvät MyCoursesista),
            ja kysy mahdollisuutta korvaaviin suorituksiin (rästitenttipäivät, rästilabrat, suullinen tentti tai muu
            korvaava suoritus).
          </p>

          <h3>
            2. Kurssin luennot olivat epäselviä/epäloogisia tai minulla olisi opetusta parantava kehitysehdotus, miten
            toimin?
          </h3>
          <p>
            Kurssien lopussa on yleensä kurssipalaute johon voi antaa kehitysehdotuksia opetuksesta. Voit myös
            tarvittaessa olla yhteydessä opintomestariin (opintomestari ät as.fi) tai käyttää telegrammissa bottia
            @ASFeedbackStudiesBot Jokaiselle luennoitsijalle tai kurssihenkilökuntaan kuuluvalle voi myös antaa
            rakentavaa palautetta kasvotusten tai sähköpostin välityksellä.
          </p>

          <h3>3. Haluaisin lähteä vaihtoon, mitä teen?</h3>
          <p>
            Vaihdon päähaku on tammikuussa ja rästihaku syyskuussa. Vaihto-opiskelusta löytyy paljon tietoa
            Aalto.fi-sivuilta. Vaihto-opiskeluiden järjestäminen tapahtuu opiskelijan toimesta, eli sinun tehtäväsi on
            etsiä sinulle sopiva vaihto-ohjelma, ja hoitaa opinto-suunnitelma sekä kohteeseen hakeminen. Innoitusta ja
            tietoa suosituista vaihtokohteista saa säännöllisin väliajoin järjestettävistä vaihtoinfoista sekä tietenkin
            vanhemmilta opiskelijoilta, jotka ovat olleet vaihdossa. Kannattaa myös huolehtia opintojen rahoituksesta,
            sekä tutustua vaihtostipendeihin ja niiden ehtoihin!
          </p>

          <h3>
            4. Olen lähdössä inttiin, pidän taukoa opinnoistani ja/tai en muuten vain tiedä, miten saan opintoni
            etenemään, mistä saan apua?
          </h3>
          <p>
            Käytännön asioissa, kuten lukujärjestyksen tai oman HOPSin kasaamisessa parhaiten auttaa opintoneuvojat:
            Piia Ylitalo (piia.ylitalo ät aalto.fi) tai Tuula Noponen (tuula.noponen ät aalto.fi)
          </p>
        </div>

        <div className={style.sidePanel}>
          <h2>Hyödyllisiä linkkejä</h2>
          <div className={style.sideList}>
            Kandidaattiohjelma:
            <li>
              <a
                href="https://www.aalto.fi/fi/ohjelmat/sahkotekniikan-kandidaattiohjelma/opetussuunnitelma-2020-2022"
                target="_blank"
                rel="noreferrer"
              >
                ELEC kandidaattiohjelmat 2020-2022
              </a>
            </li>
            <li>
              <a
                href="https://www.aalto.fi/fi/ohjelmat/sahkotekniikan-kandidaattiohjelma/opetussuunnitelma-2022-2024"
                target="_blank"
                rel="noreferrer"
              >
                ELEC kandidaattiohjelmat 2022-2024
              </a>
            </li>
            <li>
              <a
                href="https://www.aalto.fi/fi/ohjelmat/sahkotekniikan-kandidaattiohjelma/yhteystiedot"
                target="_blank"
                rel="noreferrer"
              >
                Yhteystietoja kandiohjelman opintoasioiden hoitamiseen
              </a>
            </li>
          </div>

          <div className={style.sideList}>
            Maisteriohjelma:
            <li>
              <a
                href="https://www.aalto.fi/en/programmes/masters-programme-in-automation-and-electrical-engineering"
                target="_blank"
                rel="noreferrer"
              >
                Automation and Electrical Engineering
              </a>
            </li>
            <li>
              <a
                href="https://www.aalto.fi/en/programmes/masters-programme-in-computer-communication-and-information-sciences/curriculum-2022-2024#2-acoustics-and-audio-technology--aat-"
                target="_blank"
                rel="noreferrer"
              >
                Computer, Communication and Information Sciences
              </a>
            </li>
            <li>
              <a
                href="https://www.aalto.fi/en/programmes/masters-programme-in-electronics-and-nanotechnology/curriculum-2022-2024#4-micro--and-nanoelectronic-circuit-design"
                target="_blank"
                rel="noreferrer"
              >
                Electronics and Nanotechnology
              </a>
            </li>
          </div>

          <div className={style.sideList}>
            Vaihto-opinnot:
            <li>
              <a href="https://www.aalto.fi/fi/muut-opinnot/vaihto-opinnot" target="_blank" rel="noreferrer">
                Vaihto-opinnoista yleisesti{' '}
              </a>
            </li>
            <li>
              <a href="https://www.aalto.fi/fi/muut-opinnot/vaihto-opiskelun-apurahat" target="_blank" rel="noreferrer">
                Apurahat vaihto-opintoihin{' '}
              </a>
            </li>
            <li>
              <a href="https://www.ayy.fi/fi/hae-rahallista-tukea/stipendit" target="_blank" rel="noreferrer">
                AYY:n vaihtostipendi
              </a>
            </li>
          </div>

          <div className={style.sideList}>
            Muuta:
            <li>
              <a href="https://courses.aalto.fi/" target="_blank" rel="noreferrer">
                Kurssihaku
              </a>
            </li>
            <li>
              <a href="https://www.aalto.fi/fi/sivuaineet#/" target="_blank" rel="noreferrer">
                Sivuaineet
              </a>
            </li>
            <p></p>
          </div>
          <StaticImage className="tall" src="../../images/images/labrahommii.png" alt="" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Studies;

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Opinnot" />;
