import { Component, use, useEffect, useState } from 'react'
import UserCard from './UserCard'
import NoData from './NoData'




export default function UserGenSection() {
const [currentUser , setCurrentUser] = useState(null)
const [users,setUsers] = useState([])

const [userLoggedIn, setUserLoggedIn] = useState(true)

const [random, setRandom] = useState(0)
    
const URL = 'https://randomuser.me/api/'


// fetchUser()

// let count = 0
const [countState , setCountState ] = useState(0)

function increaseCount(){
        setCountState( prev => prev + 1)  
}

 async function fetchUser(){
    try {
        const response = await fetch(URL)
        const data = await response.json()
        setCurrentUser(data.results[0])
        return data.results[0]
    }
    catch(error){
        console.log("ERRORvc :" , error)
    }
 }


useEffect( ()=> {
        async function loadUser(){
            const firstUser = await fetchUser()
            setCurrentUser(firstUser)
        }

        loadUser()
},[])


const [todos, setTodos] = useState([
    {id:1, title:"Learn React", state:"done"},
    {id:2, title:"Learn NodeJS", state:"in progress"},
    {id:3, title:"Learn MongoDB", state:"in progress"},
    {id:4, title:"Clean the house", state:"done"},
    {id:5, title:"Go to the Gym", state:"in progress"},
    {id:6, title:"Go to the restqurqnt", state:"done"},
])



async function fetchAllUsers (){
    const URL = "https://jsonplaceholder.typicode.com/users"

    try {
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)
        console.log("ALL USERS : " , data)
    }

    catch(error){
        console.log(error)
    }
}

useEffect( ()=> { 
    fetchAllUsers()  
},[])



return (
    <div className='userGenSection'>
        {userLoggedIn && <p>Welcome Back Dear user</p>}

        <h1 className='text-3xl font-bold text-red-200 bg-red-900 p-2 text-center'>Welcome To Random User Generation</h1>
        <p>Generate a random user by just clicking the button</p>
        <button onClick={fetchUser}>Generate User</button>

        {/* <UserCard  user={currentUser} /> */}
        {currentUser !== null ? <UserCard  user={currentUser} /> : <NoData/>}


        <div className="todos">
                <h2>Todos Of the Day</h2>
                <ul>
                    {todos.map((todo)=>{
                        return <li key={todo.id}>
                          {todo.id} | {todo.title} | {todo.state}
                        </li>
                    })}
                </ul>
        </div>


        <h2> All Users </h2>
        <table className='border'>
                    <thead className='border'>
                        <tr className='bg-blue-400 text-white' >
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {users && users.map((user)=>{
                            return <tr key={user.id}>
                                        <td  className='border p-2 bg-blue-300'>{user.id}</td>
                                        <td className='border p-2 bg-blue-300'>{user.name}</td>
                                        <td className='border p-2 bg-blue-300'>{user.email}</td>
                                        <td className='border p-2 bg-blue-300'>{user.website}</td>
                                        <td className='border p-2 bg-blue-300'>{user.phone}</td>
                                    </tr>
                        })}
                    </tbody>
        </table>







        {/* 
        <h2>The cout is </h2>
        <p>{countState}</p>
        <button onClick={increaseCount}>Increase Count ++</button> */}

    </div>
  )
}
