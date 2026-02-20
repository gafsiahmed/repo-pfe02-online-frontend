import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function NoteDetailPage() {

    const params = useParams()
    console.log(params)

  return (
    <MainLayout>
       <h1>Note Detail Page {params.noteId}</h1>
    </MainLayout>
 
  
  )
}
