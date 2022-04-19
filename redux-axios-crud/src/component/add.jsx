import React, { useState } from 'react';
import '../styles/add.css';
import { postAPIAction } from '../redux/action/action';
import { useDispatch } from 'react-redux';


const Add = () => {

    const [adduser, setAdduser] = useState({
        name:"",
        username:"",
        email:""
    })

    const dispatch = useDispatch();

    // Get Value from Input Fields
    const getUservalue = (e) => {
        setAdduser({
            ...adduser,
            [e.target.name]: e.target.value
        })
        console.log(adduser);
    }

    // Post data to api
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(adduser);
        dispatch(postAPIAction(adduser));
        e.target.reset();
    }

    return (
        <>
            <div className='container-add'>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" placeholder='Your Name' name='name' onChange={getUservalue} />
                    <input type="text" placeholder='Your Username' name='username' onChange={getUservalue} />
                    <input type="email" placeholder='Your Email' name='email' onChange={getUservalue} />
                    <button>Add User</button>
                </form>
            </div>
        </>
  )
}

export default Add;