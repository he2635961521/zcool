import Vue from 'vue'
import Router from 'vue-router'
import bookTicket from './views/buy/book-ticket.vue'
import hotMovieList from './components/buy/hot-showing.vue'
import comingList from './components/buy/coming-soon.vue'
import gpscity from './views/buy/choice-city.vue'
import goodDetail from './views/buy/detail.vue'

const Person = () => import('./views/person/person.vue')
const Login = () => import('./views/person/login.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: bookTicket,
      redirect: '/buy/list',
      children: [
        {
          path: '/buy/list',
          components: {
            a: hotMovieList,
            b: comingList
          }
        }
      ]
    },
    {
      path: '/buy/selectCity',
      component: gpscity
    },
    {
      path: '/buy/detail/:id',
      component: goodDetail
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
