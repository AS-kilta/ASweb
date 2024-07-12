import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import PageLayout from '@src/components/layouts/PageLayout';
import Meta from '@src/components/common/Meta';
import Officials from '@src/components/profiles/Officials';

const OfficialsPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Officials">
      <Officials lang={pageContext.lang} />
    </PageLayout>
  );
};

export default OfficialsPage;

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Officials" robots="none" />;
