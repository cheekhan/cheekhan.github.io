from fastapi import APIRouter
import api.routers.cas.index as cas_router

router = APIRouter()

router.include_router(cas_router.router)