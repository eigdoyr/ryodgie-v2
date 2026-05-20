import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
  }),
});

const archives = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/archives" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.number().optional(),
      cover: image(),
      images: z.array(image()),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      link: z.string().url().optional(),
    }),
});

const playground = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/playground" }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      alt: z.string().optional(),
      order: z.number().optional(),
    }),
});

export const collections = { about, archives, playground };
