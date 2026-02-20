import React, { useState } from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'



export default function Notes() {
   const [notes,setNotes] = useState([])
   const [showForm, setShowForm] = useState(false)

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold'>Welcome to the best Note taking App</h1>
      <button 
      className='rounded-lg font-medium bg-indigo-800 text-white px-4 py-2 mt-6 hover:bg-indigo-300 hover:text-black hover:cursor-pointer'
      onClick={()=>{
             setShowForm((prev)=> !prev)
      }}
      >
        {showForm ? 'Hide Form' : 'Add Note'}
      </button>


     { showForm && <NoteForm notes={notes} setNotes={setNotes}/>}

      <NoteList notes={notes}/>
    </div>
  )
}
