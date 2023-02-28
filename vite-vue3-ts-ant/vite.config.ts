import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less'
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量

          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "@/assets/styles/antdv.less";`
        },
        javascriptEnabled: true
      }
    }
  }
})
