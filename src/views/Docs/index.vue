<script setup lang="ts">
import { ref } from 'vue';
import DocsDetail from './DocsDetail.vue';

const docsType = ref<'dlr' | 'ai' | 'acc'>('dlr'); // 文章分类：大六壬、人工智能、会计

function fetchHttp(type: string) {
  // 模拟接口请求，根据 type 获取不同的文章列表
  console.log(`Fetching articles for type: ${type}`);
}
</script>

<template>
  <el-tabs v-model="docsType" @tab-click="fetchHttp">
    <el-tab-pane label="大六壬" name="dlr">
      <DocsDetail />
    </el-tab-pane>
    <el-tab-pane label="人工智能" name="ai">
      <DocsDetail />
    </el-tab-pane>
    <el-tab-pane label="会计" name="acc">
      <DocsDetail />
    </el-tab-pane>
  </el-tabs>
</template>
