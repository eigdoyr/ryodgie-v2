import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
  }),
});

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.number().optional(),
      icon: z.enum(["camera", "coffee", "wine", "spray"]),
      cover: image(),
      images: z.array(image()),
      status: z.enum(["shipped", "concept"]).default("shipped"),
      link: z.string().url().optional(),
      repo: z.string().url().optional(),
      tech: z.array(z.string()).optional(),
      role: z.string().optional(),
      order: z.number().optional(),
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

export const collections = { about, works, playground };
