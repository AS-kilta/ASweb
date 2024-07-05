import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';
import SnapWidget from '@src/components/instagram/SnapWidget';
import EventList from '@src/components/events/EventList';
import * as style from './index.module.scss';

import heroimg from '../images/images/20201029195159-eef0d345-xx.jpg';

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Automaatio- ja systeemitekniikan kilta"
      background={heroimg}
      heroHeight="tall"
    >
      <div className={`even-columns ${style.frontpagebox}`}>
        <div style={{ textAlign: 'center' }}>
          <h2>Mikä AS?</h2>
          <p>
            AS on opiskelijajärjestö, joka yhdistää Aalto-yliopiston opiskelijoita monelta eri alalta. Kiltaamme kuuluu
            Automaation ja robotiikan, Informaatioteknologian ja Digital Systems and Designin sekä niitä lähellä olevien
            tutkinto-ohjelmien opiskelijoita. Kilta järjestää jäsenilleen vapaa-ajan toimintaa, valvoo heidän etuaan
            opintoihin liittyvissä asioissa ja ylläpitää suhteita alan yrityksiin.
          </p>
        </div>
        <StaticImage src="../images/images/20210917174935-70c53c15-xx.jpg" alt="" />
      </div>
      <div className={`even-columns ${style.frontpagebox}`}>
        <StaticImage className="no-mobile" src="../images/images/karkki_kalle.jpg" alt="" />
        <div className={style.eventsContainer}>
          <h2>Tapahtumat</h2>
          <EventList number={5} lang={pageContext.lang} />
          <a
            href="https://calendar.google.com/calendar/embed?src=as.tiedottaja%40gmail.com&ctz=Europe%2FHelsinki"
            target="_blank" rel="noreferrer"
          >
            Tapahtumakalenteri
          </a>
        </div>
      </div>
      <h2 className="center-text">Instagram</h2>
      <SnapWidget />
    </PageLayout>
  );
};

export default IndexPage;

const description: string =
  'AS on opiskelijajärjestö, joka yhdistää Aalto-yliopiston opiskelijoita monelta eri alalta. \
Kiltaamme kuuluu Automaation ja robotiikan, Informaatioteknologian ja Digital Systems and Designin \
sekä niitä lähellä olevien tutkinto-ohjelmien opiskelijoita.';

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" description={description} />;
