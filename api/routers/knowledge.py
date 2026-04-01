from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from typing import List, Optional, Dict, Any

from api.db.index import get_db
from api.types.knowledge import KnowledgeNode

router = APIRouter(prefix="/knowledge/article", tags=["KnowledgeNode"])
# 获取所有节点并组织为树结构
@router.get("/", response_model=List[Dict[str, Any]])
def get_tree(db: Session = Depends(get_db)):
	nodes = db.exec(select(KnowledgeNode)).all()
	node_dict = {node.id: node for node in nodes}
	tree = []
	# 构建树结构
	for node in nodes:
		item = node.__dict__.copy()
		item['children'] = []
		node_dict[node.id] = item
	for node in node_dict.values():
		parent_id = node.get('parentID')
		if parent_id and parent_id in node_dict:
			node_dict[parent_id]['children'].append(node)
		else:
			tree.append(node)
	return tree
# 新增目录或文章
@router.post("/", response_model=KnowledgeNode, status_code=status.HTTP_201_CREATED)
def create_node(node: KnowledgeNode, db: Session = Depends(get_db)):
	db.add(node)
	db.commit()
	db.refresh(node)
	return node

# 获取单条目录或文章
@router.get("/{id}", response_model=KnowledgeNode)
def get_node(id: int, db: Session = Depends(get_db)):
	node = db.get(KnowledgeNode, id)
	if not node:
		raise HTTPException(status_code=404, detail="Node not found")
	return node

# 删除目录或文章
@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_node(id: int, db: Session = Depends(get_db)):
	node = db.get(KnowledgeNode, id)
	if not node:
		raise HTTPException(status_code=404, detail="Node not found")
	db.delete(node)
	db.commit()
	return None

# 更新目录或文章
@router.put("/{id}", response_model=KnowledgeNode)
def update_node(id: int, new_node: KnowledgeNode, db: Session = Depends(get_db)):
	node = db.get(KnowledgeNode, id)
	if not node:
		raise HTTPException(status_code=404, detail="Node not found")
	# 只更新允许的字段
	node.title = new_node.title
	node.parentID = new_node.parentID
	node.content = new_node.content
	node.type = new_node.type
	node.updateTime = new_node.updateTime
	node.private = new_node.private
	db.commit()
	db.refresh(node)
	return node
