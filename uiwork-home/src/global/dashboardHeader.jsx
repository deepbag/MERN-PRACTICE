import React from 'react';
import '../styles/dashboardHeader.css';
import { NavLink } from 'react-router-dom';
import { Logo } from '../global/filesExport';

const DashboardHeader = () => {
  return (
    <>
        <div className='container-dashboardHeader'>
            <img src={Logo} alt='logo' width='90px' />
            <div className='navmenu'>
              <NavLink to="/" className="navlink-dashboardHeader">Home</NavLink>
              <NavLink to="/dashboard" className="navlink-dashboardHeader">Dashboard</NavLink>
              <NavLink to="/account" className="navlink-dashboardHeader">Sign In</NavLink>
            </div>
        </div>
    </>
  )
}

export default DashboardHeader;