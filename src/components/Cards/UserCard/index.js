import React from 'react'
import { useHistory } from 'react-router-dom';
import { Phone, MapPin,ChatBox } from '../../UIKit/Icons/icons.js';
import './userCard.scss'

const UserCard = (props) => {
  const { user } = props
  let history = useHistory();
  return (
    <div className='user_card'>
      <div className='user_card_row1'>
        <div className='user_image'>
          <img src='./user.png' alt='user' />
          <button
            className={`btn button`}
            onClick={() => {
              history.push(`/albums/${user.id}`);
            }}
          >
            <span className="span-btn">
              View Album
            </span>
          </button>
        </div>
        <div className='user_content'>
          <h4>{user.name}</h4>
          <p className='username'>@{user.username}</p>
          <p className='phone'><Phone /> <a href={`tel:${user.phone}`}>{user.phone}</a></p>
          <p className='email'><span><ChatBox /> </span><a href={`mailto:${user.email}`}><span>{user.email}</span></a></p>
        </div>
      </div>
      <div className='user_card_row2'>
        <h5>Company</h5>
        <p><span>{user.company.name}</span>
        </p>
      </div>
      <div className='user_card_row3'>
        <div>
          <h5>Address</h5>
          <p className='address'><MapPin />  <span>{user.address.suite}, {user.address.street}</span><span>{user.address.city}</span></p>
        </div>
        <div className='website'>
          <h5>Website</h5>
          <p><a href={`https://${user.website}`} target="_blank" rel='noreferrer'>{user.website}</a></p>
        </div>
      </div>
    </div>
  )
}

export default UserCard