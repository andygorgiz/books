from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models.book import Book
from schema.book import BookCreate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create(book: BookCreate, db: Session = Depends(get_db)):
    new = Book(title=book.title, author=book.author)
    db.add(new)
    db.commit()
    db.refresh(new)
    return new

@router.get("/")
def get_all(db: Session = Depends(get_db)):
    return db.query(Book).all()

@router.get("/{id}")
def get_one(id: int, db: Session = Depends(get_db)):
    book = db.query(Book).filter(Book.id == id).first()
    if not book:
        raise HTTPException(404, "Not found")
    return book

@router.put("/{id}")
def update(id: int, data: BookCreate, db: Session = Depends(get_db)):
    book = db.query(Book).filter(Book.id == id).first()
    if not book:
        raise HTTPException(404, "Not found")

    book.title = data.title
    book.author = data.author
    db.commit()
    return book

@router.delete("/{id}")
def delete(id: int, db: Session = Depends(get_db)):
    book = db.query(Book).filter(Book.id == id).first()
    if not book:
        raise HTTPException(404, "Not found")

    db.delete(book)
    db.commit()
    return {"message": "deleted"}