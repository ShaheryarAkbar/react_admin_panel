import React from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <div className="searchtext">
              <SearchOutlinedIcon className='icon'/>
              <input type="text" placeholder='Search...'/>
            </div>
            <div className="searchbtn">
              <button>Search</button>
            </div>
          </div>
          <div className='items'>
            <div className="item">
              <SendOutlinedIcon className='icon'/>
              <p>Location dropdown</p>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className='icons'/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="profile" />
              <span>Shery Rao</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar
