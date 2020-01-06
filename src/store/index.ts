import Vue from 'vue'
import Vuex from 'vuex'
import slot from './slot'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    slot,
  },
})
