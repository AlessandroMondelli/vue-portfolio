import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chi-sono',
    name: 'Chi sono',
    component: () => import('../views/ChiSono.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/progetti',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/contattami',
    name: 'Contattami',
    component: () => import('../views/Contact.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
