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
  {
    path: "/accademy",
    component: DefaultLayout,
    meta: { title: "Accademy", group: "apps", icon: "" },
    children: [
      {
        path: "/accademy",
        name: "Accademy",
        meta: {
          title: "Accademy",
          group: "apps",
          icon: "accademy",
          requiresAuth: false,
          requiresSuperUser: false,
        },
        component: () =>
          import(
            /* webpackChunkName: "routes" */ "@/components/accademy/AccademyMain.vue"
          ),
      },
    ],
  },
  {
    path: "/game",
    component: DefaultLayout,
    meta: { title: "Game", group: "apps", icon: "" },
    children: [
      {
        path: "/cryptogame",
        name: "Crypto Game",
        meta: {
          title: "Crypto Game",
          group: "apps",
          icon: "accademy",
          requiresAuth: false,
          requiresSuperUser: false,
        },
        component: () =>
          import(
            /* webpackChunkName: "routes" */ "@/components/accademy/GameMain.vue"
          ),
      },
    ],
  },
];
