<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main::before {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background-color: #ecf0f1;
  z-index: -1;
}
</style>
