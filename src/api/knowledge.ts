// 文件树节点类型（递归）
export interface KnowledgeTreeNode extends KnowledgeNode {
  children?: KnowledgeTreeNode[];
}

// 获取文件树
export async function getTree(): Promise<KnowledgeTreeNode[]> {
  const res = await fetch(BASE_URL + '/');
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
// 博客节点类型定义
export interface KnowledgeNode {
  id?: number;
  title?: string;
  parentID?: number;
  content?: string;
  type: 'dir' | 'article';
  createTime?: string;
  updateTime?: string;
  private?: boolean;
}

const BASE_URL = '/knowledge/article';

// 新增节点（目录或文章）
export async function createNode(node: KnowledgeNode): Promise<KnowledgeNode> {
  const res = await fetch(BASE_URL + '/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(node),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// 获取单个节点
export async function getNode(id: number): Promise<KnowledgeNode> {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// 更新节点
export async function updateNode(id: number, node: KnowledgeNode): Promise<KnowledgeNode> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(node),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// 删除节点
export async function deleteNode(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(await res.text());
}
