import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

export const collections = {
	projects: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			github: z.string(),
			currently_building: z.boolean().optional(),
			abstraction_level: z.number(),
			group_size: z.number()
		}),
	}),
	interests: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			emoji: z.string(),
			coords: z.object({
				x: z.number(),
				y: z.number()
			})
		}),
	})
};
