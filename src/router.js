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
      path: '/breeds',
      name: 'breeds',
      meta: { gtm: 'Breeds' },
      component: () => import('./components/Sections/Breeds.vue')
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
      path: '/docs.html', // Legacy reason, page on old website is still deeplinked from so many other sites it gets a lot of traffic
      name: 'docs',
      meta: { gtm: 'Docs' },
      component: () => import('./views/Docs.vue')
    }
  ]
})

export default router

import VueGtm from 'vue-gtm';

Vue.use(VueGtm, {
  id: process.env.VUE_APP_GTM_ID, // Your GTM ID
  enabled: true, 
  debug: false,
  vueRouter: router, 
});