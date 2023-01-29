import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: 'home',
        component: () => import("@/views/HomeView.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginView.vue")
    },
    {
        path: "/oauth",
        name: "oauth",
        component: () => import("@/views/OauthView.vue")
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
