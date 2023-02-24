<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div id="app">
    <main class="home">
      <button @click="counter.increment">+ {{ counter.count }}</button>
    </main>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ecf0f1;
}
</style>
