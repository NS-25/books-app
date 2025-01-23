import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
// import "./App.css";

function App() {
  
  // useEffect for fetch data from server..
  useEffect(() => {
    fetchBooks();
  }, []);

  // Do not call fetch request directly..
  // fetchBooks();

 
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
