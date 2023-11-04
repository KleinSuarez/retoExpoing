import { createStore } from 'vuex';
import user from './modules/store.user.js'

export default createStore({
    strict: true,
    modules: {
      user
    },
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
     sayHi(){
      alert('hi!')
     }
    }
  })
  