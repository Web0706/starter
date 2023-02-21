<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <main class="main">
    <button @click="counter.increment">+ {{ counter.count }}</button>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

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
