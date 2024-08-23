<script setup lang="ts">
</script>
<template>
  <div id="app">
    <RouterLink :to="{ path: '/' }"> home </RouterLink>
    <RouterLink :to="{ path: '/editor' }"> editor </RouterLink>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
