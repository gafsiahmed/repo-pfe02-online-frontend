import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {


  const navigate = useNavigate()

    const handleClick = (e)=>{
      e.preventDefault()
      navigate("/")
    }

  return (
    <nav className='flex bg-indigo-400 text-white justify-between items-center px-2 py-4 sticky top-0 z-40'>
       
        <h1 
        className='text-2xl font-bold'
        onClick={handleClick}
        
        >NoteApp</h1>

        <ul className='flex gap-4 text-sm items-center'>
            <Link to="/about" >About us</Link>
             <Link to="/contact" >Contact us</Link>
             <Link to="/service" >service</Link>
            <li>
                <button className='bg-indigo-700 px-4 py-2 rounded-xl hover:bg-indigo-100 hover:text-black hover:cursor-pointer'>Login</button>
            </li>
        </ul>
    </nav>
  )
}
