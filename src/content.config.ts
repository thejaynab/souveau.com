import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.{md,mdx}'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    tags: z.array(z.string()),
    clientLink: z.string().url().optional(),
    date: z.date(),
    client: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({
    base: './src/content/services',
    pattern: '**/*.{md,mdx}'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const legals = defineCollection({
  loader: glob({
    base: './src/content/legals',
    pattern: '**/*.{md,mdx}'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects, services, legals };
