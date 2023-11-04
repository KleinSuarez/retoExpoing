import { createStore } from 'vuex';
import user from './modules/store.user.js';
import post from './modules/store.post.js';

export default createStore({
    strict: true,
    modules: {
      user,
      post
    },
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
  })
  