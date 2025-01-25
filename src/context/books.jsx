import { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { ESLint } from "eslint";

const BooksContext = createContext();

function Provider({ children }) {
  let [books, setBooks] = useState([]);

  // get request api call
  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  // ESLint error fix wit useCallback for useEffect function..
  // const stableFetchBooks = useCallback(fetchBooks, []);

  // Edit function for the book card
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    // console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // delete function for the book card..
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById: deleteBookById,
    editBookById: editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

// context using in main.js
// BookList.jsx
