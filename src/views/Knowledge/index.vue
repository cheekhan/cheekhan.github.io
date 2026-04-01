<template>
    <div style="display: flex; height: 100%;">
        <div style="width: 240px; min-width: 200px; border-right: 1px solid #eee;">
            <KnowledgeTree :tree="tree" @select="handleSelect" />
            <button @click="handleAdd" style="margin: 8px 0; width: 100%;">新增博客</button>
        </div>
        <div style="flex: 1; padding: 16px;">
            <div v-if="selected && selected.type === 'article'">
                <div v-if="!editing">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h2>{{ selected.title }}</h2>
                        <button @click="editing = true">编辑</button>
                    </div>
                    <div style="margin-top: 16px;">
                        <MdEditor v-model="selected.content" previewOnly />
                    </div>
                </div>
                <div v-else>
                    <input v-model="selected.title" placeholder="标题" style="width: 100%; margin-bottom: 8px;" />
                    <MdEditor v-model="selected.content" />
                    <div style="margin-top: 8px;">
                        <button @click="saveEdit">保存</button>
                        <button @click="cancelEdit" style="margin-left: 8px;">取消</button>
                    </div>
                </div>
            </div>
            <div v-else-if="selected && selected.type === 'dir'">
                <h2>{{ selected.title }}</h2>
                <p>这是一个目录节点。</p>
            </div>
            <div v-else>
                <p>请选择左侧文件树中的博客或目录。</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import KnowledgeTree from '@/components/KnowledgeTree.vue';
import type { KnowledgeTreeNode, KnowledgeNode } from '@/api/knowledge';
import { getTree, getNode, updateNode, createNode } from '@/api/knowledge';

const tree = ref<KnowledgeTreeNode[]>([]);
const selected = ref<KnowledgeTreeNode | null>(null);
const editing = ref(false);
const original = ref<KnowledgeTreeNode | null>(null);

async function loadTree() {
    tree.value = await getTree();
}

function handleSelect(node: KnowledgeTreeNode) {
    selected.value = JSON.parse(JSON.stringify(node));
    editing.value = false;
    original.value = JSON.parse(JSON.stringify(node));
}

function handleAdd() {
    selected.value = {
        title: '',
        content: '',
        type: 'article',
        parentID: null,
    };
    editing.value = true;
    original.value = null;
}

async function saveEdit() {
    if (!selected.value) return;
    if (selected.value.id) {
        // 更新
        await updateNode(selected.value.id, selected.value as KnowledgeNode);
    } else {
        // 新增
        const created = await createNode(selected.value as KnowledgeNode);
        selected.value = created;
    }
    editing.value = false;
    await loadTree();
}

function cancelEdit() {
    if (original.value) {
        selected.value = JSON.parse(JSON.stringify(original.value));
        editing.value = false;
    } else {
        selected.value = null;
        editing.value = false;
    }
}

onMounted(loadTree);
</script>
