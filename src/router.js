import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Films from './views/home/films.vue'
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
          path: 'films',
          component: Films
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
    }
  ]
})
