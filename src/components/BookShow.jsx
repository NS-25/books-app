import { useState } from "react";
import BookEdit from "./BookEdit";

import React from "react";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  // handle delete function....
  const handleDeleteClick = () => {
    onDelete(book.id);
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
    content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />;
  }

  return (
    <div className="book-show">
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
