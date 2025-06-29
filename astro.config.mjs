import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  // ✨ Multilingual routing
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en',
    // Optional: fall back to EN when a page is missing in ES/PT
    fallback: { es: 'en', pt: 'en' },
  },
});