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

  };

  return (
    <div className="book-show">
      {book.title}
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
