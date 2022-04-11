import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../styles/edit.css';

const edit = () => {

    // Get id from parmalink
    const { id } = useParams();
    // Navigate to redirect hook
    const navigate = useNavigate();

    const [usersedit, setUsersedit] = useState({
        name:"",
        username:"",
        email:""
    })

    useEffect(() => {
        getUsersedit();
    }, [id])

    
    // Get user data to show in input 
    async function getUsersedit(){
        try{
            const userlist = await axios.get(`http://localhost:3001/users/${id}`)
            setUsersedit(userlist.data);
        } catch(error) {
            console.log("There was a problem!");
        }
    }
    
    // Get value from input to store in state
    const getUservalueupdate = (e) => {
        setUsersedit({
            ...usersedit,
            [e.target.name]: e.target.value
        })
    }

    // Update User data to api
    const editusertoapi = async (e) => {
        e.preventDefault()
        try{
            await axios.put(`http://localhost:3001/users/${id}`, usersedit)
            console.log("success")
            navigate("/");
            // e.target.reset();
        } catch(error) {
            console.log("There was a problem!");
        }
    }


    return (
        <>
            <div className='container-edit'>
                <form onSubmit={e => editusertoapi(e)}>
                    <input type="text" placeholder='Your Name' name='name' value={usersedit.name} onChange={e => getUservalueupdate(e)} />
                    <input type="text" placeholder='Your Username' name='username' value={usersedit.username} onChange={e => getUservalueupdate(e)} />
                    <input type="email" placeholder='Your Email' name='email' value={usersedit.email} onChange={e => getUservalueupdate(e)} />
                    <button>Update User</button>
                </form>
            </div>
        </>
  )
}

export default edit