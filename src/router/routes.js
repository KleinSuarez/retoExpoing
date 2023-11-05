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
    path: '/posts',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */'@/views/post/Posts'),
    meta: {
      requiresAuth: false,
      requireAdmin: false,
    }
  },
  ,
  {
    path: '/posts/create',
    name: 'postcreate',
    component: () => import(/* webpackChunkName: "post-create" */'@/views/post/Publicaciones'),
    meta: {
      requiresAuth: false,
      requireAdmin: false,
    }
  },
]