import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', name: 'home', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Home.vue')},
        {path: '/podcasts', name: 'podcasts', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Podcasts.vue')},
        {path: '/marron', name: 'marron', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Marron.vue')},
        {path: '/quelza', name: 'quelza', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Quelza.vue')},
        {path: '/live', name: 'live', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Live.vue')},
        {path: '/vil', name: 'vil', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Vil.vue')},
        {path: '/setoacmass', name: 'setoac', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Setoac.vue')},

    ]

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({ top: 0 })
            }, 800)
          })
      },
})


export default router

