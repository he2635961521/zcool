import Vue from 'vue'
import Router from 'vue-router'
import bookTicket from './views/buy/book-ticket.vue'
import hotMovieList from './components/buy/hot-showing.vue'
import comingList from './components/buy/coming-soon.vue'
import gpscity from './views/buy/choice-city.vue'
import goodDetail from './views/buy/detail.vue'

const Person = () => import('./views/person/person.vue')
const Login = () => import('./views/person/login.vue')
const Order = () => import('./views/person/order.vue')
const Register = () => import('./views/person/register.vue')
const Userinfo = () => import('./views/person/userinfo.vue')
const Moviecard = () => import('./views/person/moviecard.vue')
const Showcard = () => import('./views/person/showcard.vue')
const CinemaSearch = () => import('./views/person/cinema/cinemasearch.vue')
const CinemaDetail = () => import('./views/person/cinema/cinemadetail.vue')
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
      // 我的
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      // 登录页面
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // 我的订单页面
      path: '/person/order',
      name: 'order',
      component: Order,
      children: [
        {
          // 电影票
          path: 'moviecard',
          name: 'moviecard',
          component: Moviecard
        },
        {
          // 演出票
          path: 'showcard',
          name: 'showcard',
          component: Showcard
        }
      ]
    },
    {
      // 注册页面
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      // 用户个人信息页面
      path: '/userinfo',
      name: 'userinfo',
      component: Userinfo
    },
    {
      // 电影搜索页面
      path: '/cinemasearch',
      name: 'cinemasearch',
      component: CinemaSearch
    },
    {
      path: '/cinemadetail',
      name: 'cinemadetail',
      component: CinemaDetail
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
}
)
