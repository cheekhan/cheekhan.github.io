from fastapi import APIRouter
import api.routers.knowledge as knowledge_router

router = APIRouter()

router.include_router(knowledge_router.router)