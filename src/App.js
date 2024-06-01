import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);	

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
      />
    </div>
  );
}

export default App;
