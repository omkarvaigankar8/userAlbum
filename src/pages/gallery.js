
import React, { useState, useEffect } from 'react'
import { fetchData } from '../api'
import { useParams} from 'react-router'
import GalleryCard from '../components/GalleryCard';
const Gallery = () => {
    const { id } = useParams();
    const [photos,setPhotos] =useState(null);
    useEffect(()=>{
        fetchData((data) => {
            setPhotos(data.data)
          }, `photos?albumId=${id}`)
    },[id])
  return (
    <div><GalleryCard photos={photos} /></div>
  )
}

export default Gallery