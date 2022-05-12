import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '@/layout/Tabs.vue'
import Profile from '@/views/profile/Profile.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },


  // TABS
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
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/profile',
    redirect: '/profile/personal',
  },


  // PROFILE TABS
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: 'parent',
        component: () => import('@/views/profile/Parent.vue')
      },
      {
        path: ':tab',
        component: () => import('@/views/profile/Other.vue')
      },
    ]
  },
  {
    path: '/courses',
    component: () => import('@/views/OnlineCourses.vue')
  },
  {
    path: '/classes',
    component: () => import('@/views/LiveClasses.vue')
  },
  {
    path: '/timetable',
    component: () => import('@/views/TimeTable.vue')
  },
  {
    path: '/lessons',
    component: () => import('@/views/LessonPlan.vue')
  },
  {
    path: '/syllabus',
    component: () => import('@/views/SyllabusStatus.vue')
  },
  {
    path: '/onlineexam',
    component: () => import('@/views/OnlineExam.vue')
  },
  {
    path: '/leave',
    component: () => import('@/views/ApplyLeave.vue')
  },
  {
    path: '/download',
    redirect: '/download/assignment'
  },
  {
    path: '/download/:tab',
    component: () => import('@/views/DownloadCenter.vue'),
  },
  {
    path: '/attendance',
    component: () => import('@/views/Attendance.vue')
  },
  {
    path: '/leave',
    component: () => import('@/views/OnlineExam.vue')
  },
  {
    path: '/timeline',
    component: () => import('@/views/Timeline.vue')
  },
  {
    path: '/documents',
    component: () => import('@/views/MyDocuments.vue')
  },
  {
    path: '/reviews',
    component: () => import('@/views/TeacherReview.vue')
  },
  {
    path: '/library',
    component: () => import('@/views/Library.vue')
  },
  {
    path: '/routes',
    component: () => import('@/views/TransportRoute.vue')
  },
  {
  path: '/hostels',
  component: () => import('@/views/Hostel.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
