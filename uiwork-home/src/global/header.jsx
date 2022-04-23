import React from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';
import { Logo } from '../global/filesExport';

const header = () => {

  return (
    <>
        <div className='container-header'>
            <img src={Logo} alt='logo' width='90px' />
            <div className='navmenu'>
              <NavLink to="/" className="navlink-header">Home</NavLink>
              <NavLink to="/" className="navlink-header">About</NavLink>
              <NavLink to="/dashboard" className="navlink-header">Dashboard</NavLink>
              <NavLink to="/account" className="navlink-header">Sign In</NavLink>
            </div>
        </div>
    </>
  )
}

export default header;