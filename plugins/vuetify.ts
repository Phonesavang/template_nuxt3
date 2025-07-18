// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#ec1b2e",
            // accent: colors.grey.darken3,
            // secondary: colors.amber.darken3,
            // info: colors.teal.lighten1,
            // warning: colors.amber.base,
            // error: colors.deepOrange.accent4,
            // success: colors.green.accent3,
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
