import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabs from "../components/Tabs.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'tabs',
            component: Tabs
        },
      ]
});
