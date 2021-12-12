
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'analytics', component: () => import('pages/analytics.vue') },
      { path: 'collections', component: () => import('pages/collections.vue') },
      { path: 'customers', component: () => import('pages/customers.vue') },
      { path: 'apps', component: () => import('pages/apps.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
