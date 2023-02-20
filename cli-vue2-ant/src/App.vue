<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
    }
  }
}
</script>

<style lang="less">
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
}
</style>
