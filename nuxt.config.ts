// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  telemetry: false,
  routeRules: {
    "/": { ssr: true },
    "/about": { ssr: true },
  },
  css: ["~/assets/styles/tailwind.css"],
  modules: ["nuxt-icons", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: "~/plugins/firebase.ts", ssr: false },
    { src: "~/plugins/Quill.client.ts", ssr: false },
  ],
});
