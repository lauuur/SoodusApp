import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    themes: {
      light: {
        primary: colors.red.darken2,
        secondary: colors.black,
        accent: colors.black,
      },
    },
  },
});
