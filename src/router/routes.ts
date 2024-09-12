const auth = () => {
  if (!localStorage.getItem("token")) {
    // 未登陆,重定向到登录页面
    return "/login";
  }
};
// 路由懒加载形式
// const UserDetails = () => import('./views/UserDetails.vue')

const routes = [
  // { path: '/users/:id', component: UserDetails },
    {
      path: "/login",
      component: () => import("@/pages/login.vue"), //路由懒加载
    },
    {
      path: "/home",
      component: () => import("@/pages/home.vue"),
      children:[
        {
          path:'home/user',
          component:() =>import("@/pages/user.vue"),
          beforeEnter: auth, //路由独享守卫
        }, 
        {
          path: "/home/manage",
          component: () => import("@/pages/manage.vue"),
          // 配置路由元信息
          meta: {
            title: "管理页", // 页面标题
            auth: true, //需要登录权限
          },
        },
      ]
    },
    // 配置 动态路由匹配
    {
      path: '/register/:plan', // 动态字段以冒号开始
      component: () => import('@/pages/register.vue'),
    },

    // 配置404页面
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/pages/notFound.vue"),
    },
    {
      path: "/home/test",
      component: () => import("@/pages/home.vue"),
      redirect: '/home', //新增
    },

  ];
  //将/home/manage拆出来  test 进行测试一下
export const manageRoute = {
  path: "/home/manage",
  component: () => import("@/pages/manage.vue"),
};
  
  export default routes;
  