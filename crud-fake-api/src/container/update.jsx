import React, { useState } from 'react';

const update = () => {

    const [usersinfo, setUsersinfo] = useState({
        name: '',
        username: '',
        email: '',
        id: ''
    })
    const { name, username, email, id } = usersinfo

    const handleChange = (e) => {
        setUsersinfo({
          ...usersinfo,
          [e.target.name]: e.target.value,
          [e.target.username]: e.target.value,
          [e.target.email]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'POST',
            body: JSON.stringify({
              "name": name,
              "username": username,
              "email": email
            }),
          })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

  return (
    <>
        <div className='container-update'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' name="name" value={name} onChange={handleChange} />
                <input type="text" placeholder='Username' name="username" value={username} onChange={handleChange} />
                <input type="email" placeholder='Email' name="email" value={email} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default update;