import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    }
]
let router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(), //去掉#号
    routes
})

export default router