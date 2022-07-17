
import React, { useState, useEffect } from 'react'
import { fetchData } from '../api'
import { useParams } from 'react-router-dom'
import GalleryCard from '../components/Cards/GalleryCard';
import Header from '../components/UIKit/Header';
import Loader from '../components/UIKit/Loader';
const Gallery = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)

  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    fetchData((data) => {
      setPhotos(data.data)
    }, `photos?albumId=${id}`)
  }, [id])
  return (
    <div className='App'>
      <Header />
      {loading ? (
        <Loader loading={true} />
      ) : (
        <>
          {photos && (
            <div className='gallery_container'>
              <h2>Photo Gallery</h2>
              <div className='gallery_wrapper'>
                <GalleryCard photos={photos} />
              </div>
            </div>

          )}
        </>
      )

      }
    </div>
  )
}

export default Gallery