import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Board from '@src/components/profiles/Board';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';

const BoardPage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Board" lead="You can contact the whole board via hallitus at as.fi.">
      <Board lang={pageContext.lang} />
    </PageLayout>
  );
};

export default BoardPage;

const description: string =
  'Here you can find the contact information for the guild board. You can contact the whole board via hallitus at as.fi.';

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Board" description={description} />;
