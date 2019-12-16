import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "../components/Homepage.vue"
import Stores from "../components/Stores.vue"
import Categories from "../components/Categories.vue"
import Settings from "../components/Settings.vue"
import Favorites from "../components/Favorites.vue"
import Contact from "../components/Contact.vue"
import Sorting from "../components/Sorting.vue"

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
            path: '/sort',
            name: 'sorting',
            component: Sorting,
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
