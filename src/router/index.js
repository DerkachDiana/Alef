import { createRouter, createWebHistory } from 'vue-router'
import Preview from '../views/Preview'
import FormPage from '../views/FormPage'

const routes = [
  {
    path: '/',
    name: 'FormPage',
    component: FormPage
  },
  {
    path: '/Preview',
    name: 'Preview',
    component: Preview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
