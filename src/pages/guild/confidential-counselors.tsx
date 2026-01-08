import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import ConfidentialCounselors from '@src/components/profiles/ConfidentialCounselor';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';

const ConfidentialCounselorPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Häirintä&shy;yhdys&shy;henkilöt"
      lead="Ota yhteyttä häirintä&shy;yhdys&shy;henkilöön, jos näet tai koet killan tapahtumissa tai tiloissa häirintää."
    >
      <a
        style={{ marginBlock: '1rem' }}
        className="rounded-button"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeFna7bOgli1Nj_UVHR_0aNRmURtYY_u40uwhqdfCZRmYsEmQ/viewform?usp=dialog"
        rel="noreferrer"
      >
        Ilmoita häirinnästä
      </a>
      <ConfidentialCounselors lang={pageContext.lang} />
    </PageLayout>
  );
};

export default ConfidentialCounselorPage;

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Häirintäyhdyshenkilöt" robots="none" />;
