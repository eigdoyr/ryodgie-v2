export const site = {
  name: "Ryodgie Barnatia",
  tagline: "Web / UI Designer & Front-End Developer",
  url: "https://ryodgie.com",
  description:
    "Ryodgie Barnatia — Designer and Front-End Developer. Web/UI design, Vue, React, TypeScript, Astro.",
} as const;

export function pageTitle(page?: string): string {
  if (!page) return `${site.name} — ${site.tagline}`;
  return `${page} — ${site.name}`;
}
