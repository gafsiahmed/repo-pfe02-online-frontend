import React from 'react'
import './UserCard.css'


export default function UserCard({user}) {
  return (
      <div className="userCard">
            <img src={user.picture.large} alt="" />
            <h2> Full Name : {user.name.title}  {user.name.first}   {user.name.last}  </h2>
            <p>Email : {user.email} </p>
            <p>Phone :  {user.phone} </p>
            <p>Location : {user.location.city} , {user.location.country} </p>
            <button>Contact {user.name.first}   {user.name.last}!</button>
        </div>
  )
}


// { user } => props.user 