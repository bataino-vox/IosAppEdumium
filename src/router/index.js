import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '@/layout/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'homework',
        component: () => import('@/views/HomeWork.vue')
      },
      {
        path: 'fees',
        component: () => import('@/views/Fees.vue')
      },
      {
        path: 'notice',
        component: () => import('@/views/Notice.vue')
      },
      {
        path: 'exam',
        component: () => import('@/views/Exam.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
