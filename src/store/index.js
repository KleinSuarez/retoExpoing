import { createStore } from 'vuex';

export default createStore({
    strict: true,
    modules: {
    },
    state: {
     storetitle: 'hello from store vuex',
    },
    getters: {
      getStoreTitle(state){
        return state.storetitle;
      }
    },
    mutations: {
      setTitle(state, value){
        state.storetitle = value
      }
    },
    actions: {
    }
  })
  