import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://66b8e5e43ce57325ac786f22.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/')
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
                        <h3>Create Data</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label> Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label> Age:</label>
                            <input type="number" className="form-control" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label> Email:</label>
                            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <br></br>
                        <div className='d-grid'>
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </div>
                    </form>



                </div>
            </div>
        </>

    )
}

export default Create