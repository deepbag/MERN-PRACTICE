import React, { useState, useEffect } from 'react';
import '../styles/view.css';
import { useParams } from 'react-router-dom';
import axios from "axios";


const view = () => {

  // Get Id from parmalink
  const { id } = useParams(); 

  const [userData, setuserData] = useState([])

  useEffect(() => {
    getUserData()
  }, [])
  
  // Get single user data from api using id
  async function getUserData(){
    try{
        const userinfo = await axios.get(`http://localhost:3001/users/${id}`)
        setuserData(userinfo.data);
        // console.log(users)
    } catch(error) {
        console.log("Where was a problem!");
    }
  } 

  return (
        <>
            <div className='container-view'>
              <div className='box'>
                <h1>Welcome to <span>{userData.name}</span> Profile!</h1>
                <h2>Username: <span>{userData.username}</span></h2>
                <h2>Name: <span>{userData.name}</span></h2>
                <h2>Email: <span>{userData.email}</span></h2>
              </div>
            </div>
        </>
  )
}

export default view