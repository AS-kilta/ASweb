import React, { useState } from 'react';
import CollapseBox from '@components/common/CollapseBox';
import { BsDash, BsPlus } from 'react-icons/bs';
import * as style from './studies.module.scss';

interface Props {
  lang: 'fi' | 'en';
}

const CommitteeTipsContent: React.FC<Props> = ({ lang }) => {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleCollapse = () => {
    setAllExpanded(!allExpanded);
  };

  const toggleOnEnter = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') toggleCollapse();
  };

  const translations = {
    openAll: {
      fi: 'Avaa kaikki',
      en: 'Open all',
    },
    closeAll: {
      fi: 'Sulje kaikki',
      en: 'Close all',
    },
    intro1: {
      fi: 'Tervetuloa AS:n opintotoimikunnan vinkkisivulle, täältä löydät hyödyllisiä vinkkejä ja linkkejä opiskeluun!',
      en: 'Welcome to the protip page of the AS study committee. Here you can find useful tips and links regarding your studies.',
    },
    intro2: {
      fi: 'Tämän osion tarkoituksena on helpottaa kaikkia opiskelemaan tehokkaammin ja tuoda esille asioita, joita et välttämättä tiennyt tarvitsevasi. Tänne on siis lähinnä listattu muun muassa asioita, joita ei välttämättä löydä kovin helposti Aallon omilta sivuilta.',
      en: "The purpose of this section is to ease students to study more efficiently and bring up things that you didn't even know you needed! So this section primarily lists things including information that you can't easily find from Aalto University's own websites.",
    },
    intro3: {
      fi: 'Tämä vinkkisivu on täysin opiskelijoiden ylläpitämä, joten voit itsekin vaikuttaa tämän sivun sisältöön halutessasi. Sivun päivittelystä vastaa AS:n opintomestari opintomestari (ät) as.fi , joten otathan yhteyttä, jos haluat lisätä mielestäsi hyödyllistä materiaalia sivuille.',
      en: "This pro-tip page is only maintained by students, so you can also influence the content of this page if you wish. The updating of the page is handled by the Guild's Master of Studies opintomestari (at) as.fi, so please get in touch if you want to add beneficial material to the page.",
    },
  };

  const content = {
    fi: [
      {
        title: 'Tilat Otaniemessä',
        items: [
          { label: 'Kanttiinit', url: 'https://kanttiinit.fi', desc: ' - Listattuna Otaniemen ruokalat, niiden aukioloajat ja tarjoilu' },
          { label: 'Aalto Space', url: 'https://www.aalto.fi/en/services/aalto-space-mobile-application', desc: ' - Kännykkäsovellus, jolla voi varata tiloja kampukselta esim. ryhmätöitä varten' },
          { label: 'Usefulaaltomap', url: 'https://usefulaaltomap.fi/', desc: ' - Tarkka kartta Otaniemen rakennuksista, sen lisäksi antaa vielä lisätietoa eri rakennuksista.' },
        ],
      },
      {
        title: 'Opiskelu',
        items: [
          { label: 'download.aalto.fi', url: 'https://download.aalto.fi', desc: ' - Täältä voit ladata todella hyödyllisiä ohjelmia joihin Aalto-yliopistolla on lisenssi. Esimerkiksi MATLAB ja Microsoft Office.' },
          { label: 'vdi.aalto.fi', url: 'https://vdi.aalto.fi', desc: ' - Voit käyttää tällä sovelluksella koulun tietokoneita etänä, erittäin hyödyllinen jos esimerkiksi oman koneen ja sovellusten välillä ongelmia.' },
          { label: 'Panopto', url: '', desc: ' - Aallon videopalvelu' },
        ],
      },
      {
        title: 'Ryhmätyöskentely',
        items: [
          { label: 'Doodle', url: 'https://doodle.com/en/', desc: ' - Etsi sopivat ajat taamiselle nopeasti ja helposti!' },
          { label: 'Google Drive', url: 'https://drive.google.com', desc: ' - Monikäyttöinen työväline tiedostojen säilytykseen ja ryhmätöiden tekemiseen.' },
          { label: 'discord.com', url: 'https://discord.com', desc: ' - Hyvä sovellus ryhmätyöskentelyyn ja kommunikointiin, voi mm. Jakaa näyttöä puhelun aikana.' },
        ],
      },
      {
        title: 'Terveys',
        items: [
          { label: 'Opintopsykologi.', url: 'https://www.aalto.fi/fi/palvelut/opintopsykologien-ja-uraohjauspsykologien-yksiloohjaus', desc: ' Kannattaa olla yhteydessä matalalla kynnyksellä.' },
        ],
        extra: (
          <>
            <h3 className={style.heading4}>YTHS</h3>
            <ul>
              <li>
                <a href="https://www.yths.fi/palvelut/terveystarkastukset/suunterveyden-tarkastukset/">Hammashoito</a> (esim. viisaudenhampaat), kannattaa hakeutua vuosi ennen valmistumista!
              </li>
              <li>
                <a href="https://www.yths.fi/asiointi/yhteydenotto/">Yleis- ja mielenterveys palvelut</a> - kannattaa hakeutua ajoissa!
              </li>
              <li>Lisäksi paljon kaikkea muuta terveyteen liittyvää.</li>
            </ul>
          </>
        ),
      },
    ],
    en: [
      {
        title: 'Navigating in Otaniemi',
        items: [
          { label: 'Kanttiinit', url: 'https://kanttiinit.fi', desc: ' - All student restaurants in Otaniemi. Also opening hours and the menus can be seen here.' },
          { label: 'Aalto Space', url: 'https://www.aalto.fi/en/services/aalto-space-mobile-application', desc: ' - Mobile app to reserve rooms on campus. For example group projects.' },
          { label: 'Usefulaaltomap', url: 'https://usefulaaltomap.fi/', desc: ' - An accurate map of Otaniemi, also has good explanation of different buildings.' },
        ],
      },
      {
        title: 'Studying',
        items: [
          { label: 'download.aalto.fi', url: 'https://download.aalto.fi', desc: ' - In here you can download useful programs, which Aalto University has license for. For example MATLAB and Microsoft Office.' },
          { label: 'vdi.aalto.fi', url: 'https://vdi.aalto.fi', desc: ' - You can use this application to access school computers remotely, which is extremely useful if, for example, you encounter problems with your own computer and applications.' },
          { label: 'Panopto', url: '', desc: " - Aalto's video platform" },
        ],
      },
      {
        title: 'Groupwork',
        items: [
          { label: 'Doodle', url: 'https://doodle.com/en/', desc: ' - Find suitable times for the meeting quickly and easily!' },
          { label: 'Google Drive', url: 'https://drive.google.com', desc: ' - A versatile tool for file storage and collaborative work.' },
          { label: 'discord.com', url: 'https://discord.com', desc: ' - A great application for group collaboration and communication, which allows, among other things, screen sharing during calls.' },
        ],
      },
      {
        title: 'Healthcare',
        items: [
          { label: 'Study psychologist.', url: 'https://www.aalto.fi/en/palvelut/individual-counselling-by-study-and-career-counselling-psychologists', desc: " It's advisable to contact them with a low threshold." },
        ],
        extra: (
          <>
            <h3 className={style.heading4}>FSHS</h3>
            <ul>
              <li>
                <a href="https://www.yths.fi/en/services/health-examination/oral-health-examination/">Oral health</a> (for example. wisdom teeth removal), it might take a while after the reservation to get the appointment
              </li>
              <li>
                <a href="https://www.yths.fi/en/using-services/contact/">General and mental health services</a> - it's advisable to seek help early!
              </li>
              <li>In addition, there are many other health-related services available.</li>
            </ul>
          </>
        ),
      },
    ],
  };

  return (
    <div className={style.container}>
      <p>{translations.intro1[lang]}</p>
      <p>{translations.intro2[lang]}</p>
      <p>{translations.intro3[lang]}</p>
      <button className={style.toggleButton} onClick={toggleCollapse} onKeyDown={toggleOnEnter}>
        {allExpanded ? translations.closeAll[lang] : translations.openAll[lang]}
        {allExpanded ? <BsDash /> : <BsPlus />}
      </button>
      <div className={style.container}>
        {content[lang].map((section, idx) => (
          <CollapseBox key={idx} title={section.title} expand={allExpanded}>
            <ul>
              {section.items.map((item, iIdx) => (
                <li key={iIdx}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                  {item.desc}
                </li>
              ))}
            </ul>
            {section.extra}
          </CollapseBox>
        ))}
      </div>
    </div>
  );
};

export default CommitteeTipsContent;
