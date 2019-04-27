import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: { keepAlive: true },
      component: resolve => require(['@/views/home/home'], resolve)
    },
    {
      path: '/cart',
      meta: { keepAlive: false },
      component: resolve => require(['@/views/cart/cart'], resolve)
    },
  ]
})
