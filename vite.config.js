import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  // runtimeCompiler: true,
  // vueTemplateCompiler: true,
  // build: {
  //   target: 'es2015',
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         // 将 Vue 相关的模块打包到一个 chunk 中
  //         vue: ['vue', 'vue-router', 'vuex']
  //       }
  //     }
  //   }
  // },
  server: {
    port: '3000',
    proxy: {
      '/port': {
        // target: 'http://down.ddrj.com:88',
        // target: 'https://quwenai.com',
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/port/, '') // 不可以省略rewrite
      }
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      "@": path.resolve(__dirname, "src")
    },
  },
  // vueTemplateCompiler: true,
  plugins: [vue(),vueJsx()],



  // 使用lcss
  css: {
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          mainColor: "red",
        },
      },
    },
  },
  lintOnSave: false,
  https: true
})
