export default [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */'@/views/Home'),
    meta: {
      requiresAuth: false,
      requireAdmin: false,
    }
  },
]