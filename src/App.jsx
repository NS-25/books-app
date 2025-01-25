import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
// import "./App.css";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  // useEffect for fetch data from server..
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // Do not call fetch request directly..
  // fetchBooks();

  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </>
  );
}

export default App;
