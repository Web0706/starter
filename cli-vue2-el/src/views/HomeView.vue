<template>
  <main class="home">
    <el-button type="primary">主要按钮</el-button>
  </main>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ecf0f1;
}
</style>
