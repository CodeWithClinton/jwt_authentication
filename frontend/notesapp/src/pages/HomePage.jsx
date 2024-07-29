import React from 'react'
import NoteCardContainer from '../components/NoteCardContainer'
import Error from '../components/Error'

const HomePage = ({notes, error}) => {
  if(error){
    return <Error error={error} />
  }
  return (
    <NoteCardContainer notes={notes} />
  )
}

export default HomePage