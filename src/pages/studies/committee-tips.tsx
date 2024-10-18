import React, { useState } from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import * as style from './studies.module.scss';
import PageLayout from '@src/components/layouts/PageLayout';
// import { StaticImage } from "gatsby-plugin-image"
import CollapseBox from '@src/components/common/CollapseBox';
import { BsDash, BsPlus } from 'react-icons/bs';

interface Props extends PageProps {
  data: ImageArrayProps;
}

const CommitteeTips: React.FC<Props> = ({ pageContext }) => {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleCollapse = () => {
    setAllExpanded(!allExpanded);
  };

  const toggleOnEnter = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') toggleCollapse();
  };

  const translations: Translations = {
    openAll: {
      fi: 'Avaa kaikki',
      en: 'Open all',
    },
    closeAll: {
      fi: 'Sulje kaikki',
      en: 'Close all',
    },
  };

  const lang = pageContext.lang;

  return (
    <PageLayout pageContext={pageContext} title="OPTMK:n vinkit">
      <div className={style.container}>
        <p>
          Tervetuloa AS:n opintotoimikunnan vinkkisivulle, täältä löydät hyödyllisiä vinkkejä ja linkkejä opiskeluun!
        </p>
        <p>
          Tämän osion tarkoituksena on helpottaa kaikkia opiskelemaan tehokkaammin ja tuoda esille asioita, joita et
          välttämättä tiennyt tarvitsevasi. Tänne on siis lähinnä listattu muun muassa asioita, joita ei välttämättä
          löydä kovin helposti Aallon omilta sivuilta.
        </p>
        <p>
          Tämä vinkkisivu on täysin opiskelijoiden ylläpitämä, joten voit itsekin vaikuttaa tämän sivun sisältöön
          halutessasi. Sivun päivittelystä vastaa AS:n opintomestari opintomestari (ät) as.fi , joten otathan yhteyttä,
          jos haluat lisätä mielestäsi hyödyllistä materiaalia sivuille.
        </p>
        <button className={style.toggleButton} onClick={toggleCollapse} onKeyDown={toggleOnEnter}>
          {allExpanded ? translations.closeAll[lang] : translations.openAll[lang]}
          {allExpanded ? <BsDash /> : <BsPlus />}
        </button>
        <div className={style.container}>
          <CollapseBox title={'Tilat Otaniemessä'} expand={allExpanded}>
            <ul>
              <li>
                <a href="https://kanttiinit.fi">Kanttiinit</a> - Listattuna Otaniemen ruokalat, niiden aukioloajat ja
                tarjoilu
              </li>
              <li>
                <a href="https://www.aalto.fi/en/services/aalto-space-mobile-application">Aalto Space</a> -
                Kännykkäsovellus, jolla voi varata tiloja kampukselta esim. ryhmätöitä varten
              </li>
              <li>
                <a href="https://usefulaaltomap.fi/">Usefulaaltomap</a> - Tarkka kartta Otaniemen rakennuksista, sen
                lisäksi antaa vielä lisätietoa eri rakennuksista.
              </li>
            </ul>
          </CollapseBox>

          <CollapseBox title={'Opiskelu'} expand={allExpanded}>
            <ul>
              <li>
                <a href="https://download.aalto.fi">download.aalto.fi</a> - Täältä voit ladata todella hyödyllisiä
                ohjelmia joihin Aalto-yliopistolla on lisenssi. Esimerkiksi MATLAB ja Microsoft Office.
              </li>
              <li>
                <a href="https://vdi.aalto.fi">vdi.aalto.fi</a> - Voit käyttää tällä sovelluksella koulun tietokoneita
                etänä, erittäin hyödyllinen jos esimerkiksi oman koneen ja sovellusten välillä ongelmia.
              </li>
              <li>Panopto - Aallon videopalvelu</li>
            </ul>
          </CollapseBox>

          <CollapseBox title={'Ryhmätyöskentely'} expand={allExpanded}>
            <ul>
              <li>
                <a href="https://doodle.com/en/">Doodle</a> - Etsi sopivat ajat taamiselle nopeasti ja helposti!
              </li>
              <li>
                <a href="https://drive.google.com">Google Drive</a> - Monikäyttöinen työväline tiedostojen säilytykseen
                ja ryhmätöiden tekemiseen.
              </li>
              <li>
                <a href="https://discord.com">discord.com</a> - Hyvä sovellus ryhmätyöskentelyyn ja kommunikointiin, voi
                mm. Jakaa näyttöä puhelun aikana.
              </li>
            </ul>
          </CollapseBox>

          <CollapseBox title={'Terveys'} expand={allExpanded}>
            <ul>
              <li>
                <a href="https://www.aalto.fi/fi/palvelut/opintopsykologien-ja-uraohjauspsykologien-yksiloohjaus">
                  Opintopsykologi.
                </a>{' '}
                Kannattaa olla yhteydessä matalalla kynnyksellä.
              </li>
            </ul>
            <h3 className={style.heading4}>YTHS</h3>
            <ul>
              <li>
                <a href="https://www.yths.fi/palvelut/terveystarkastukset/suunterveyden-tarkastukset/">Hammashoito</a>{' '}
                (esim. viisaudenhampaat), kannattaa hakeutua vuosi ennen valmistumista!
              </li>
              <li>
                {' '}
                <a href="https://www.yths.fi/asiointi/yhteydenotto/">Yleis- ja mielenterveys palvelut</a> - kannattaa
                hakeutua ajoissa!
              </li>
              <li>Lisäksi paljon kaikkea muuta terveyteen liittyvää.</li>
            </ul>
          </CollapseBox>
        </div>
      </div>
    </PageLayout>
  );
};

export default CommitteeTips;

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="OPTMK:n vinkit" />;
