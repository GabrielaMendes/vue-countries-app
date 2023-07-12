// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, md } from "vuetify/iconsets/md";

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FDFDFD",
          "text-primary": "#17171F",
          "text-secondary": "#656565",
          primary: "#009688",
          secondary: "#80CBC4",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#17171F",
          "text-primary": "#FDFDFD",
          "text-secondary": "#90A4AE",
          primary: "#00BFA5",
          secondary: "#64FFDA",
        },
      },
    },
  },
});
