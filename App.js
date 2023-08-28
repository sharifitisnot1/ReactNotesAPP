import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import './styles.css';

const NOTES_STORAGE_KEY = 'notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const savedNotes = loadNotesFromLocalStorage();
    setNotes(savedNotes);
  }, []);

  const loadNotesFromLocalStorage = () => {
    const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
    return savedNotes ? JSON.parse(savedNotes) : [];
  };

  const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  };

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: '',
      content: '',
    };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote);
    saveNotesToLocalStorage([...notes, newNote]); // Save to localStorage
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes); // Save to localStorage
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes); // Save to localStorage
    setSelectedNote(null);
  };

  return (
    <div className="app">
      <NoteList
        notes={notes}
        selectedNote={selectedNote}
        onSelectNote={setSelectedNote}
      />
      <NoteEditor
        note={selectedNote}
        onSave={updateNote}
        onDelete={deleteNote}
      />
      <button onClick={createNote}>Create Note</button>
    </div>
  );
}

export default App;
