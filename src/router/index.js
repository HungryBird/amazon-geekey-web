import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './routes'

Vue.use(vueRouter);

const router = new vueRouter({
    routes,
    mode: 'hash',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        return savedPosition || {x: 0, y: 0};
    }
})

export default router;