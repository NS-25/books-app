import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import "./App.css";

function App() {
  let [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <>
      <div className="app">
        <bookList books={books} />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
