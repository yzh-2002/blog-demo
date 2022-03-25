import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:"/home",
    name:"Home",
    component:()=>import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/release",
    name: "Release",
    component: () => import("../views/Release.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 添加路由守卫
// router.beforeEach((to,from,next)=>{
  // 任何一个页面均需要权限（对于有些需要有些不需要的，可以在路由元信息中添加meta数据段进行标识）
  // session无需设置路由守卫（因为每次请求都会携带cookie，如果未登录，会在响应拦截里发现并跳转到登录页）
// })

export default router;
