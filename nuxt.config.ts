// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "template",
      link: [
        { rel: "icon", type: "image/x-icon", href: "" }, // Path to your favicon
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
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
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
