import { defineCollection, z } from 'astro:content';

const simplePages = defineCollection({ type: 'content' });
const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = {
  en: simplePages,
  es: simplePages,
  'pt-br': simplePages,
  work,
};
