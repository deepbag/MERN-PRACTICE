import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [form, setForm] = useState({
    name: '',
    job: '',
    id: ''
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch(err => console.log(err))
  }

  const updateData = (item) => {
    setForm({
      name: `${item.first_name } ${item.last_name}`,
      job: item.email,
      id: item.id
    })
  }

  const deleteData = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
  }


  const { name, job, id } = form

  const handleChange = (e) => {
    // setForm()
    console.log('e', e.target.value, e.target.id, e.target.name)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(id){
      // update 
      fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          "name": name,
          "job": job
        }),
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }else{
      // create
      fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        body: JSON.stringify({
          "name": name,
          "job": job
        }),
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }
  }

  return (
    <div className="App">
      <h1>CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name="name" value={name} onChange={handleChange} />
        <input type="text" placeholder='Job' name="job" value={job} onChange={handleChange} />
        <button>Submit</button>
      </form>
      {
        data.length > 0
          ?
          data.map((item, index) => (
            <div key={item.id}>
              <h1>{item.first_name} {item.last_name}</h1>
              <p>{item.email}</p>
              <button onClick={() => updateData(item)} >Update</button>
              <button onClick={() => deleteData(item.id)} >Delete</button>
            </div>
          ))
          :
          null
      }
    </div>
  );
}

export default App;