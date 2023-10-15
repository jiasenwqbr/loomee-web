import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const { resolve } = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/icons//svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  publicDir: "public",
  base: './',
  //静态资源处理
  assetsInclude: "",
  resolve: {
    alias: [//配置别名
     { find: '@', replacement: resolve(__dirname, 'src') }
    ],
    // 情景导出 package.json 配置中的exports字段
    conditions: [],
    // 导入时想要省略的扩展名列表
    // 不建议使用 .vue 影响IDE和类型支持
    extensions:['.mjs','.js','.ts','.jsx','.tsx','.json']  
   },
   server: {
    host:'192.168.101.60',
    port: 8089,
    proxy: {
      '/api': {
        target:'http://loomee.nft.api.tulan123.com/api',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },

})
