import { createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/redirect',
      component: Layout,
      children: [
        {
          path: '/redirect/:path(.*)',
          component: () => import('@/views/redirect/index.vue')
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          name: 'Dashboard',
          meta: {
            title: '首页'
            // svgIcon: 'dashboard',
            // affix: true
          }
        }
      ]
    },
    {
      path: '/403',
      component: () => import('@/views/err-page/403.vue')
    },
    {
      path: '/404',
      component: () => import('@/views/err-page/404.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
  ]
})


export default router
