<template>
  <div id="app">
    <el-scrollbar>
      <router-view />
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  &::before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    background-color: #ecf0f1;
    z-index: -1;
  }

  .el-scrollbar {
    height: 100vh;

    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>
