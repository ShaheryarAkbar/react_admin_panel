import React from 'react';
import './sidebar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Shery</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>
            <HomeOutlinedIcon  className='icon' />
            <span>Dashboard</span>
          </li>
          <li>
            <ManageAccountsOutlinedIcon className='icon' />
            <span>Services</span>
          </li>
          <li>
            <StarOutlineOutlinedIcon className='icon' />
            <span>Parts</span>
          </li>
          <li>
            <MailOutlineOutlinedIcon className='icon' />
            <span>Customers</span>
          </li>
          <li>
            <AssignmentOutlinedIcon className='icon' />
            <span>Tasks</span>
          </li>
          <li>
            <PeopleAltOutlinedIcon className='icon' />
            <span>Mechanics</span>
          </li>
          <li>
            <HelpOutlineOutlinedIcon className='icon' />
            <span>Enquiries</span>
          </li>
          <li>
            <CardTravelOutlinedIcon className='icon' />
            <span>Invoices</span>
          </li>
          <li>
            <NotificationsIcon className='icon' />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <span>Shery</span>
      </div>
    </div>
  )
}

export default Sidebar
