import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('pages/dashboard/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('pages/login/index.vue'),
    },
  ],
})

export default router