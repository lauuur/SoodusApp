import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    themes: {
      light: {
        primary: colors.red.darken2, // #E53935
        secondary: colors.black, // #FFCDD2
        accent: colors.black, // #3F51B5
      },
    },
  },
});
