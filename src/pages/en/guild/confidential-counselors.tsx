import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import ConfidentialCounselors from '@src/components/profiles/ConfidentialCounselor';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';

const ConfidentialCounselorPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Confidential Counselors"
      lead="Contact a Confidential Counselor if you see or encounter harassment in guild events or spaces."
    >
      <a
        style={{ marginBlock: '1rem' }}
        className="rounded-button"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeFna7bOgli1Nj_UVHR_0aNRmURtYY_u40uwhqdfCZRmYsEmQ/viewform?usp=dialog"
        rel="noreferrer"
      >
        Report harassment
      </a>
      <ConfidentialCounselors lang={pageContext.lang} />
    </PageLayout>
  );
};

export default ConfidentialCounselorPage;

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Confidential Counselors" robots="none" />;
