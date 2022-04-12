import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const header = () => {
  return (
    <>
        <div className='container-header'>
            <NavLink to="/" className="navLink">Users</NavLink>
            <NavLink to="/create" className="navLink">Create</NavLink>
        </div>
    </>
  )
}

export default header;