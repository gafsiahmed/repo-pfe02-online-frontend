import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NoteForm from '../components/NoteForm'
import NoteList from '../components/NoteList'
import Notes from '../components/Notes'
import MainLayout from '../layouts/MainLayout'

export default function Home() {

 
  return (
    <MainLayout>
      <Notes />
    </MainLayout>
   
  )
}
