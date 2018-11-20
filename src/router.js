import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router =  new Router({

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { gtm: 'Home' },
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      meta: { gtm: 'Signup' },
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      meta: { gtm: 'Thanks' },
      component: () => import( './views/Thanks.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      meta: { gtm: 'Privacy' },
      component: () => import( './views/PrivacyPolicy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      meta: { gtm: 'Terms' },
      component: () => import('./views/TermsConditions.vue')
    },
    {
      path: '/code',
      name: 'code',
      meta: { gtm: 'CodeExamples' },
      component: () => import('./views/CodeExamples.vue')
    }
  ]
})

export default router

import VueGtm from 'vue-gtm';

Vue.use(VueGtm, {
  id: 'GTM-MP6RDDC', // Your GTM ID
  enabled: true, 
  debug: false,
  vueRouter: router, 
});