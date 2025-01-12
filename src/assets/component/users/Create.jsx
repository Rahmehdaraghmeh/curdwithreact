import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const { register, control, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const Navigate = useNavigate();
  const registeruser = async (data) => {
    console.log(data);
    
    const response = await axios.post(
      `${import.meta.env.VITE_BURL}/users`, data
    );
    if (response.status === 201) {
      Navigate("/users");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(registeruser)}>
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
          />
          <label htmlFor="emailaddress">Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder=""
            {...register("password")}
          />
          <label htmlFor="Password">Password</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder=""
            {...register("phone")}
          />
          <label htmlFor="phone">Phone</label>
        </div>

        <button type="submit" className="btn btn-outline-primary mt-3 mb-3">
          {" "}
          Add
        </button>
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
}
