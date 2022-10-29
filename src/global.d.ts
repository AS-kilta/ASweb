import { PageProps as GatsbyPageProps } from 'gatsby'
import React from 'react';

interface CustomPageProps {
    slug: string;
    lang: string;
    translation?: string;
}

declare global {
    // PageProps with customized pageContext
    
    interface PageProps extends GatsbyPageProps  {
        pageContext: PageProps["pageContext"] & CustomPageProps;

    }

    // Type declaration for SCSS modules

    declare module '*.scss' {
        const content: {[className: string]: string};
        export = content;
    }
    
    // Type for translated strings in data schemes
    
    interface TranslatedEntry {
        [key:string]: string;
    }
}