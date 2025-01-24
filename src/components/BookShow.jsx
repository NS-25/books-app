import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

import React from "react";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();
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
