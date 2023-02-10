const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            // 直接覆盖变量

            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "@/assets/styles/theme.less";`
          },
          javascriptEnabled: true,
          math: 'always'
        }
      }
    }
  }
})
