import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function AddNote({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    isDone: false,
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (note.title.length === 0) {
      alert("Title must be filled");
      return;
    } else if (note.content.length === 0) {
      alert("Content must be filled");
      return;
    } else {
      onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
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
      <div className="AddIcon">
        <AddIcon onClick={submitNote}> Add Note</AddIcon>
      </div>
      {/* <button onClick={submitNote}>Add Note</button> */}
    </div>
  );
}

export default AddNote;
