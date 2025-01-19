import { useState } from "react";

import React from "react";

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  // handle delete function....
  const handleClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <div className="action">
          <button>Edit</button>
        </div>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
