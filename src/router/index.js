import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueRouter)
Vue.use(Element)

const routes = [
  {
    path: '/',
    name: '/',
    redirect: "/home"
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    name: "Home",
    component: () => import('../views/home.vue')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/task')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
