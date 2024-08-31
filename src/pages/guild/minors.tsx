import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';
import Minors from '@src/components/minors/Minors';

import heropic from '@src/images/images/archive.jpg';

const MinorsPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Sivuaine opas"
      lead="Täältä löydät tietoa suosituista sivuaineista"
      background={heropic}
    >
      <Minors lang={pageContext.lang} />
    </PageLayout>
  );
};

export default MinorsPage;

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Sivuaineet" robots="none" />;
