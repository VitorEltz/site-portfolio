import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import astroI18next from 'astro-i18next';

export default defineConfig({
  integrations: [
    mdx(),
    astroI18next(),
  ],
});
