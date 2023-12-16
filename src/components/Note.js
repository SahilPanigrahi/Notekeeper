import React from 'react';

const Note = ({ note, onPin, onDelete, onNoteClick }) => {
  const handleNoteClick = () => {
    onNoteClick(note);
  };

  const handlePinClick = (e) => {
    e.stopPropagation();
    onPin(note);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(note);
  };

  return (
    <div className={`note ${note.pinned ? 'pinned' : ''}`} onClick={handleNoteClick}>
      <div className="upprbox">
      <h3>{note.title}</h3>
      <p className='p-tagline'>{note.tagline}</p>
      </div>
      <p className='p-body'>{note.body}</p>
      <button className="pin" onClick={handlePinClick}>
        {note.pinned ? 'Unpin' : 'Pin'}
      </button>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Note;
