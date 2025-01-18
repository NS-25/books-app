import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import "./App.css";

function App() {
  let [books, setBooks] = useState([]);



  // delete function for the book card..
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
    return false;
    });
  };

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
        <BookList books={books} />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
