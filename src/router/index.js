import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '@/layout/Tabs.vue'
import Profile from '@/views/Profile.vue'

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
  },
  {
    path: '/',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path:'/profile',
    redirect:'/profile/personal',
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path:'parent',
        component: () => import('@/views/profile/Parent.vue')
      },
      {
        path:':view',
        component: () => import('@/views/profile/Other.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
