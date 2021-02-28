import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false
Vue.use(VueGtag, {
  config: { id: process.env.VUE_APP_GA_ID } 
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
Vue.use(Vuetify, {
 iconfont: 'mdi'
})
