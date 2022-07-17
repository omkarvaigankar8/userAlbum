import React from 'react';
import { useHistory } from 'react-router-dom';
import './albumCard.scss'
const AlbumCard = ({ album }) => {
  let history = useHistory();
  return (
    <div className='album_card'>
      <h4>{album.title}</h4>
      <button className={"btn button"}
        onClick={() => {
          history.push(`/albums/gallery/${album.userId}`)
        }}><span className="span-btn">View Gallery</span></ button>
    </div>
  )
}
export default AlbumCard;