# API说明文档

## 一、知识库模块
### 0.实体

**文章记录**
| 字段名称   | 字段类型 | 字段说明             |
| ---------- | -------- | -------------------- |
| id         |          | 主键id               |
| title      |          | 标题                 |
| parentID   |          | 上级id               |
| articleID  |          | 外建文章id           |
| createTime |          |                      |
| updateTime |          |                      |
| private    |          | 私有的，后期可能对外 |
| status     |          | 发布、草稿、删除     |

**文章**
| 字段名称 | 字段类型 | 字段说明 |
| -------- | -------- | -------- |
| id       |          |          |
| content  |          | 文章内容 |

### 1.文章相关

**路径**：`/knowledge/article`

**GET**：`/knowledge/article/{id}`

获取文章，返回

**DELETE**：`/knowledge/article/{id}`,删除一片文章

**POST**:`/knowledge/article`，新增一篇文章

## 二、大六壬模块