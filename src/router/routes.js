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
  {
    path: '/registro',
    name: 'singUp',
    component: () => import(/* webpackChunkName: "singup" */'@/views/sessions/SingUp'),
    meta: {
      requiresAuth: false,
      requireAdmin: false,
    }
  },
  {
    path: '/iniciar',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'@/views/sessions/Login'),
    meta: {
      requiresAuth: false,
      requireAdmin: false,
    }
  },
  {
    path: '/publicaciones',
    name: 'publicaciones',
    component: () => import(/* webpackChunkName: "login" */'@/views/publicacion/Publicaciones'),
    meta: {
      requiresAuth: false,
      requireAdmin: false,
    }
  },
]