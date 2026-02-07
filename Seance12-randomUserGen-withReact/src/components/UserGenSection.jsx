
import './UserGenSection.css'
import reactLogo from '../assets/react.svg'
import { useState } from 'react'
import UserCard from './UserCard'


export default function UserGenSection() {
const [currentUser , setCurrentUser] = useState({
    name : {
        title : "Mr",
        first : "Placeholder",
        last : "Placeholder"
    },
    email : "Placeholder",
    phone : "Placeholder",
    location : {
        city : "Placeholder",
        country : "placeholder"
    },
    picture : {
        large : "adress phot"
    }
})
    
const URL = 'https://randomuser.me/api/'
async function fetchUser(){
    try {
        const response = await fetch(URL)
        const data = await response.json()
        setCurrentUser(data.results[0])
        console.log(currentUser)
        return data.results[0]
    }
    catch(error){
        console.log("ERRORvc :" , error)
    }
}

// fetchUser()

// let count = 0
const [countState , setCountState ] = useState(0)
function increaseCount(){
        setCountState( prev => prev + 1)  
}


return (
    <div className='userGenSection'>
        <h1 className='title'>Welcome To Random User Generation</h1>
        <p>Generate a random user by just clicking the button</p>
        <button onClick={fetchUser}>Generate User</button>

        <UserCard  user={currentUser} />

        <h2>The cout is </h2>
        <p>{countState}</p>
        <button onClick={increaseCount}>Increase Count ++</button>

    </div>
  )
}
