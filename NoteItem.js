import React from 'react';

function NoteItem({ note, isSelected, onSelectNote }) {
  return (
    <div
      className={`note-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelectNote}
    >
      <h3>{note.title || 'Untitled'}</h3>
      <p>{note.content}</p>
    </div>
  );
}

export default NoteItem;
