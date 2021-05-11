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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
