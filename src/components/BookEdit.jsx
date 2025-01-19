import { useState } from "react";
import React from "react";

const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);

  // handle click for edit button...
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // handle submit for edit form..
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("New title", title);
    onEdit(book.id, title);
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
