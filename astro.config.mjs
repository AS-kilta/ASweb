import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://as.fi',
  integrations: [mdx(), sitemap(), react()],
  vite: {
    resolve: {
      alias: {
        src: "/src",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/main.scss" as *;@use "src/styles/_variables.scss" as *;`
        }
      }
    },
  }
});