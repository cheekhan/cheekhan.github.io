# 使用sqlmodel实现数据库连接和依赖注入
from sqlmodel import SQLModel, create_engine, Session
from typing import Generator

# 数据库文件路径
DATABASE_URL = "sqlite:///./test.db"

# 创建数据库引擎
engine = create_engine(DATABASE_URL, echo=False)

# 依赖注入的Session生成器
def get_db() -> Generator[Session, None, None]:
	with Session(engine) as session:
		yield session
