import React, { useState, useEffect } from 'react';

function NoteEditor({ note, onSave, onDelete }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSave = () => {
    if (note) {
      onSave({ ...note, title, content });
    }
  };

  const handleDelete = () => {
    if (note) {
      onDelete(note.id);
    }
  };

  return (
    <div className="note-editor">
      {note && (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default NoteEditor;
