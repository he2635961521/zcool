import Vue from 'vue'
import Router from 'vue-router'
import bookTicket from './views/book-ticket.vue'
import hotMovieList from './components/hot-showing.vue'
import comingList from './components/coming-soon.vue'
import gpscity from './views/choice-city.vue'

import Home from './views/Home.vue'
const Person = () => import('./views/person/person.vue')
const Login = () => import('./views/person/login.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: bookTicket,
      redirect: '/list',
      children: [
        {
          path: '/list',
          components: {
            a: hotMovieList,
            b: comingList
          }
        }
      ]
    },
    {
      path: '/selectCity',
      component: gpscity
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
