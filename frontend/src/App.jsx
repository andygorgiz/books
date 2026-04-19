import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null); // 👈 NY

  const fetchBooks = async () => {
    const res = await API.get("/books/");
    setBooks(res.data);
  };

  const addBook = async () => {
    if (!title || !author) return;
    await API.post("/books/", { title, author });
    setTitle("");
    setAuthor("");
    fetchBooks();
  };

  const updateBook = async () => {
    if (!title || !author) return;

    await API.put(`/books/${editingId}`, {
      title,
      author
    });

    setTitle("");
    setAuthor("");
    setEditingId(null);

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

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button onClick={editingId ? updateBook : addBook}>
        {editingId ? "Update" : "Add"}
      </button>

      {books.map((b) => (
        <div key={b.id}>
          {b.title} - {b.author}

          <button
            onClick={() => {
              setTitle(b.title);
              setAuthor(b.author);
              setEditingId(b.id);
            }}
          >
            Edit
          </button>

          <button onClick={() => deleteBook(b.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;