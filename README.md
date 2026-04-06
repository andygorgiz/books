# 📚 Books CRUD App

**Andy Gorgiz**

En fullstack-applikation byggd med **FastAPI (backend)** och **React (frontend)** som hanterar en boklista med full CRUD-funktionalitet.

---

# 🚀 Funktioner

* Skapa bok (POST)
* Hämta alla böcker (GET)
* Hämta en bok (GET by ID)
* Uppdatera bok (PUT)
* Ta bort bok (DELETE)

---

# 🛠️ Tekniker

## Backend

* FastAPI
* SQLAlchemy
* SQLite
* Pydantic

## Frontend

* React (Vite)
* Axios

---

# 📁 Projektstruktur

```
/backend
  ├── app.py
  ├── database.py
  ├── models/
  ├── schema/
  └── routes/

/frontend
  ├── src/
  └── package.json
```

---

# ▶️ Starta Backend

```bash
cd backend
```

Skapa och aktivera virtual environment:

```bash
python -m venv venv
source venv/Scripts/activate   # Windows
```

Installera dependencies:

```bash
pip install -r requirements.txt
```

Starta servern:

```bash
uvicorn app:app --reload
```

Backend körs på:

```
http://127.0.0.1:8000
```

Swagger docs:

```
http://127.0.0.1:8000/docs
```

---

# 💻 Starta Frontend

```bash
cd frontend
```

Installera dependencies:

```bash
npm install
```

Starta appen:

```bash
npm run dev
```

Frontend körs på:

```
http://localhost:5173
```

---

# 🔗 API Endpoints

| Method | Endpoint    | Beskrivning       |
| ------ | ----------- | ----------------- |
| POST   | /books/     | Skapa ny bok      |
| GET    | /books/     | Hämta alla böcker |
| GET    | /books/{id} | Hämta en bok      |
| PUT    | /books/{id} | Uppdatera bok     |
| DELETE | /books/{id} | Ta bort bok       |

---

# ⚠️ Viktigt

* Backend måste vara igång innan frontend startas
* CORS är aktiverat för att frontend ska kunna kommunicera med backend
* Databasen är SQLite och skapas automatiskt

---
