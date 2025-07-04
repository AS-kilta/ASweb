import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import * as style from './fuksis.module.scss';
import * as boardStyle from '../../components/profiles/Board.module.scss';
import * as ccStyle from '@src/components/common/CircleCard.module.scss';
import PageLayout from '@src/components/layouts/PageLayout';
import ContactCard from '@src/components/profiles/ContactCard';
import CircleCard from '@src/components/common/CircleCard';
import heropic from '@src/images/images/20230502154358-1c055172-xx.jpg';
import fuksicaptain1 from '@src/images/officials/2024/joel_forsstrom2.jpg';
import fuksicaptain2 from '@src/images/officials/2025/kalle_kajoniemi.jpg';

interface Props extends PageProps {
  data: ImageArrayProps;
}

const Fuksis: React.FC<Props> = ({ pageContext }) => {
  const data1 = {
    title: 'fuksikapteeni',
    name: 'Joel Forsström',
    email: 'fuksikapteeni@as.fi',
    phone: '+358 417455475',
    telegram: 'joel_forsstrom',
    picture: fuksicaptain1,
  };

  const data2 = {
    title: 'fuksikapteeni',
    name: 'Kalle Kajoniemi',
    email: 'fuksikapteeni@as.fi',
    phone: '+358 452052581',
    telegram: 'kalleinta',
    picture: fuksicaptain2,
  };

  const styleCard = { '--profile-img-size': '20rem', marginBottom: '5rem' } as React.CSSProperties;

  return (
    <PageLayout pageContext={pageContext} title="Fuksina killassa" background={heropic} heroHeight="tall">
      <div>
        <br />
        <p>
          Hei uusi Fuksi ja tervetuloa Automaatio- ja systeemitekniikan kiltaan! Näille sivuille kootaan pitkin kesää
          kaikkea materiaalia, josta on apua opintojesi alussa ja ehkäpä jopa koko ensimmäisen vuoden ajan.
          Fuksikapteenit on ne tyypit, joihin otat yhteyttä kun ihan mikä tahansa on huonosti tai muuten vaan :)
        </p>
      </div>

      <div style={styleCard} className={boardStyle.board}>
        <ContactCard data={data1} />
        <ContactCard data={data2} />
      </div>
      <div>
        <p>
          Koski asia sitten pientä juttua tai jotakin isompaa huolta, vastaa Fuksikapteeni parhaansa mukaan vaikka
          keskellä yötä. (Suositellaan kuitenkin yhteydenottoa päivisin.)
        </p>
      </div>

      <h2 id="1" className="underline">
        Ennen opintojen alkua
      </h2>

      <div className={style.cardlist}>
        <CircleCard
          title="Ota opiskelupaikka vastaan"
          link="https://opintopolku.fi/konfo/fi/sivu/paikan-vastaanotto-ja-ilmoittautuminen-korkeakouluun"
        />
        <CircleCard
          title="Ilmoittaudu läsnäolevaksi"
          link="https://www.aalto.fi/fi/hakemukset-ohjeet-ja-saannot/lukuvuosi-ilmoittautuminen"
        />
        <CircleCard
          title="Liity killan jäseneksi"
          link="https://kide.app/memberships/9864c555-8dbe-40c8-9246-064ca682e587"
        />
        <CircleCard title="Hae opiskelijakorttia" link="https://www.frank.fi/opiskelijakortti/" />
        <circle className={ccStyle.badge}>
          Hae asuntoa&nbsp;
          <a href="https://domo.ayy.fi" target="_blank" rel="noreferrer">
            AYY:ltä
          </a>
          &nbsp;tai&nbsp;
          <a href="https://hoas.fi" target="_blank" rel="noreferrer">
            HOASilta
          </a>
        </circle>
        <CircleCard title="Hae opintotukea" link="https://www.kela.fi/opintotuki" />
        <CircleCard title="Hanki matkakortti" link="https://www.hsl.fi/liput-ja-hinnat/hsl-kortti" />
        <CircleCard title="Liity AS-fuksien Telegram-ryhmään" link="./fuksis#Telegram" targetSelf />
        <CircleCard title="Hyödyllisiä linkkejä" link="./fuksis#linkkeja" targetSelf />
      </div>

      <h3 id="Telegram">Telegram</h3>
      <div>
        <p>
          Otaniemen käytetyin sovellus kommunikaatioon ja tiedotukseen. Telegram, kavereiden kesken ”tg”, on
          ehdottomasti Otaniemen teekkarin tärkein sovellus. Perustoiminnoiltaan se muistuttaa mitä tahansa
          viestisovellusta, mutta sen lisäominaisuudet ovat valloittaneet teekkareiden sydämet. Se sisältää esimerkiksi
          stickereitä, ja toimii myös netissä tai koneella!
        </p>
        <p>
          Telegramia käytetään myös oleellisena osana fuksien tiedotuksessa ja toivotaankin, että kaikki fuksit
          liittyisivät AS-fukseille tarkoitettuun Telegram-ryhmään{' '}
          <a href="https://t.me/+qQzXeRrsDu9mOWQ8">fuksit 25</a> ja DSD-fuksit myös DSD-fuksien omaan Telegram-ryhmään{' '}
          <a href="https://t.me/+m0GXxm6Fk58xZTg0">DSD fuksit 25</a>
        </p>
      </div>

      <h3 id="Kilta">Kilta ja fuksit</h3>
      <div>
        <p>
          AS-kilta on AYY:n alainen erityisasemayhdistys, joka yhdistää Automaatio ja Robotiikan, Informaatioteknologian
          sekä Digital Systems and Design pääaineiden opiskelijoita. Kiltaan saattaa kuulua myös muiden
          koulutusohjelmien opiskelijoita, joita kiinnostaa AS:n toiminta. Kilta järjestää jäsenilleen monipuolista
          ohjelmaa, valvoo heidän etujaan korkeakoulun toimielimissä ja tekee yhteistyötä muiden opiskelijayhdistyksien
          ja yrityksien kanssa.
        </p>
        <p>
          AS-kilta vastaanottaa vuosittain noin 200 fuksia, joiden integroitumisesta kiltaan huolehtii killan
          fuksikapteenit, apunaan Masters and International Student Captain, ISO-pomo ja FuksiaASistentit. Yhdessä nämä
          muodostavat killan fuksitoimikunnan, ASPU:n.
        </p>
        <p>
          ASPU:n apuna toimii vielä suuri joukko ISOja, joiden tehtäviin kuuluu tutustuttaa fuksit ensimmäisinä päivinä
          kampukseen ja opiskelijaelämään, sekä järjestää vuoden mittaan fuksiryhmilleen ajanvietettä.
        </p>
      </div>

      <h3 id="Fuksipistekortti">Fuksipistekortti</h3>
      <div>
        <p>
          Fuksipistekorttiin tarpeeksi pisteitä kerännyt fuksi on oikeutettu teekkarilakin saamiseen mahdollisesti
          järjestettävänä Wappuna. Pisteitä kertyy useasta kategoriasta, joista mainittakoon esimerkiksi
          teekkarikulttuuriin tutustuminen, opintoaiheiset tapahtumat sekä erilaiset vapaaehtoistoimet killan parissa ja
          muualla. Pistekorttia täyttäessä on hieno mahdollisuus tutustua kaikkeen siihen, mitä Aalto-yliopisto, AYY,
          killat ja Otaniemi opiskelijoille tarjoavat.
        </p>
        <p>
          Pistekortit jaetaan orientaatioviikon ensimmäisenä päivänä. Mikäli fuksi ei pääse paikalle, saa hän
          pistekortin kippareilta myöhemmin kysymällä. Pistekorttiin tehdyt merkinnät hyväksyvät kipparit, ja heiltä voi
          aina tilaisuuden tullen kysellä pisteistä. Pisteistä ei kannata stressata, sillä asioista innostumalla niitä
          tuntuu tulevan vähän joka suunnasta!
        </p>
      </div>

      <h3 id="linkkeja">Hyödyllisiä linkkejä</h3>

      <div className={style.table}>
        <div className={style.list}>
          <h4 className={style.list__title}>OPINNOT</h4>
          <ul>
            <li>
              <a href="https://mycourses.aalto.fi/" target="_blank" rel="noreferrer">
                MyCourses
              </a>{' '}
              (Täältä löytyy tietoa kursseista)
            </li>
            <li>
              <a href="https://sisu.aalto.fi/student/" target="_blank" rel="noreferrer">
                Sisu
              </a>{' '}
              (Täällä tapahtuu kursseille, välikokeisiin ja tentteihin ilmoittautuminen)
            </li>
            <li>
              <a href="https://www.aalto.fi/fi/sahkotekniikan-korkeakoulu" target="_blank" rel="noreferrer">
                Sähkötekniikan korkeakoulu
              </a>
            </li>
            <li>
              <a href="https://aalto.fi/" target="_blank" rel="noreferrer">
                Aalto-yliopisto
              </a>
            </li>
            <li>
              <a href="https://aalto.fi/fi/opiskelijan-opas/" target="_blank" rel="noreferrer">
                Opiskelijan opas
              </a>{' '}
              (Tietoa ja ohjeita opinnoista)
            </li>
            <li>
              <a href="https://www.aalto.fi/fi/palvelut/aalto-space-mobiilisovellus" target="_blank" rel="noreferrer">
                Aalto Space -sovellus
              </a>{' '}
              (Varaa Otaniemen tiloja opiskeluun)
            </li>
          </ul>
        </div>
        <div className={style.list}>
          <h4 className={style.list__title}>TERVEYDENHOITO</h4>
          <ul>
            <li>
              <a href="https://www.yths.fi/" target="_blank" rel="noreferrer">
                YTHS
              </a>
            </li>
            <li>Otaniemi: Otakaari 12</li>
            <li>Töölö: Töölönkatu 37 a</li>
          </ul>
        </div>
        <div className={style.list}>
          <h4 className={style.list__title}>LIIKKUMINEN</h4>
          <ul>
            <li>
              <a href="https://www.hsl.fi/" target="_blank" rel="noreferrer">
                HELSINGIN SEUDUN LIIKENNE
              </a>
            </li>
            <li>
              <a href="https://www.hsl.fi/liput-ja-hinnat/hsl-kortti" target="_blank" rel="noreferrer">
                Matkakortti
              </a>
            </li>
            <li>
              <a href="https://www.hsl.fi/liput-ja-hinnat/hsl-sovellus" target="_blank" rel="noreferrer">
                HSL-sovellus
              </a>
            </li>
          </ul>
        </div>
        <div className={style.list}>
          <h4 className={style.list__title}>RUOKAILU</h4>
          <ul>
            <li>
              <a href="https://kanttiinit.fi/" target="_blank" rel="noreferrer">
                Kanttiinit
              </a>{' '}
              (opiskelijaravintoloiden ruokalistat)
            </li>
          </ul>
        </div>
        <div className={style.list}>
          <h4 className={style.list__title}>ASUMINEN</h4>
          <ul>
            <li>
              <a href="https://www.ayy.fi/fi/asuminen" target="_blank" rel="noreferrer">
                AYY-asumisinfo
              </a>
            </li>
            <li>
              <a href="https://domo.ayy.fi/" target="_blank" rel="noreferrer">
                Domo-asuntopalvelu (AYY)
              </a>
            </li>
            <li>
              <a href="https://hoas.fi/" target="_blank" rel="noreferrer">
                HOAS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default Fuksis;

const description: string = 'Hei uusi fuksi! Aloita lukemalla tämä.';

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Fukseille" description={description} />;

/*
export const query = graphql`
    query ImgQuery {
        allFile(filter: {relativePath: {in: [
            "officials/2023/leevi_hormaluoma.jpg",
            "officials/2023/tuomas_nykanen.jpg"
        ]
    }}) {
            nodes {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                        )
                    }
                    base
            }
        }
    }
`
*/
