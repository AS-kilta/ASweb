import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import * as style from './membership.module.scss';
import PageLayout from '@src/components/layouts/PageLayout';
import heroPic from '../../images/images/photo_2025-03-11_17-32-55.jpg';

const Membership: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Jäsenyys"
      background={heroPic}
      heroHeight="tall"
      lead="Killan jäsenenä saat oikeuden osallistua killan tapahtumiin ja käyttää kiltahuonetta sekä pääsyn killan sähköpostilistoille. Lisäksi varsinaisena jäsenenä saat äänioikeuden kiltakokouksissa."
    >
      <a
        className={style.coloredBlock + ' center-block' + ' rounded-button'}
        target="_blank"
        href="https://kide.app/memberships/9864c555-8dbe-40c8-9246-064ca682e587"
        rel="noreferrer"
      >
        Liity jäseneksi
      </a>

      <h2>Varsinainen jäsenyys</h2>
      <p>
        Killan varsinaiseksi jäseneksi voidaan hyväksyä kaikki AYY:n jäsenistöön kuuluvat henkilöt. Killan jäsenenä saat
        äänioikeuden kiltakokouksissa, oikeuden osallistua killan tapahtumiin ja käyttää kiltahuonetta sekä pääsyn
        killan sähköpostilistoille. Jäseneksi pääset yllä olevasta linkistä. Lisätietoa killan jäsenyydestä löytyy
        killan{' '}
        <a target="_self" href="./docs/guild-rules">
          säännöistä
        </a>{' '}
        luvusta 2.
      </p>

      <h2>Ulkojäsenyys</h2>
      <p>
        Killan ulkojäseneksi voidaan hyväksyä killan toiminnasta kiinnostunut henkilö, jota ei voida hyväksyä
        varsinaiseksi tai vanhaksi jäseneksi. Jäseneksi haetaan samoin kuin varsinaiseksi jäseneksi ja jäsenmaksun
        suuruus on sama.
      </p>

      <h2>Vanha jäsenyys</h2>
      <p>
        Killan vanhaksi jäseneksi voi hakea henkilö, joka on ollut killan varsinainen jäsen, mutta ei ole enää AYY:n
        jäsen. Vanhaksi jäseneksi voit hakea täyttämällä vanhan jäsenen lomakkeen. Vanhan jäsenen ei tarvitse maksaa
        jäsenmaksua.
      </p>
    </PageLayout>
  );
};

export default Membership;

const description: string =
  'Killan jäsenenä saat oikeuden osallistua killan tapahtumiin ja käyttää kiltahuonetta sekä pääsyn killan sähköpostilistoille. \
Lisäksi varsinaisena jäsenenä saat äänioikeuden kiltakokouksissa.';

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Jäsenyys" description={description} />;
