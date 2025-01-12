import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export default function Details() {
    const {id}=useParams();
    const Navigate=useNavigate()
     const { register, handleSubmit,setValue } = useForm();


      const detailsuser= async()=>{
        const {data}= await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`)
        console.log(data);
        
 setValue("userName",data.user.userName);
 setValue("email",data.user.email);
 setValue("phone",data.user.phone)


      }
    useEffect(()=>{
detailsuser()
      },[])
      const userUpdate= async(value)=>{
const response= await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,{
    userName:value.userName
})
if (response.status===200) {
Navigate('/users')
}

      }
  return (
    <div>
 <form onSubmit={handleSubmit(userUpdate)}>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder=""
            {...register("userName")}
          />
          <label htmlFor="username">User name </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="emailaddress"
            placeholder=""
            {...register("email")}
            disabled
          />
          <label htmlFor="emailaddress">Email address</label>
        </div>

       

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder=""
            {...register("phone")}
            disabled
          />
          <label htmlFor="phone">Phone</label>
        </div>

        <button type="submit" className="btn btn-outline-primary mt-3 mb-3">
          Update
        </button>
      </form>
    </div>
  )
}
