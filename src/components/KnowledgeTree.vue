

<template>
  <div class="knowledge-tree">
    <el-tree
      :data="tree"
      :props="defaultProps"
      node-key="id"
      highlight-current
      @node-click="onSelect"
      :expand-on-click-node="false"
      :default-expand-all="true"
    >
      <template #default="{ node, data }">
        <span>{{ data.title }}</span>
      </template>
    </el-tree>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { KnowledgeTreeNode } from '@/api/knowledge';
import 'element-plus/es/components/tree/style/css';

const props = defineProps<{ tree: KnowledgeTreeNode[] }>();
const emit = defineEmits(['select']);

const defaultProps = {
  children: 'children',
  label: 'title',
};

function onSelect(data: KnowledgeTreeNode) {
  emit('select', data);
}
</script>

<style scoped>
.knowledge-tree {
  width: 220px;
  border-right: 1px solid #eee;
  padding: 8px 0;
}
</style>
