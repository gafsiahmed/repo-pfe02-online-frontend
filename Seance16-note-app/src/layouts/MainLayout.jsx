import {useContext} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { UserContext} from '../contexts/UserContext'
import useUser from '../hooks/useUser'




export default function MainLayout({children}) {


    const user = useUser()

  return (
    <div className='min-h-screen flex flex-col'>
        
        {/* Navbar Component */}
        <Navbar/>
        <main className='flex-1 mx-4 px-2 py-6'>
         <p>Welcome mr {user.userName}</p>
            {children}
        </main>
        {/* Footer Component */}
        <Footer/>
    </div>
  )
}
