import React from 'react'
import NoteCard from "./NoteCard"

const NoteCardContainer = () => {
  return (
    <div className="container mt-5">
    <div className="note-has-grid row">
    <NoteCard color="purple"/>
    <NoteCard color="purple"/>
    <NoteCard color="purple"/>
    <NoteCard color="purple"/>
    <NoteCard color="purple"/>
    <NoteCard color="purple"/>
    <NoteCard color="purple"/>
    </div>
    </div>
  )
}

export default NoteCardContainer