import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BooksContext from "./context/books.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksContext.Provider value={5}>
      <App />
    </BooksContext.Provider>
  </StrictMode>
);
