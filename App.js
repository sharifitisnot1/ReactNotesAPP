import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: '',
      content: '',
    };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
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

