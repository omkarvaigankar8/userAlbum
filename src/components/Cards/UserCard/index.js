import React from 'react'
import { NavLink } from 'react-router-dom'
// import 

const UserCard = ({user}) => {
  return (
    <div className='user_card'>
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p><a href={`tel:${user.phone}`}>{user.phone}</a></p>
        <p><a href={`https://${user.website}`} target="_blank" rel='noreferrer'>{user.website}</a></p>
        <button onClick={()=>{
        
        }}><NavLink to={`/albums/${user.id}`}>View Albums</NavLink></button>
        


    </div>
  )
}

export default UserCard