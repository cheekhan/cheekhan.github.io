from fastapi import APIRouter

router = APIRouter(
    prefix="/cas",
    tags=["cas"],
    responses={404: {"description": "Not found"}},
)

@router.post("/login")
async def login():
    return {"message": "Login endpoint"}