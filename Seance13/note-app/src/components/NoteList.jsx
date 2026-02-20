import React from 'react'

export default function NoteList({notes}) {
  return (
   <div className='flex flex-col gap-4 p-10'>
        <h2 className='text-2xl font-bold text-center'>Your notes</h2>
        {notes.map((note)=> {
            return (
                <div className={`border-2 p-4 rounded-2xl ${note.priority === 'High'? 'bg-red-400 text-white':note.priority === 'Medium'? 'bg-orange-600 text-white' : 'bg-green-300'}`}>
                    <p className='text-2xl font-bold'>{note.title}</p>
                    <p>{note.priority}</p>
                    <p>{note.category}</p>
                    <p>{note.description}</p>
                </div>
            )
        })}
    </div>
  )
}
