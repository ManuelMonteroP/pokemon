import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import WelcomeView from '@/views/Welcome/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: WelcomeView },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
