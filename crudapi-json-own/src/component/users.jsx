import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/users.css';
import { NavLink } from 'react-router-dom';


const users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, [users])

    // Get Users list from api
    async function getUsers(){
        try{
            const student = await axios.get('http://localhost:3001/users')
            setUsers(student.data);
            console.log(users)
        } catch(error) {
            console.log("Where was a problem!");
        }
    } 

    // Delete user from api
    const deleteData = async (id) => {
        if(window.confirm('Do you really want to delete this user?')){
            await axios.delete(`http://localhost:3001/users/${id}`);
            const newUser = users.filter((item)=>{
                return item.id !== id;
            })
            setUsers(newUser);
        }    
    }

  return (
    <>
        <div className="container-users">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {
                        users.length > 0
                        ?
                        users.map((user, index) => (
                            <tr key={index}>
                                <td >{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><NavLink to={`/view/${user.id}`} className="button-navlink">Profile</NavLink></td>
                                <td><NavLink to={`/edit/${user.id}`} className="button-navlink">Update</NavLink></td>
                                <td><button onClick={() => { deleteData(user.id) }}>Delete</button></td>
                            </tr>
                    ))
                    :
                    null
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default users