import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  let [books, setBooks] = useState([]);

  // get request api call
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const [count, setCount] = useState(5);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
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
