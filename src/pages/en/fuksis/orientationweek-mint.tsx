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
      title="MINT Orientation week"
      //      background={heropic}
      heroHeight="short"
    >
      <h2 id="orientaatioviikon-aikataulu"></h2>

      <div className="image-container">
        <p>Orientation week is a hectic week with lots to do and explore!</p>
        <p>
          Here are the master's and international students' orientation week schedules. Scroll down to find the exchange
          students' schedule. To find your way to the locations listed in the schedules, we recommend downloading the{' '}
          <a
            href="https://www.aalto.fi/en/services/aalto-space-mobile-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aalto Space
          </a>{' '}
          app and actively asking your ISOs for guidance.
        </p>
        <p>
          These schedules are a compilation of activities organized by the guild and events organized by Aalto.{' '}
          <em>
            The locations and schedules may be subject to change, see the{' '}
            <a
              href="https://www.aalto.fi/en/programmes/masters-programme-in-automation-and-electrical-engineering/starting-your-studies#7-orientation-week-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aalto schedule for master's students
            </a>{' '}
            and the{' '}
            <a
              href="https://events.aalto.fi/en/3X3IKxA7/orientation-for-exchange-students-autumn-2025-4a3bQt1ABp/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aalto schedule for exchange students
            </a>{' '}
            for the most up-to-date locations and times. These schedules are up to date as of 21.8.
          </em>
        </p>
        <h3 id="maisterien-orientaatioviikon-aikataulu">Master's orientation week</h3>
        <StaticImage
          className="centered-image"
          src="../../../images/images/orientaatioviikon-aikataulu-MINT-masters.png"
          alt="Orientation week schedule for master's students."
        />
        <h3 id="vaihtareiden-orientaatioviikon-aikataulu">Exchange students' orientation week</h3>
        <StaticImage
          className="centered-image"
          src="../../../images/images/orientaatioviikon-aikataulu-MINT-exchange.png"
          alt="Orientation week schedule for exchange students."
        />
      </div>
    </PageLayout>
  );
};

export default Orientaatioviikko;

const description: string = 'The orientation week schedule for MINT fuksis';

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="MINT orientation week" description={description} />;
