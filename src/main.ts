import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/theme-chalk/dark/css-vars.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import './styles/index.css';

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(router)
  .mount('#app');
