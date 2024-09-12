<template>
    <div>
        register page 
    </div>
</template>
<script setup lang="ts">

import { useRoute } from 'vue-router';
const route = useRoute()

import { onBeforeRouteLeave } from 'vue-router';

// 与 beforeRouteLeave 相同，无法访问 `this`
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('确定离开吗');
  // 取消导航并停留在同一页面上
  if (!answer) return false;
});

console.log(route.params.plan, 'register get plan');


</script>
<style lang="scss" scoped>

</style>