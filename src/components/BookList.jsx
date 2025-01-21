import React from "react";
import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  // context value use here...
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return (
    <div className="book-list">
      {value}
      {renderedBooks}
    </div>
  );
};

export default BookList;
