import React, { useState } from 'react'
import NoteList from './NoteList'

export default function NoteForm({notes,setNotes}) {



    const [formData, setFormData] = useState({
            title : '',
            priority : '',
            category : '',
            description : ''
    })


    function handleChange(e){
    const {name,value} = e.target
    setFormData((prev)=>{
        return {
            ...prev,
            [name] : value
        }
    })

    }

  
    function handleSubmit(e){
        e.preventDefault()
        let newNote = {
            id : Date.now(),
            ...formData
        }
      
        setNotes((prev)=>{
            return [...prev,newNote]
        })

        // reset the form 
        setFormData({
            title : '',
            priority : '',
            category : '',
            description : ''
        })




    }
  
  
return (
    <>
    <form 
    onSubmit={handleSubmit}
    className='flex flex-col p-10 w-2/3'>
        <label htmlFor="title">Title</label>
        <input
        type="text"
        id='title'
        name='title'
        value={formData.title}
        className='border-2 rounded-xl p-2'
        onChange={handleChange}
        />

        <label htmlFor="priority">Priority</label>
        <select 
        name="priority" 
        id="priority"
        value={formData.priority}
        className='border-2 p-2 rounded-xl'  
        onChange={handleChange}
        >
            <option value="Low">🟢Low</option>
            <option value="Medium">🟠Medium</option>
            <option value="High">🔴High</option>
        </select>





        <label htmlFor="category">Category</label>
        <select 
        name="category" 
        id="category"
        value={formData.category}
        className='border-2 p-2 rounded-xl'  
        onChange={handleChange}
        >
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="fun">fun</option>
            <option value="personal">personal</option>
        </select>
        <label htmlFor="description">Discription</label>
        <textarea 
        name="description" 
        id="description"
        value={formData.description}
        className='border-2 p-2 rounded-xl'
        onChange={handleChange}
        ></textarea>

        <button
        className='bg-indigo-400 text-white px-4 py-3 rounded-xl mt-4 font-bold text-lg hover:bg-indigo-900 hover:text-white hover:cursor-pointer'
        >
            Add Note
        </button>

       

    </form>

    
    </>
  )
}
