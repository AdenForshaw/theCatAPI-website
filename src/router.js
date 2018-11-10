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
      component: () => import(/* webpackChunkName: "about" */ './views/Signup.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      meta: { gtm: 'Thanks' },
      component: () => import(/* webpackChunkName: "about" */ './views/Thanks.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      meta: { gtm: 'Privacy' },
      component: () => import(/* webpackChunkName: "about" */ './views/PrivacyPolicy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      meta: { gtm: 'Terms' },
      component: () => import(/* webpackChunkName: "about" */ './views/TermsConditions.vue')
    },
    {
      path: '/code',
      name: 'code',
      meta: { gtm: 'CodeExamples' },
      component: () => import(/* webpackChunkName: "about" */ './views/CodeExamples.vue')
    }
  ]
})

export default router

import VueGtm from 'vue-gtm';

Vue.use(VueGtm, {
  id: 'GTM-MP6RDDC', // Your GTM ID
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  //ignoredViews: ['homepage'] // If router, you can exclude some routes name (case insensitive) (optional)
});