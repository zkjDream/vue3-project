import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routes from "./routes";
import { useUserStore } from '@/store/user';
const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes: routes as RouteRecordRaw[],
});

router.beforeEach((to, from) => {
// 在这里使用userStore时，需要注意的是在路由之前注册
  const userStore = useUserStore();
  if (!userStore.token && to.path !== "/login") {
    return "/login";
  }
  if (!localStorage.getItem("token") && to.meta.auth) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: "/login",
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
