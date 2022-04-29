import Vue from "vue";
import VueRouter from "vue-router";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => { });
};

Vue.use(Element);

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/task",
    name: "Task",
    component: () => import("../views/task"),
  },
  {
    path: "/workspace",
    name: "Workspace",
    component: () => import("../views/workspace"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
