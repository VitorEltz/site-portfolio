import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import i18next from 'astro-i18next';

export default defineConfig({
  integrations: [
    mdx(),
    i18next({
      defaultLocale: 'en',
      locales: ['en', 'pt'],
    }),
  ],
});