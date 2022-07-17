import React from 'react'
import { useHistory } from 'react-router-dom';
import { UserProfileDefault } from '../Icons/icons'
import './header.scss'
const Header = () => {
    let history = useHistory();
    return (
        
        <div className='header'>
            <div className='header_content' onClick={()=>{
                history.push('/')
            }}>
                <UserProfileDefault />
                <span>User Info App</span>
            </div>
        </div>
    )
}

export default Header