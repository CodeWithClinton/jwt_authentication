import React from "react";
import NoteCard from "./NoteCard";

const NoteCardContainer = ({ notes }) => {
  return (
    <div className="container mt-5">
      <div className="note-has-grid row">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} color="purple" />
        ))}
        {/* <NoteCard color="purple" />
        <NoteCard color="purple" />
        <NoteCard color="purple" />
        <NoteCard color="purple" />
        <NoteCard color="purple" />
        <NoteCard color="purple" />
        <NoteCard color="purple" />
        <NoteCard color="purple" /> */}
      </div>
    </div>
  );
};

export default NoteCardContainer;
