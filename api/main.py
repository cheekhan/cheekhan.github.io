from fastapi import FastAPI
import api.routers.index as api_router
from fastapi.responses import RedirectResponse
import asyncio

app = FastAPI()

app.include_router(api_router.router)

@app.get("/")
async def root():
    await asyncio.sleep(2)  
    return RedirectResponse(url="http://localhost:5173/")