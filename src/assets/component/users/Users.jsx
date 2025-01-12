import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  const[users,setUsers]=useState([])
  const getusers= async()=>{
    const {data}= await axios.get(`${import.meta.env.VITE_BURL}/users`);
    setUsers(data.users);
    
  }
  const deleteuser=async(id)=>{
    const {data}= await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
console.log(data);


  }
  useEffect(()=>{
    getusers();
  },[users])
  return (
  <>  
  <Link className='btn btn-primary' to={'/create'}>create </Link>
  <div className="row">
  <div className='users d-flex justify-content-between flex-wrap gap-5 '>
{
users.map(user=>
<div className='col-lg-3 col-md-4 col-sm-6'>
<div className="card" style={{width:'20rem',
margin:'5px'
}}>

  <div className="card-body">
    <h5 className="card-title">{user.userName}</h5>
    <p className="card-text">{user.email}</p>
    <button className='btn btn-danger' onClick={()=>deleteuser(user._id)}>Delete</button>
    <Link className='btn btn-secondary' to={`/users/${user._id}`}>Details</Link>
  </div>
</div>
</div>
)
      }
    </div>
    </div>
    </>
  )
}
