from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Model for POST body
class User(BaseModel):
    name: str | None = None
    email: str | None = None

# GET
@app.get("/api/hello")
def hello():
    return {"message": "Hello world"}

# POST
@app.post("/api/user")
def create_user(user: User):
    return {"received": user.dict()}

# To run:
# uvicorn main:app --reload --port 3000
