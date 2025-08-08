import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';

const Fuksiguide: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Maisteri- ja vaihto-opiskelijoiden Fuksiopas 2025"
      lead="Fuksiopas sisältää kaiken, mitä sinun tarvitsee tietää tulevasta opiskelijaelämästä ja AS-killasta."
    >
      <div style={{ width: '100%' }}>
        {/* <a
          style={{ marginBlock: '1rem' }}
          className="rounded-button"
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          rel="noreferrer"
        >
          Julkaistaan piakkoin!
        </a> */}

        <iframe
          src="https://drive.google.com/file/d/1vEbc5xqyt65PJg3ZqiLVy6DwOSxa-Vnf/preview"
          width="100%"
          height="800"
          allow="autoplay"
        ></iframe>
      </div>
    </PageLayout>
  );
};

export default Fuksiguide;

const description: string =
  'Fuksiopas sisältää kaiken, mitä sinun tarvitsee tietää tulevasta opiskelijaelämästä ja AS-killasta.';

export const Head: HeadFC<HeadProps> = () => <Meta lang="fi" title="Fuksiopas" description={description} />;
