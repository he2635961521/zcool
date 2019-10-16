import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const Person = () => import('./views/person/person.vue')
const Login = () => import('./views/person/login.vue')
const Order = () => import('./views/person/order.vue')
const Register = () => import('./views/person/register.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
