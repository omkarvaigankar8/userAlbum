import React, { useState, useEffect } from 'react'
import { fetchData } from '../api'
import { useParams } from 'react-router-dom';
import AlbumCard from '../components/Cards/AlbumCard';
import Header from '../components/UIKit/Header';
import Loader from '../components/UIKit/Loader';

const Albums = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState(null);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    fetchData((data) => {
      setAlbums(data.data)
    }, `albums?userId=${id}`)
  }, [id])
  return (
    <div className='App'>
      <Header />
      {loading ? (<Loader loading={true} />):(
        <>
        {albums &&
      <div className='container'>
      <h2>List of Albums</h2>
      <div className='album_wrapper'>
        {albums && albums.map((album) => {
          return <AlbumCard album={album} key={album.id} />
        })}
      </div>
    </div>

        }
        </>
      )}
    </div>
  )
}

export default Albums