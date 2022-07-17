import React, { useState, useEffect } from 'react'
import { fetchData } from '../api'
import { useParams} from 'react-router';
import AlbumCard from '../components/Cards/AlbumCard';

const Albums = () => {
    const { id } = useParams();
    const [albums,setAlbums] =useState(null);
    useEffect(()=>{
        fetchData((data) => {
            setAlbums(data.data)
          }, `albums?userId=${id}`)
    },[id])
  return (
    <div>
          {albums && albums.map((album)=>{
        return <AlbumCard album={album} key={album.id} />
      })}
    </div>
  )
}

export default Albums