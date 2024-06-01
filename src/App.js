import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  
  const colorList = [
    { color: '#FFFFFF', name: 'White' },
    { color: '#F28B82', name: 'Red' },
    { color: '#FBCB8B', name: 'Orange' },
    { color: '#FFF475', name: 'Yellow' },
    { color: '#CCFF90', name: 'Light Green' },
    { color: '#A7FFEB', name: 'Turquoise' },
    { color: '#CBF0F8', name: 'Light Blue' },
    { color: '#AECBFA', name: 'Blue' },
    { color: '#D7AEFB', name: 'Purple' },
    { color: '#FDCFE8', name: 'Pink' },
  ];  

  const addNote = () => {
    //add a new note to the notes array
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
      color: 'white'
    }
    setNotes([newNote, ...notes]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if(note.id === activeNote){
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <Sidebar 
      notes = {notes} 
      addNote = {addNote} 
      deleteNote={deleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      <Main 
      activeNote={getActiveNote()}
      updateNote={updateNote}
      colorList={colorList}
      />
    </div>
  );
}

export default App;
