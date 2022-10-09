// Type declaration for SCSS modules
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}
