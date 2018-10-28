
import Vue from 'vue'
import Vuex from 'vuex'

import TheCatAPI from '@/store/modules/TheCatAPI'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TheCatAPI
  }
})

export default store