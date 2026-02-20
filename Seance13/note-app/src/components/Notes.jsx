import React, { useState } from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'



export default function Notes() {
   const [notes,setNotes] = useState([])

  return (
    <div>
      <NoteForm notes={notes} setNotes={setNotes}/>
      <NoteList notes={notes}/>
    </div>
  )
}
