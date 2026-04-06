from fastapi import FastAPI
from database import Base, engine
from routes.book import router

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(router, prefix="/books")