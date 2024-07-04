import React from 'react';
import { graphql } from 'gatsby';
import type { HeadFC } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';

import PageLayout from '@src/components/layouts/PageLayout';
import Meta from '@src/components/common/Meta';

interface Props extends PageProps {
  data: MdxProps;
}

const PageTemplate: React.FC<Props> = ({ pageContext, data, children }) => {
  const { title, lead, background, heroHeight, documentStyle } = data.mdx.frontmatter;

  return (
    <PageLayout
      pageContext={pageContext}
      title={title}
      lead={lead}
      background={background}
      heroHeight={heroHeight}
      documentStyle={documentStyle}
    >
      <MDXProvider>{children}</MDXProvider>
    </PageLayout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        lang
      }
      frontmatter {
        title
        lead
        background
        heroHeight
        documentStyle
        robots
      }
    }
  }
`;

export default PageTemplate;

export const Head: HeadFC<MdxProps> = (props) => (
  <Meta
    lang={props.data.mdx.fields.lang}
    title={props.data.mdx.frontmatter.title}
    robots={props.data.mdx.frontmatter.robots}
  />
);
