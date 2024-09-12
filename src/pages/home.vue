<template>
    <div>
      菜单栏
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </template>
  
<script setup lang="ts">

</script>
<style lang="sass" scoped>

</style>