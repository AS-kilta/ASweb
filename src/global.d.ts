import { PageProps as GatsbyPageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface CustomPageProps {
  slug: string;
  lang: string;
  translation?: string;
}

declare global {
  // PageProps with customized pageContext

  interface PageProps extends GatsbyPageProps {
    pageContext: PageProps['pageContext'] & CustomPageProps;
  }

  // Type declaration for SCSS modules

  declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
  }

  // Type for translated strings in data schemes

  interface TranslatedEntry {
    [key: string]: string;
  }

  // Type for object containing translations

  interface Translations {
    [key: string]: TranslatedEntry;
  }

  // Type for image data for dynamic images

  interface DynamicImageData {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    base?: string;
  }

  // Type for queried data from page queries

  interface MdxProps {
    mdx: {
      fields: {
        lang: string;
      };
      frontmatter: {
        [key: string]: string;
      };
    };
    pageContext: any;
  }

  interface ImageFileProps {
    file: DynamicImageData;
  }

  interface ImageArrayProps {
    allFile: {
      nodes: DynamicImageData[];
    };
  }
}
