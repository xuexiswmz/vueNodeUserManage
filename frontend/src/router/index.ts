import { createRouter, createWebHistory } from "vue-router";
import UserList from "../views/UserList.vue";
const router = createRouter({
  //  创建路由实例
  history: createWebHistory(import.meta.env.BASE_URL), //  使用HTML5的History模式
  routes: [
    //  定义路由
    {
      path: "/",
      name: "users",
      component: UserList,
    },
  ],
});

export default router; //  导出路由实例
