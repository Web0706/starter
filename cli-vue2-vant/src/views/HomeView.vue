<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ecf0f1;
}
</style>
