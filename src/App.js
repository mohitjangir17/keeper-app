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
  const handleDelete = (id) => {
    setNotes((prevItems) => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
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
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
