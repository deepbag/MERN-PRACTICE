import React from 'react';
import '../styles/mainpage.css';
import { Logo } from '../global/filesExport';
import { NavLink } from 'react-router-dom';

const Mainpage = () => {
  return (
    <>
        <div className='container-mainpage'>
          <div className='container-content'>
            <img src={Logo} alt='logo' width='400px' />
            <h3>Keep tracking, Better winning</h3>
            <p>Online platform to keep an eye on your orders and payments</p>
            <NavLink to="/account" className="navlink-mainpage">Create free account</NavLink>
            <p>Already have an account? <NavLink to="/account" className="navlink-header">Log In</NavLink></p>
          </div>
        </div>
    </>
  )
}

export default Mainpage