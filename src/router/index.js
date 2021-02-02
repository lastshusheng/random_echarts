import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/analyse'
    },
    {
        path: '/analyse',
        name: '统计',
        component: () => import('../views/SpaEcharts/Home'),
        redirect: '/analyse/page1',
        children: [
            {
                path: 'page1',
                name: 'Subpage1',
                component: () => import('../views/SpaEcharts/Subpage1')
            },
            {
                path: 'page2',
                name: 'Subpage2',
                component: () => import('../views/SpaEcharts/Subpage2')
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
