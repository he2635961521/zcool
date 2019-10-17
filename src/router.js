import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
// import Films from './views/home/films.vue'
import Cinemas from './views/home/cinemas.vue'
import Center from './views/home/center.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          // 路由懒加载
          path: 'films',
          component: () => import('./views/home/films.vue')
        },
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/film/:id',
      component: () => import('./views/film/detail.vue')
    }
  ]
})
