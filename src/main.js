import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import Notifications from 'vue-notification'
import VuePageTransition from 'vue-page-transition'

Vue.use(Notifications)
Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

