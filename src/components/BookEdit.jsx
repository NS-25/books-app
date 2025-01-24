import { useState } from "react";
import React from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  // handle click for edit button...
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // handle submit for edit form..
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("New title", title);
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
