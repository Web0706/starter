<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div id="app">
    <button @click="counter.increment">+ {{ counter.count }}</button>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#app::before {
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
