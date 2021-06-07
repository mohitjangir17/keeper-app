import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function AddNote({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div className="AddNote">
      <input
        type="text"
        onChange={handleOnChange}
        value={note.title}
        placeholder="Title"
        name="title"
      />{" "}
      <br />
      <input
        type="text"
        onChange={handleOnChange}
        value={note.content}
        placeholder="Content"
        name="content"
      />{" "}
      <br />
      <AddIcon onClick={submitNote}>Add Note</AddIcon>
    </div>
  );
}

export default AddNote;
