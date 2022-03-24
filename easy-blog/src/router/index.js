<<<<<<< HEAD
import Vue from "vue";
import VueRouter from "vue-router";
=======
import Vue from 'vue'
import VueRouter from 'vue-router'
>>>>>>> eba33623b52b70aede3ff13cd17889d4d635e0e0

Vue.use(VueRouter);

const routes = [
  {
<<<<<<< HEAD
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
  },
];
=======
    path: '/',
    name: 'Home',
    component: ()=>import("../views/Home.vue")
  },
]
>>>>>>> eba33623b52b70aede3ff13cd17889d4d635e0e0

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
