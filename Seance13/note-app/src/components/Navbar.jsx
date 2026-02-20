import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex bg-indigo-400 text-white justify-between items-center px-2 py-4 sticky top-0 z-40'>
        <h1 className='text-2xl font-bold'>NoteApp</h1>
        <ul className='flex gap-4 text-sm items-center'>
            <li>About us</li>
            <li>Contact</li>
            <li>Service</li>
            <li>
                <button className='bg-indigo-700 px-4 py-2 rounded-xl hover:bg-indigo-100 hover:text-black hover:cursor-pointer'>Login</button>
            </li>
        </ul>
    </nav>
  )
}
