import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  ssr: true,

  build: {
    babel: {
      plugins: [
        "babel-plugin-transform-typescript-metadata",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
      ],
    },
  },
});
