// App.js
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';
import Pagination from './components/Pagination';
import EditNoteModal from './components/EditNoteModal'; 
import { Toaster } from 'react-hot-toast';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNote, setSelectedNote] = useState(null); 
  const notesPerPage = 6;

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
    setNotes((prevNotes) =>
      prevNotes
        .sort((a, b) => b.pinned - a.pinned || b.timestamp - a.timestamp)
    );
  };

  const handlePinNote = (noteToPin) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteToPin.id ? { ...note, pinned: !note.pinned } : note
      )
    );

    setNotes((prevNotes) =>
      prevNotes
        .sort((a, b) => b.pinned - a.pinned || b.timestamp - a.timestamp)
    );
  };

  const handleDeleteNote = (deletedNote) =>
    setNotes(notes.filter((note) => note.id !== deletedNote.id));

  const handleEditNote = (editedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editedNote.id ? { ...note, ...editedNote } : note
      )
    );
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleModalClose = () => {
    setSelectedNote(null);
  };

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <div className="app">
      <h1>Notekeeper</h1>
      <div className="container">
        <AddNoteForm onAdd={handleAddNote} />
        <NoteList
          notes={currentNotes}
          onPin={handlePinNote}
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
          onNoteClick={handleNoteClick}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(notes.length / notesPerPage)}
        onPageChange={setCurrentPage}
      />
      <Toaster position="top-right" />


      {selectedNote && (
        <EditNoteModal
          note={selectedNote}
          onEdit={handleEditNote}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default App;
