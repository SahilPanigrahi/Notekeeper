import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AddNoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [body, setBody] = useState('');

  const handleAddNote = () => {
    if (title && body) {
      const newNote = {
        id: Date.now(),
        title,
        tagline,
        body,
        pinned: false,
        timestamp: Date.now(),
      };
      onAdd(newNote);
      setTitle('');
      setTagline('');
      setBody('');
      toast.success('Note added successfully!');
    } else {
      toast.error('Title and Body are required!');
    }
  };

  return (
    <div className="add-note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tagline"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default AddNoteForm;
