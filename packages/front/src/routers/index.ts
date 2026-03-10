import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { DaliurenRoute } from "./models";

function useAllRoutes(): Array<RouteRecordRaw> {
  return [
    {
      path: "/",
      children: [{ path: "", redirect: DaliurenRoute.path }, DaliurenRoute],
    },
  ];
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: useAllRoutes(),
});

export default router;
