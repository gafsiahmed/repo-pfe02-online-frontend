import React from 'react'
import './Navbar.css'



export default function Navbar(){
    return(
        <nav className='navbar'>
            <h1 className='logo'>RandomUserGen</h1>
            <ul className='menu'>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Team</a></li>
                <li><button>Login</button></li>
            </ul>
        </nav>
    )
}