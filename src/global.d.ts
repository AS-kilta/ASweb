// Type declaration for SCSS modules
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

// Type for translated strings in data schemes

interface TranslatedEntry {
    [key:string]: string;
}
