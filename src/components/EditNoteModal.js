import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-hot-toast';
import '../App.css';

Modal.setAppElement('#root');

const EditNoteModal = ({ note, onEdit, onClose }) => {
  const [editedNote, setEditedNote] = useState({ ...note });
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    setIsModalOpen(true);
  }, [note]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSaveChanges = () => {
    onEdit(editedNote);
    toast.success('Note updated successfully!');
    handleClose();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleClose}
      contentLabel="Edit Note Modal"
      className="edit-note-modal"
      overlayClassName="edit-note-modal-overlay"
    >
      <h2>Edit Note</h2>
      <div className="input-group">
        <label htmlFor="editTitle">Title:</label>
        <input
          type="text"
          id="editTitle"
          name="title"
          value={editedNote.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="editTagline">Tagline:</label>
        <input
          type="text"
          id="editTagline"
          name="tagline"
          value={editedNote.tagline}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="editBody">Body:</label>
        <textarea
          id="editBody"
          name="body"
          value={editedNote.body}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={handleClose}>Cancel</button>
    </Modal>
  );
};

export default EditNoteModal;
