<template>
  <div id="app">
    <el-scrollbar>
      <router-view />
    </el-scrollbar>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
#app {
  .el-scrollbar {
    height: 100vh;

    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>
