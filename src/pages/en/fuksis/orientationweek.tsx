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
      title="Orientation week"
      //      background={heropic}
      heroHeight="short"
    >
      <h2 id="Orientaatioviikon aikataulu"></h2>

      <div className="image-container">
        <p>Orientation week is a hectic week with lots to do and explore!</p>
        <p>
          Here is the orientation week schedule as of now, we will try to update this to the best of our ability during
          summer.
        </p>
        <StaticImage className="centered-image" src="../../../images/images/DSD_timetable.jpg" alt='"DSD_timetable' />
      </div>
      <div>
        <p>
          If you have any questions about the schedule or starting your studies, don't be afraid to message us at
          fuksikapteenit@as.fi or on telegram @fuksikapteenit
        </p>

        <p>Have a lovely summer!</p>
        <p>Your Fuksi Captains: Eero and Jenny</p>
      </div>
    </PageLayout>
  );
};

export default Orientaatioviikko;

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Orientaatioviikko" />;
