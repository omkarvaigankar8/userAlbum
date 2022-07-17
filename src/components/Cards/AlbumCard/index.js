import React from 'react'
import { NavLink } from 'react-router-dom'
// import 

const AlbumCard = ({album}) => {
  return (
    <div className='album_card'>
        <h1>{album.title}</h1>
        <button onClick={()=>{
        }}><NavLink to={`/albums/gallery/${album.userId}`}>View Gallery</NavLink></button>
        


    </div>
  )
}

export default AlbumCard