// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import path from "path";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: "template",
      link: [
        { rel: "icon", type: "image/x-icon", href: "" }, // Path to your favicon
      ],
    },
  },
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/css/main.css", "~/assets/css/style.scss"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  imports: {
    dirs: ["./stores"],
  },
  i18n: {
    langDir: path.resolve(__dirname, "locales"),
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "lo",
        iso: "lo-LA",
        name: "ລາວ",
        file: "lo.json",
      },
    ],
    strategy: "no_prefix",
    defaultLocale: "lo",
    vueI18n: "./i18n.config.ts",
  },
});
