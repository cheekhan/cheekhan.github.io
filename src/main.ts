import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/dark/css-vars.css";
import zhCn from "element-plus/es/locale/lang/zh-cn"; 
import "./styles/index.css";
import router from "./routers";
import App from "./App.vue";

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(router)
  .mount("#app");
