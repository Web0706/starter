<template>
  <main class="home">
    <a-space direction="vertical">
      <a-button type="primary">主要按钮</a-button>
      <a-date-picker @change="onChange" />
    </a-space>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    }
  }
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
