import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/main.css'
import router from './router/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const app = createApp(App);

app.use(ElementPlus).use(router).mount('#app')

// 配置NProgress选项
// NProgress.configure({ })
// 在路由页面跳转使用
router.beforeEach((to, from, next) => {
  // 开始进度条
  NProgress.start()
  // 继续路由
  next()
 })
 router.afterEach(transition => {
  // 结束进度条
  NProgress.done()
 })