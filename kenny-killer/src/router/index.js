import Vue from 'vue'
import Router from 'vue-router'
import KennyKiller from '@/components/KennyKiller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KennyKiller',
      component: KennyKiller
    }
  ]
})
