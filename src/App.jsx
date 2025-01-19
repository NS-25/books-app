import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
// import "./App.css";

function App() {
  let [books, setBooks] = useState([]);

  // Edit function for the book card
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // delete function for the book card..
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {

    const response = await axios.post('http://localhost:3001/books',{
      title,
    });

    console.log(response);

    // const updatedBooks = [
    //   ...books,
    //   { id: Math.round(Math.random() * 9999), title },
    // ];
    // setBooks(updatedBooks);
  };
  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookList
          onEdit={editBookById}
          books={books}
          onDelete={deleteBookById}
        />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
