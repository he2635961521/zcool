import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/hdh/Home.vue'
import Films from './views/home/hdh/films.vue'
import Cinemas from './views/home/hdh/cinemas.vue'
import Center from './views/home/hdh/center.vue'
import Dlbdt from './views/home/hdh/filmslbdetailnt.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component:Home,
      children: [
        {
          path: 'hdh/films',
          component: Films
        },
        {
          path: 'hdh/cinemas',
          component: Cinemas
        },
        {
          path: 'hdh/center',
          component: Center
        },
        {
          path: '',
          redirect: '/hdh/films'
        },
      ]
    },
    {
      path: '/hdh/filmlbdetailnt/:id',
      component: Dlbdt
    }

  ]
})

export default router
