import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';
import Minors from '@src/components/minors/Minors';
import * as style from '../../studies/studies.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import heropic from '@src/images/images/archive.jpg';

const MinorsPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Minors guide"
      lead="Here you will find information on popular minors. Unfortunately, the information on the minor is based on the old syllabus"
      background={heropic}
    >
      <div className={style.table}>
        <div className={style.list}>
          <br />
          <br />
          <p>
            Welcome to read AS's own minor guide book! The guide was created by other guild members, and is based on
            their experiences from various studies.
          </p>
          <p>For this, many thanks to everyone who has contributed to this creation.</p>
          <p>
            The most popular minors have just been added to the guide, and if you have a minor that is not on the list,
            please let the master of studies know (opintomestari at as.fi). In addition, other feedback, correction
            suggestions and unnecessary wishes are always welcome.
          </p>
          <p>
            The guide was originally created according to the 2022 - 2024 curriculum, so take into account that, for
            example, course names may have changed.
          </p>
        </div>

        <div className={style.sidePanel}>
          <StaticImage className={style.imageLarge} src="../../../images/images/minor-studies.png" alt="" />
        </div>
      </div>

      <Minors lang={pageContext.lang} />
    </PageLayout>
  );
};

export default MinorsPage;

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Minors" robots="none" />;
