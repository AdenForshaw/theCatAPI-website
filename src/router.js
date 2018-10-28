import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Signup.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import(/* webpackChunkName: "about" */ './views/Thanks.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "about" */ './views/PrivacyPolicy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import(/* webpackChunkName: "about" */ './views/TermsConditions.vue')
    },
    {
      path: '/code',
      name: 'code',
      component: () => import(/* webpackChunkName: "about" */ './views/CodeExamples.vue')
    }
  ]
})
