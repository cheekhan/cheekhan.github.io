import {
  createRouter,
  createWebHistory,
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
  history: createWebHistory(),
  routes: useAllRoutes(),
});

export default router;
