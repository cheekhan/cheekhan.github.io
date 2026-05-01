<script setup lang="ts">
import logoImg from '@/static/logo.jpg';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const active = ref(route.path);

const menuOptions = ref([
  {
    group: '系统管理',
    items: [
      { name: '每日分析', path: '/index' },
      { name: '文档中心', path: '/docs' },
      { name: '信息维护', path: '/knowledge' },
    ],
  },
  {
    group: '用户管理',
    items: [
      { name: '用户列表', path: '/users' },
      { name: '角色管理', path: '/roles' },
      { name: '资源管理', path: '/access' },
    ],
  },
  {
    group: '客户跟踪',
    items: [
      { name: '客户管理', path: '/customer' },
      { name: '订单跟踪', path: '/flow' },
    ],
  },
  {
    group: '大六壬',
    items: [
      { name: '六壬排盘', path: '/dlrlayout' },
      { name: '六壬案例', path: '/dlrcases' },
    ],
  },
]);

function handleMenuClick(path: string) {
  active.value = path;
  router.push(path);
}
</script>

<template>
  <div style="padding-left: 10px">
    <div class="logo">
      <el-avatar :size="40" :src="logoImg" />
      <p>Cheekhan决策</p>
    </div>
    <template v-for="item in menuOptions" :key="item.group">
      <p class="menu-group">{{ item.group }}</p>
      <template v-for="subItem in item.items" :key="subItem.name">
        <p
          :class="{ active: active === subItem.path, 'menu-item': true }"
          @click="handleMenuClick(subItem.path)"
        >
          {{ subItem.name }}
        </p>
      </template>
    </template>
  </div>
</template>

<style scoped>
.menu-group {
  margin-left: 20px;
  font-size: 12px;
  color: var(--secondary-color);
  margin-bottom: 20px;
  margin-top: 20px;
}
.menu-item {
  margin-left: 10px;
  padding: 5px 5px 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-left: 2px solid transparent;
  transition: all 0.5s;
}
.active {
  border-left: 2px solid #409eff;
  background-color: #1d304347;
  color: #409eff;
}
.logo {
  display: flex;
  padding-top: 10px;
  justify-content: center;
  & > p {
    font-size: 18px;
    line-height: 40px;
    font-weight: bold;
    margin-left: 10px;
  }
}
</style>
