import { useState } from "react";
import BookCreate from "./components/BookCreate";
// import "./App.css";

function App() {
  let [books, setBooks] = useState([]);

  const createBook = (title) => {};
  return (
    <>
      <div>
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
