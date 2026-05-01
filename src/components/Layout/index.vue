<script setup lang="ts">
import { RouterView } from 'vue-router';
import LayoutBar from './LayoutBar.vue';
// import LayoutMenu from './LayoutMenu.vue';
import LayoutMenu from './Menu.vue';

defineOptions({
  name: 'LayoutIndex',
});
</script>

<template>
  <el-container class="full-body">
    <el-aside width="200px">
      <LayoutMenu />
    </el-aside>
    <el-container>
      <el-header>
        <LayoutBar />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.full-body {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: var(--bgc-info);
  color: var(--primary-color);
}

:deep(.el-aside) {
  margin: 10px;
  background-color: var(--bgc-dark);
  border-radius: 10px;
}

:deep(.el-header) {
  margin: 10px 10px 10px 0;
  border-radius: 10px;
  background-color: var(--bgc-dark);
}

:deep(.el-main) {
  margin: 0 10px 10px 0;
  border-radius: 10px;
  background-color: var(--bgc-dark);
}
</style>
