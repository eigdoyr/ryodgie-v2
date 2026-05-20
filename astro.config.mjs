// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ryodgie.com",
  output: "static",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/tokens" as *;`,
        },
      },
    },
  },
});
