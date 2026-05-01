import Home from '@/views/Home/index.vue';
import type { RouteRecordRaw } from 'vue-router';

const useRoutes = (): RouteRecordRaw[] => {
  return [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue'),
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/Index/index.vue'),
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/views/Users/index.vue'),
    },
    {
      path: '/roles',
      name: 'Roles',
      component: () => import('@/views/Roles/index.vue'),
    },
    {
      path: '/access',
      name: 'Access',
      component: () => import('@/views/Access/index.vue'),
    },
    {
      path: '/customer',
      name: 'Customer',
      component: () => import('@/views/Customer/index.vue'),
    },
    {
      path: '/flow',
      name: 'Flow',
      component: () => import('@/views/Flow/index.vue'),
    },
    {
      path: '/dlrlayout/',
      name: 'DlrLayout',
      component: () => import('@/views/DlrLayout/index.vue'),
    },
    {
      path: '/dlrcases',
      name: 'DlrCases',
      component: () => import('@/views/DlrCases/index.vue'),
    },
    {
      path: '/docs',
      name: 'Docs',
      component: () => import('@/views/Docs/index.vue'),
    },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: () => import('@/views/Knowledge/index.vue'),
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/NotFound/index.vue'),
    },
  ];
};

export default useRoutes;
