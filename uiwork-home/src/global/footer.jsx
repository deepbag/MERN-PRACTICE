import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';


const Footer = () => {
  return (
    <>
        <div className='container-footer'>
            <p>Copyright Ⓒ 2010-2020</p>
            <p><NavLink to="/" className="navlink-footer">Terms {'&'} Conditions</NavLink> | <NavLink to="/" className="navlink-footer">Privacy Policy</NavLink></p>
        </div>
    </>
  )
}

export default Footer;