import { createStore } from 'vuex';
import user from './modules/store.user'

export default createStore({
    strict: true,
    modules: {
      user
    },
    state: {
     title: 'hello from store vuex',
    },
    getters: {
      getTitle(state){
        return state.title;
      }
    },
    mutations: {
      setTitle(state, value){
        state.title = value
      }
    },
    actions: {
    }
  })
  