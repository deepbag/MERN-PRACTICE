import React from 'react';
import { Logo2 } from '../global/filesExport';
import '../styles/account.css';
import { NavLink } from 'react-router-dom';

const Account = () => {

  return (
    <>
        <div className='container-account'>
            <div className='container-account-content'>
                <img src={Logo2} alt="logo-account" />
                <button className='facebook-btn'>Sign up or log in with Facebook</button>
                <button className='google-btn'>Sign up or log in with Google</button>
                <form>
                    <input type='text' placeholder='Username' name='username'/>
                    <input type='text' placeholder='Password' name='password'/>
                    <div className='account-btn'>
                        <button>Sign In</button>
                        <button>Sign Up</button>
                    </div>
                </form>
                <p>Forgot username or password? <br /><NavLink to="/account" className="navlink-account">Click here</NavLink></p>
            </div>
        </div>
    </>
  )
}

export default Account;