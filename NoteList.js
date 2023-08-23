import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, selectedNote, onSelectNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          isSelected={selectedNote === note}
          onSelectNote={() => onSelectNote(note)}
        />
      ))}
    </div>
  );
}

export default NoteList;
