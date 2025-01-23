import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

import React from "react";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);
  // handle delete function....
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  // handle edit click
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  //handle submit for edit form close..
  const handleSubmit = () => {
    setShowEdit(false);
  };

  // Question part!
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="boos" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
