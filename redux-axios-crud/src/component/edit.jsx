import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import axios from "axios";
import '../styles/edit.css';
import { getAPIAction } from '../redux/action/action';
import { useSelector, useDispatch } from 'react-redux';
import { updateAPIAction } from '../redux/action/action';

const Edit = () => {

    // Get id from parmalink
    const { id } = useParams();
    
    // Navigate to redirect hook
    const navigate = useNavigate();

    const [usersedit, setUsersedit] = useState({
        name:"",
        username:"",
        email:""
    })

    const dispatch = useDispatch();
    // Data come from combine reducer file [ Reducer ]
    const responseData = useSelector(state=>state.Reducer.details[id])
    
    const userid = responseData.id;

    
  
    useEffect(() => {
      dispatch(getAPIAction());
      setUsersedit(responseData)
    }, [id])
    console.log(`Bhai Data Dekh ${usersedit.name}`);
    

    
    // Get Value from Input Fields
    const handleChange = (e) => {
        setUsersedit({
            ...usersedit,
            [e.target.name]: e.target.value
        })
        console.log(usersedit);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usersedit);
        dispatch(updateAPIAction(usersedit, userid));
        navigate('/')
        // e.target.reset();
    }

    return (
        <>
            <div className='container-edit'>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" placeholder='Your Name' name='name' value={usersedit.name} onChange={(e)=>handleChange(e)} />
                    <input type="text" placeholder='Your Username' name='username' value={usersedit.username} onChange={(e)=>handleChange(e)} />
                    <input type="email" placeholder='Your Email' name='email' value={usersedit.email} onChange={(e)=>handleChange(e)} />
                    <button>Update User</button>
                </form>
            </div>
        </>
  )
}

export default Edit;