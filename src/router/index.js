import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => { err });
};

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/workspace",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue"),
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
  {
    path: "/board/:boardId",
    name: "board",
    component: () => import("../views/board")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
