import {
  createRouter,
  createWebHashHistory,
} from "vue-router";
import useRoutes from "./models";



const router = createRouter({
  history: createWebHashHistory(),
  routes: useRoutes(),
});

export default router;
