import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '@/store';


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (to.matched.some(record => record.meta.requireAdmin)) {
      if (JSON.parse(store.getters.isAdmin) && JSON.parse(store.getters.isAuth)) {
        next();
      } else {
        next({ name: 'NoAuthorized' });
      }
    } else {
      if (JSON.parse(store.getters.isAuth)) {
        next();
      } else {
        next({ name: 'NoAuthorized' })
      }
    }
  } else {
    next();
  }
})

export default router
