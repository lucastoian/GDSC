import DefaultLayout from '@/views/DefaultLayout.vue'


export const publicRoute = [
  {
    path: '/',
    component: DefaultLayout,
    meta: { title: 'Home', group: 'apps', icon: '' },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'Dashboard',
          group: 'apps',
          icon: 'dashboard',
          requiresAuth: false,
          requiresSuperUser: false,
        },
        component: () =>
          import(/* webpackChunkName: "routes" */ '@/components/Dashboard.vue'),
      }
    ]
    }

]