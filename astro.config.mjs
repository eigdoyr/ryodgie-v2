// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ryodgie.com",
  output: "static",
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${fileURLToPath(new URL("./src/styles/tokens.scss", import.meta.url))}" as *;`,
        },
      },
    },
  },
});
