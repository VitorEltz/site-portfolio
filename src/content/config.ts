import { defineCollection, z } from 'astro:content';

export const collections = {
        work: defineCollection({
                type: 'content',
                schema: z.object({
                        title: z.string(),
                        description: z.string(),
                        lang: z.enum(['en', 'es', 'pt']),
                        publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			externalUrl: z.string().url().optional(),
		}),
	}),
};
