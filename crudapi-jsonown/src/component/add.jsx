import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../styles/add.css';

const add = () => {

    // Navigate to redirect hook
    const navigate = useNavigate();

    const [adduser, setAdduser] = useState({
        name:"",
        username:"",
        email:""
    })

    // Get user value from input
    const getUservalue = (e) => {
        setAdduser({
            ...adduser,
            [e.target.name]: e.target.value
        })
        console.log(adduser);
    }

    // Add new user
    const addusertoapi = async (e) => {
        e.preventDefault()
        try{
            await axios.post('http://localhost:3001/users', adduser)
            console.log("success")
            navigate("/");
            // e.target.reset();
        } catch(error) {
            console.log("There was a problem!");
        }
    }

    return (
        <>
            <div className='container-add'>
                <form onSubmit={e => addusertoapi(e)}>
                    <input type="text" placeholder='Your Name' name='name' onChange={getUservalue} />
                    <input type="text" placeholder='Your Username' name='username' onChange={getUservalue} />
                    <input type="email" placeholder='Your Email' name='email' onChange={getUservalue} />
                    <button>Add User</button>
                </form>
            </div>
        </>
  )
}

export default add;