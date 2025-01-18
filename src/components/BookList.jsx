import React from "react";

const BookList = ({ books }) => {
  const renderedBooks = books.map((book) => {
    return <BookList key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
