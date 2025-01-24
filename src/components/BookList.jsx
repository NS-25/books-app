import React from "react";
import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function useBooksContext () {
  return useBooksContext(BooksContext);
}

const BookList = () => {

  // context value use here...
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
