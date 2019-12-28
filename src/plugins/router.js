import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "../components/Homepage.vue"
import Stores from "../components/Stores.vue"
import Newyorker from "../components/stores/Newyorker.vue"
import Hm from "../components/stores/Hm.vue"
import Zara from "../components/stores/Zara.vue"
import Seppala from "../components/stores/Seppala.vue"
import Rademar from "../components/stores/Rademar.vue"
import Categories from "../components/Categories.vue"
import Settings from "../components/Settings.vue"
import Favorites from "../components/Favorites.vue"
import Contact from "../components/Contact.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/stores',
            name: 'stores',
            component: Stores
        },
        {
            path: '/categories',
            name: 'categories',
            component: Categories
        },
        {
            path: '/newyorker',
            name: 'newyorker',
            component: Newyorker
        },
        {
            path: '/hm',
            name: 'hm',
            component: Hm
        },
        {
            path: '/zara',
            name: 'zara',
            component: Zara
        },
        {
            path: '/seppala',
            name: 'seppala',
            component: Seppala
        },
        {
            path: '/rademar',
            name: 'rademar',
            component: Rademar
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings,
            meta: { transition: 'fade' },
        },
        {
            path: '/favorites',
            name: 'Favorites',
            component: Favorites,
            meta: { transition: 'fade' },
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: { transition: 'fade' },
        },
      ]
});
