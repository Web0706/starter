<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <div>
      <el-button>默认按钮</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
