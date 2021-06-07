import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, content, onDelete, id }) {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <div className="Note">
      <h2>{title}</h2>
      <p>{content}</p>
      <DeleteIcon onClick={() => onDelete(id)}></DeleteIcon>
    </div>
  );
}
export default Note;
