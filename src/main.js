import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
// 创建Vue应用实例
const app = createApp(App)
app.config.productionTip = false
// 注册路由、pinia
app.use(router).use(pinia)
// 挂载应用实例
app.mount('#app')
