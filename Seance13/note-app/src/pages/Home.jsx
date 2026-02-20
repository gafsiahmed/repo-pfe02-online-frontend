import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NoteForm from '../components/NoteForm'
import NoteList from '../components/NoteList'
import Notes from '../components/Notes'

export default function Home() {

 
  return (
   <>
    <Navbar/>
    <Notes />
    <Footer/>
   </>
  )
}
