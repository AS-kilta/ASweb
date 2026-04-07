import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://as.fi',
  legacy: {
    collections: true,
  },
  integrations: [react(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@src': '/src',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/src/styles/_variables" as *;`,
        },
      },
    },
  },
});
