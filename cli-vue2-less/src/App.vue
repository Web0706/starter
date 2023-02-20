<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ::before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    background-color: #ecf0f1;
    z-index: -1;
  }
}
</style>
