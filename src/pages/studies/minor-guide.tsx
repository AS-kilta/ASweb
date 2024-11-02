import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';
import Minors from '@src/components/minors/Minors';
import { StaticImage } from 'gatsby-plugin-image';
import * as style from './studies.module.scss';

import heropic from '@src/images/images/archive.jpg';

const MinorsPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Sivuaineopas"
      lead="Täältä löydät tietoa suosituista sivuaineista. Valitettavasti sivuaineita koskevat tiedot perustuvat vanhaan opetussuunnitelmaan."
      background={heropic}
    >
      <div className={style.table}>
        <div className={style.list}>
          <br />
          <br />
          <p>
            Tervetuloa lukemaan AS:n omaa sivuaineopasta! Opas on luotu yksittäisten kiltalaisten toimesta, ja
            pohjautuen heidän kokemuksiin eri opinnoista.
          </p>
          <p>Tästä suuret kiitokset jokaiselle joka on antanut oman panoksensa tämän luomiseen.</p>
          <p>
            Oppaassa on vasta kaikkein suosituimmat sivuaineet, eli mikäli sinulla on sivuaine jota ei löydy listasta
            niin ilmianna itsesi opintomestarille (opintomestari ät as.fi). Lisäksi muut palautteet, korjausehdotukset
            ja turhat toiveet ovat aina tervetulleita.
          </p>
          <p>
            Opas on alunperin luotu 2022 - 2024 opintosuunitelman mukaan niin ota se huomioon. Eli esimerkiksi kurssien
            nimet ovat saattaneet sittemmin muuttua.
          </p>
        </div>

        <div className={style.sidePanel}>
          <StaticImage className={style.imageLarge} src="../../images/images/minor-studies.png" alt="" />
        </div>
      </div>

      <Minors lang={pageContext.lang} />
    </PageLayout>
  );
};

export default MinorsPage;

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Sivuaineet" robots="none" />;
