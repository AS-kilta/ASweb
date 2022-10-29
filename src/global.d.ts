import { PageProps } from 'gatsby'

// Type declaration for SCSS modules
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

// Type for translated strings in data schemes

interface TranslatedEntry {
    [key:string]: string;
}

interface CustomPageProps {
    slug: string;
    lang: string;
    translation?: string;
}

declare global {
    export interface PageProps extends PageProps  {
        pageContext: PageProps["pageContext"] & CustomPageProps;
    }
}