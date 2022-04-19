import React, {useEffect} from 'react';
import '../styles/users.css';
import { getAPIAction, deleteAPIAction } from '../redux/action/action';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Users = () => {

    const dispatch = useDispatch();
    // Data come from combine reducer file [ Reducer ]
    const responseData = useSelector(state=>state.Reducer.details)
  
    console.log(responseData);
  
    useEffect(() => {
      dispatch(getAPIAction());
    }, [dispatch])


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
                        responseData.length > 0
                        ?
                        responseData.map((user, index) => (
                            <tr key={index}>
                                <td >{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>

                                <td><NavLink to='/' className="button-navlink">Profile</NavLink></td>
                                <td><NavLink to={`/edit/${user.id-1}`} className="button-navlink">Update</NavLink></td>
                                {/* <td><button onClick={dispatch(deleteAPIAction(user.id))}>Delete</button></td> */}
                                <td><button onClick={()=>{
                                    dispatch(deleteAPIAction(user.id))
                                }}>Delete</button></td>
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

export default Users