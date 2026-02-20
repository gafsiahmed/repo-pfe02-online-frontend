import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './contexts/UserContext.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import About from './pages/About.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Home from './pages/Home.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'



const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
    path : '/note/:noteId',
    element : <NoteDetailPage/>
  },
   {
    path : '/contact',
    element : <Contact/>
  },
   {
    path : '/service',
    element : <Service/>
  },
   {
    path : '*',
    element : <NotFoundPage/>
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>,
)
 