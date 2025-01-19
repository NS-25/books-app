import { useState } from "react";
import BookEdit from "./BookEdit";

import React from "react";

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  // handle delete function....
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  // handle edit click
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <div className="action">
          <button>Edit</button>
        </div>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
