import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Edit() {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');


  const navigate =useNavigate();

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setAge(localStorage.getItem('age'));
    setEmail(localStorage.getItem('email'));
  }, [])
  

  const handleUpadte=(e)=>{
    e.preventDefault();
    axios.put(`https://66b8e5e43ce57325ac786f22.mockapi.io/crud/${id}`,{
      e_name: name,
      e_age:age,
      e_email:email,
    }).then(()=>{
        navigate('/');
    })

  }
  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
            <div className='mb-2 mt-2'>
                <Link to='/'>
                    <button className='btn btn-primary'>Read Data</button>
                </Link>

            </div>
            <div className='bg-primary p-4 text-center'>
                <h3>Update Data</h3>
            </div>
            <form onSubmit={handleUpadte}>
                <div className="form-group">
                    <label> Name:</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" placeholder="Enter Name" />

                </div>
                <div className="form-group">
                    <label> Age:</label>
                    <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} className="form-control" placeholder="Enter Age"  />

                </div>
                <div className="form-group">
                    <label> Email:</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" placeholder="Email"  />

                </div>
                <br></br>
                <div className='d-grid'>
                    <button type="submit" className="btn btn-primary">Update</button>

                </div>
            </form>



        </div>
    </div>
</>

  )
}

export default Edit