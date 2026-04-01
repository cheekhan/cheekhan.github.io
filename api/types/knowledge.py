from typing import Optional
from datetime import datetime
from sqlmodel import SQLModel, Field

class KnowledgeNode(SQLModel, table=True):
    """
    博客目录树节点，既可为目录也可为文章
    type: 'dir' 目录，'article' 文章
    """
    id: Optional[int] = Field(default=None, primary_key=True, description="主键id")
    title: Optional[str] = Field(default=None, description="标题（目录或文章标题）")
    parentID: Optional[int] = Field(default=None, description="上级id")
    content: Optional[str] = Field(default=None, description="文章内容，仅type=article时有值")
    type: str = Field(description="节点类型：'dir'为目录，'article'为文章")
    createTime: datetime = Field(default_factory=datetime.utcnow, description="创建时间")
    updateTime: datetime = Field(default_factory=datetime.utcnow, description="更新时间")
    private: bool = Field(default=False, description="是否私有")
    # status: Optional[str] = Field(default="draft", description="发布状态：发布、草稿、删除")
