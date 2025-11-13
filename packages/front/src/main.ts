import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/dark/css-vars.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "./styles/index.css";

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
