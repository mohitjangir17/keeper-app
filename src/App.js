import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";

function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (note) => {
    setNotes((prevValues) => {
      return [...prevValues, note];
    });
  };

  const handleIsDone = (id) => {};

  const handleDelete = (id) => {
    if (window.confirm("This task will be permanently deleted ?")) {
      setNotes((prevItems) => {
        return prevItems.filter((noteItem, index) => {
          return index !== id;
        });
      });
    } else {
      return;
    }
  };
  return (
    <div className="App">
      <Header />
      <AddNote onAdd={handleAddNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={handleDelete}
            isDone={handleIsDone}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
