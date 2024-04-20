import DefaultLayout from "@/views/DefaultLayout.vue";

export const publicRoute = [

  {
    path: "/",
    component: DefaultLayout,
    meta: { title: "Carte", group: "apps", icon: "" },
    redirect:"/news",
    children: [
      {
        path: "/news",
        name: "news",
        meta: {
          title: "News",
          group: "apps",
          icon: "news",
          requiresAuth: false,
          requiresSuperUser: false,
        },
        component: () =>
          import(
            /* webpackChunkName: "routes" */ "@/components/news/CardMain.vue"
          ),
      },
    ],
  },
];
