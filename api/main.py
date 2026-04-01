from fastapi import FastAPI
import api.routers as api_router
from fastapi.responses import RedirectResponse
from api.db.index import engine
from sqlmodel import SQLModel
from contextlib import asynccontextmanager

# 使用 lifespan 事件管理数据库生命周期
@asynccontextmanager
async def lifespan(app: FastAPI):
    # 启动时建表
    SQLModel.metadata.create_all(engine)
    yield
    # 关闭时可扩展关闭连接等操作

app = FastAPI(lifespan=lifespan)

app.include_router(api_router.router)
