
<template>
  <div>
    <router-link to="/home"> 跳转home </router-link>;
    <button @click="handleManage">点击跳转</button>
    <button @click="handleManageQuery">点击路由传参跳转</button>
    <button @click="handleManageDongtai">动态匹配路由跳转</button>
  </div>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script setup lang="ts">
import { getList } from '@/apis/user';
import { watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { manageRoute } from "@/router/routes";
const route = useRoute();

const router = useRouter();

const handleManage = () => {
  router.push('/home/manage');
};

const handleManageQuery = () => {
  router.push({
    path: '/home/manage',
    query: {
      plan: '123',
    },
  });
};

// 路由跳转，动态匹配
const handleManageDongtai = () => {
  router.push('/register/123');
};

watch(route, async (newVal) => {
  const role = localStorage.getItem("role");
  if (role && role === "admin") {
    router.addRoute("Home", manageRoute);
    /* 防止页面刷新，路由丢失 */
    /* 在动态路由页面刷新时,matched数组为空 */
    if (!newVal.matched.length && newVal.fullPath === "/home/manage") {
      await router.replace("/home/manage");
    }
  }
});


getList({ id: 2 });
</script>


<style lang="scss" scoped>
.fade-enter-active,.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
