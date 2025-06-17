import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import * as style from './studies.module.scss';
import PageLayout from '@src/components/layouts/PageLayout';
import { StaticImage } from 'gatsby-plugin-image';

interface Props extends PageProps {
  data: ImageArrayProps;
}

const Advocacy: React.FC<Props> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Edunvalvonta">
      <div>
        <p></p>
        <p>
          Automaatio- ja systeemitekniikan killlan opiskelijoiden koskevia päätöksiä tehdään Sähkötekniikan
          korkeakoulussa useassa eri toimielimessä. Näitä ovat muun muassa Sähkötekniikan akateeminen komitea,
          Sähkötekniikan kanditaattikoulutusneuvosto, Sähkötekniikan korkeakoulun opetuksen laatutoimikunta (paremmin
          tunnetusti OpLaa). Usein killan puheenjohtaja ja opintomestari edustavat kiltalaisia näissä toimielimissä.
        </p>
        <p>
          Lisäksi on olemassa Aalto-tason toimielimiä. Näitä ovat mm. kielikeskuksen ohjausryhmä, ravintolatoimikunta ja
          Aalto-yliopiston yhdenvertaisuus-, monimuotoisuus- ja inklusiivisuustoimikunta. Myös jokaiselle
          maisteri-ohjelmalle on oma ohjelmaryhmän, jonka tehtävänä on tukea ohjelmajohtajaa ohjelman suunnittelussa,
          toteutuksessa, arvioinnissa ja kehittämisessä.
        </p>
        <h2>Hallopedit</h2>
        <p>
          Yhdistyksen jäsenten etua valvovat AYY:n nimittämät Hallopedit eli hallinnon opiskelijaedustajat. Hallopediksi
          haetaan joka syksy eikä aikaisempaa kokemusta edunvalvonnasta vaadita. Jos mielenkiinto heräsi, älä epäröi
          hakea hallopediksi jo ensi syksynä!
        </p>
        <p>
          Lisää Halloped-toiminnasta löydät:{' '}
          <a href="https://beta.halloped.fi/aalto.fi/get-started" target="_blank" rel="noreferrer">
            beta.halloped.fi/aalto.fi/get-started
          </a>
        </p>

        <StaticImage className={style.imageLarge} src="../../images/images/hallopedihommii.png" alt="" />

        <h2>Toimielimet</h2>
        <h3>Sähkötekniikan akateeminen komitea</h3>
        <p>
          Akateeminen komitea tekee esitykset korkeakoulukohtaisista opetussuunnitelmista, tutkintovaatimuksista,
          valintaperusteista sekä muista akateemisen komitean toimintaan liittyvistä asioista.
        </p>

        <h3>Sähkötekniikan kanditaattikoulutusneuvosto</h3>
        <p>
          Koulutusneuvosto tekee akateemiselle komitealle ehdotukset koulutusohjelmien opetussuunnitelmista,
          tutkintovaatimuksista ja valintaperusteista. Koulutusneuvosto päättää koulutusohjelmien kehityksestä,
          opetuksen laadunvarmistuksesta sekä palautteen käsittelystä. Näiden lisäksi koulutusneuvosto nimeää
          kandidaatintöiden hyväksyjät, päättää diplomitöiden aiheet, valvojat ja ohjaajat sekä arvostelee diplomityöt.
        </p>

        <h3>Sähkötekniikan akateeminen komitea</h3>
        <p>
          Opetuksen laatutoimikunta (OpLaa) on sähkötekniikan korkeakoulun toimikunta, jonka tavoitteena on tehdä
          yhteistyötä koulun johdon, laitosten, oppimispalveluiden ja kiltojen edustajien kanssa. Se pyrkii kehittämään
          opetusta huomioiden Aalto-yliopiston ja ELEC:n tavoitteiden lisäksi muut opetusta ja oppimista kehittävät
          teemat ja kehittämiskohteet. OpLaan jäsenillä on mahdollisuus osallistua henkilökunnan rekrytointiin. Lisäksi
          OpLaan jäsenille esitellään vuosittain tehdyn opintokyselyn tulokset.
        </p>
      </div>
    </PageLayout>
  );
};

export default Advocacy;

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Edunvalvonta" />;
