export const site = {
  name: "Ryodgie Barnatia",
  tagline: "Web / UI Designer & Front-End Developer",
  url: "https://ryodgie.com",
  description:
    "Portfolio of Ryodgie Barnatia — Web/UI designer and front-end developer. Selected work in Vue, React, and Astro: editorial, e-commerce, and concept design.",
} as const;

export function pageTitle(page?: string): string {
  if (!page) return `${site.name} — ${site.tagline}`;
  return `${page} — ${site.name}`;
}
