import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#9652ff',
        secondary: '#3cd1c2',
        accent: '#ffaa2c',
        error: '#f83e70',
        background: colors.grey.lighten4
      },
    },
  },
});
