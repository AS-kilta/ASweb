import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';

const Fuksiguide: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Fuksiopas 2024"
      lead="Psst! Tätä sivua kannattaa tulla katsomaan kesäkuun loppupuolella"
    >
      <div style={{ width: '100%' }}></div>
    </PageLayout>
  );
};

export default Fuksiguide;

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Fuksiopas" />;
