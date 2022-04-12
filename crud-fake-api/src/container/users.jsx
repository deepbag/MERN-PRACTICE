import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/users.css';
import { NavLink } from 'react-router-dom';


const users = () => {

    const [Apidata, setApidata] = useState([])

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setApidata(res.data);
            console.log(Apidata);
        })
        .catch(error => console.log(`Error: ${error}`))
    }

    useEffect(() => {
      fetchData();
    }, [Apidata])

    const deleteData = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE',
        });
    }

  return (
    <>
        <div className="container-users">
            <table>
                <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
                {
                Apidata.length > 0
                ?
                Apidata.map((item, index) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td><NavLink to={`/update/${item.id}`} className="button-navlink">Update</NavLink></td>
                        <td><button onClick={() => {
                            deleteData(item.id)
                            console.log(`${item.name} User Deleted!`)
                            alert(`${item.name} User Deleted!`)
                        }}>Delete</button></td>
                    </tr>
                ))
                :
                null
                }
            </table>
        </div>
    </>
  )
}

export default users