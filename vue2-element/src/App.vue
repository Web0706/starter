<template>
  <div id="app">
    <el-scrollbar>
      <router-view />
    </el-scrollbar>
  </div>
</template>

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
