import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const Person = () => import('./views/person/person.vue')
const Login = () => import('./views/person/login.vue')
const Order = () => import('./views/person/order.vue')
const Register = () => import('./views/person/register.vue')
const Userinfo = () => import('./views/person/userinfo.vue')
const Moviecard = () => import('./views/person/moviecard.vue')
const Showcard = () => import('./views/person/showcard.vue')
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
      path: '/person/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'moviecard',
          name: 'moviecard',
          component: Moviecard
        },
        {
          path: 'showcard',
          name: 'showcard',
          component: Showcard
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: Userinfo
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
