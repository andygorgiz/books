import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

const fetchBooks = async () => {
  const res = await API.get("/books/");
  setBooks(res.data);
};

const addBook = async () => {
  await API.post("/books/", { title, author });
  fetchBooks();
};

const deleteBook = async (id) => {
  await API.delete(`/books/${id}`);
  fetchBooks();
};

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Books</h1>

      <input onChange={(e) => setTitle(e.target.value)} />
      <input onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={addBook}>Add</button>

      {books.map((b) => (
        <div key={b.id}>
          {b.title} - {b.author}
          <button onClick={() => deleteBook(b.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;