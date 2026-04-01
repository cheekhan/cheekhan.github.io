<script setup lang="ts">
import logoImg from "@/static/logo.jpg";
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import useRoutes from "@/routers/models";

const route = useRoute();
const router = useRouter();

// 获取所有路由
const routes = computed(() => useRoutes().filter(r => r.path && r.name && r.path !== "/" && r.path !== "/404"));

function handleMenuSelect(path: string) {
  if (route.path !== path) {
    router.push(path);
  }
}
</script>
<template>
  <div class="radius-container full-block">
    <div class="menu-top">
      <el-avatar :size="50" :src="logoImg"/>
      <p>决策稿</p>
      <el-divider/>
    </div>
    <div class="menu-body">
      <el-menu
        :default-active="route.path"
        class="el-menu-vertical-demo"
        @select="handleMenuSelect"
      >
        <el-menu-item
          v-for="item in routes"
          :key="item.path"
          :index="item.path"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.menu-top {
  margin-top: 15px;
  text-align: center;

  & > p {
    margin: 10px 0;
    padding: 0;
  }
}

.menu-body {
  text-align: left;

  & > p {
    margin: 20px 10px 20px 10px;
    padding: 10px 30px 10px 10px;
    font-weight: bold;
    border-radius: 5px;
    background-color: var(--bg-dark-base);
    text-align: right;
    cursor: pointer;
    transition: all 0.5s;
  }

  & > p:hover {
    box-shadow: 0 0 5px 0 rgb(62, 107, 39);
  }
}

.active-menu {
  box-shadow: 0 0 5px 0 rgb(62, 107, 39);
}
:deep(.el-menu){
  border: none;
}
</style>
