import DefaultLayout from "@/views/DefaultLayout.vue";

export const publicRoute = [
  {
    path: "/",
    component: DefaultLayout,
    meta: { title: "Home", group: "apps", icon: "" },
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "Dashboard",
          group: "apps",
          icon: "dashboard",
          requiresAuth: false,
          requiresSuperUser: false,
        },
        component: () =>
          import(
            /* webpackChunkName: "routes" */ "@/components/dashboard/Dashboard.vue"
          ),
      },
    ],
  },
  {
    path: "/cards",
    component: DefaultLayout,
    meta: { title: "Carte", group: "apps", icon: "" },
    children: [
      {
        path: "/cards",
        name: "carte",
        meta: {
          title: "Carte",
          group: "apps",
          icon: "cards",
          requiresAuth: false,
          requiresSuperUser: false,
        },
        component: () =>
          import(
            /* webpackChunkName: "routes" */ "@/components/cards/CardsMain.vue"
          ),
      },
    ],
  },
];
