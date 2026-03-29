<script setup lang="ts">
import LayoutBar from "./LayoutBar.vue";
import LayoutMenu from "./LayoutMenu.vue";
import {RouterView} from "vue-router";

defineOptions({
  name: "LayoutIndex",
});
</script>

<template>
  <el-container class="full-body">
    <el-aside width="200px">
      <LayoutMenu/>
    </el-aside>
    <el-container>
      <el-header>
        <LayoutBar/>
      </el-header>
      <el-main>
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.full-body {
  height: 100vh;
}

:deep(el-container ) {
  min-width: 1280px;
}

:deep(.el-aside) {
  padding: 10px 0 10px 10px;
  background-color: var(--bg-dark-base);
}

:deep(.el-header) {
  padding: 10px 20px 0 10px;
  background-color: var(--bg-dark-base);
}

:deep(.el-footer) {
  padding: 0 20px 10px 10px;
  background-color: var(--bg-dark-base);
}

:deep(.el-main) {
  padding: 10px 20px 10px 10px;
  background-color: var(--bg-dark-base);
}
</style>
