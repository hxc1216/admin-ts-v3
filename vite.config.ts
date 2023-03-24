import { fileURLToPath, URL } from 'node:url'
import path, { resolve } from 'path'
import { loadEnv, type ConfigEnv, type UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'

export default (configEnv: ConfigEnv): UserConfigExport => {
  const viteENV = loadEnv(configEnv.mode, process.cwd())
  const { VITE_PUBLIC_PATH } = viteENV
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        // @指向src
        '@': resolve(__dirname, './src')
      }
    },
    server: {
      /** 是否开启 HTTPS */
      https: false,
      /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
      host: true, // host: "0.0.0.0"
      /** 端口号 */
      port: 3333,
      /** 是否自动打开浏览器 */
      open: false,
      /** 跨域设置允许 */
      cors: true,
      /** 端口被占用时，是否直接退出 */
      strictPort: false,
      /** 接口代理 */
      proxy: {
        '/': {
          target: 'http://www.url.com',
          ws: true,
          /** 是否允许跨域 */
          changeOrigin: true,
          rewrite: (path) => path.replace('^/', '')
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      /** 将 SVG 静态图转化为 Vue 组件 */
      svgLoader(),
      /** SVG */
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]'
      })
    ]
  }
}
