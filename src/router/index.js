import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Ifelse from '../views/Ifelse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/", component:Home},
    {path:"/ifelse", component:Ifelse}
  ],
})

export default router
