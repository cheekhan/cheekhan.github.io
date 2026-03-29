import type { RouteRecordRaw } from "vue-router";
import Access from "@/views/Access/index.vue"
import Dashbord from "@/views/Dashbord/index.vue"
import Login from "@/views/Login/index.vue"
import NotFound from "@/views/NotFound/index.vue"
import DlrCases from "@/views/DlrCases/index.vue";
import DlrLayout from "@/views/DlrLayout/index.vue"
import Knowledge from "@/views/Knowledge/index.vue";
import Roles from "@/views/Roles/index.vue";
import Users from "@/views/Users/index.vue";

const useRoutes = (): RouteRecordRaw[] => {
  return [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashbord
    },
    {
      path: "/access",
      name: "Access",
      component: Access
    },
    {
      path: "/dlrcases",
      name: "DlrCases",
      component: DlrCases
    },
    {
      path: "/dlrlayout",
      name: "DlrLayout",
      component: DlrLayout
    },
    {
      path: "/knowledge",
      name: "Knowledge",
      component: Knowledge
    },
    {
      path: "/roles",
      name: "Roles",
      component: Roles
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound
    }
  ]
}

export default useRoutes;