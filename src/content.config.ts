import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Nuova funzione per caricare i file locali

const blogCollection = defineCollection({
  // Definiamo il loader che scansiona tutti i file .md o .mdx dentro src/content/blog/
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // coerce garantisce che anche le date scritte come stringhe nel frontmatter vengano convertite in oggetti Date
    author: z.string().default('Davide Scarpa'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};