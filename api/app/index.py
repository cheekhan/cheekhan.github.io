# 按照最新FastAPI和Python语法，使用lifespan管理生命周期
from fastapi import FastAPI
from fastapi import APIRouter
from contextlib import asynccontextmanager
from api.routers.index import router as api_router
from api.db.index import engine
from sqlmodel import SQLModel

@asynccontextmanager
async def lifespan(app: FastAPI):
	# 应用启动时初始化数据库
	SQLModel.metadata.create_all(engine)
	yield
	# 可在此处添加关闭时的清理逻辑

app = FastAPI(lifespan=lifespan)
app.include_router(api_router)
