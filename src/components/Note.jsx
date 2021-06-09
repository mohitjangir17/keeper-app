import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, content, onDelete, id, isDone }) {
  return (
    <div onClick={() => isDone(id)} className="Note">
      <h2>{title}</h2>
      <p>{content}</p>
      <DeleteIcon onClick={() => onDelete(id)}></DeleteIcon>
      {/* <button onClick={() => onDelete(id)}>Delete</button> */}
    </div>
  );
}
export default Note;
