import { useState } from "react";
import BookCreate from "./components/BookCreate";
// import "./App.css";

function App() {
  let [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: 123, title: title }];
    setBooks(updatedBooks);
  };
  return (
    <>
      <div>
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
