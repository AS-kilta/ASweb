import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';
//import heropic from "@src/images/images/IMG_6067-Edit.jpg" //pitää vaihtaa
import { StaticImage } from 'gatsby-plugin-image';

const Orientaatioviikko: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="MINT Orientaatioviikko"
      //      background={heropic}
      heroHeight="short"
    >
      <h2 id="orientaatioviikon-aikataulu"></h2>

      <div className="image-container">
        <p>Orientaatioviikko on hektistä aikaa, tekemistä on paljon!</p>
        <p>
          Tässä ovat maisteriopiskelijoiden ja kansainvälisten opiskelijoiden orientaatioviikon aikataulut. Löytääksesi
          perille aikatauluissa mainittuihin paikkoihin suosittelemme lataamaan{' '}
          <a
            href="https://www.aalto.fi/en/services/aalto-space-mobile-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aalto Space
          </a>{' '}
          -sovelluksen ja pyytämään aktiivisesti neuvoja ISOilta.
        </p>
        <p>
          Nämä aikataulut ovat yhdistelmä killan järjestämistä aktiviteeteista ja Aallon järjestämistä tapahtumista.{' '}
          <em>
            Paikat ja aikataulut saattavat muuttua, joten katso myös ajantasaisimmat tiedot{' '}
            <a
              href="https://www.aalto.fi/en/programmes/masters-programme-in-automation-and-electrical-engineering/starting-your-studies#7-orientation-week-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aallon maisteriopiskelijoiden aikataulusta
            </a>{' '}
            sekä{' '}
            <a
              href="https://events.aalto.fi/en/3X3IKxA7/orientation-for-exchange-students-autumn-2025-4a3bQt1ABp/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              vaihto-opiskelijoiden aikataulusta.
            </a>{' '}
            Viimeksi päivitetty 23.8.
          </em>
        </p>
        <h3 id="maisterien-orientaatioviikon-aikataulu">Maisteriopiskelijoiden orientaatioviikko</h3>
        <StaticImage
          className="centered-image"
          src="../../images/images/orientaatioviikon-aikataulu-MINT-masters.png"
          alt="Orientaatioviikon aikataulu maisteriopiskelijoille."
        />
        <h3 id="vaihtareiden-orientaatioviikon-aikataulu">Vaihto-opiskelijoiden orientaatioviikko</h3>
        <StaticImage
          className="centered-image"
          src="../../images/images/orientaatioviikon-aikataulu-MINT-exchange.png"
          alt="Orientaatioviikon aikataulu vaihto-opiskelijoille."
        />
      </div>
    </PageLayout>
  );
};

export default Orientaatioviikko;

const description: string = 'Orientaatioviikon aikataulu MINT fukseille.';

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="MINT Orientaatioviikko" description={description} />
);
