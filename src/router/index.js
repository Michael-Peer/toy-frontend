import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import toyDetails from '../views/toyDetails.vue'
import toyEdit from '../views/toyEdit.vue';
import dashboard from '../views/dashboard.vue';
import auth from '../views/auth.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: auth
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: dashboard
  },
  {
    path: '/toy/edit/:toyId?',
    component: toyEdit
  },
  {
    path: '/toy/:toyId?',
    component: toyDetails
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
