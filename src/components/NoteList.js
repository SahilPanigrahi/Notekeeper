import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onPin, onDelete, onEdit, onNoteClick }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onPin={onPin}
          onDelete={onDelete}
          onEdit={onEdit}
          onNoteClick={onNoteClick}
        />
      ))}
    </div>
  );
};

export default NoteList;
