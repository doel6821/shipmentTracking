// Vuetify plugin configuration
import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify'; // Import Vuetify core
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Use Material Design Icons

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light', // Default theme (light or dark)
  },
  icons: {
    defaultSet: 'mdi', // Default icon set
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;
