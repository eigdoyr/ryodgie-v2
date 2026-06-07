export const site = {
  name: "Ryodgie Barnatia",
  tagline: "Web / UI Designer & Front-End Developer",
  url: "https://ryodgie.com",
  description:
    "Portfolio of Ryodgie Barnatia — Web/UI designer and front-end developer. Selected work in Vue, React, and Astro: editorial, e-commerce, and concept design.",
  email: "hello@ryodgie.com",
  image: "/profile.png",
} as const;

export const socials = {
  github: "https://github.com/eigdoyr",
  dribbble: "https://dribbble.com/ryodgie",
  linkedin: "https://www.linkedin.com/in/ryodgie/",
} as const;

export function pageTitle(page?: string): string {
  if (!page) return `${site.name} — ${site.tagline}`;
  return `${page} — ${site.name}`;
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}${site.image}`,
    jobTitle: "Web/UI Designer & Front-End Developer",
    description: site.description,
    email: `mailto:${site.email}`,
    sameAs: [socials.github, socials.dribbble, socials.linkedin],
    knowsAbout: [
      "Web Design",
      "UI Design",
      "Front-End Development",
      "Vue.js",
      "React",
      "TypeScript",
      "Astro",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "GSAP",
      "Framer Motion",
      "Vite",
    ],
  };
}
