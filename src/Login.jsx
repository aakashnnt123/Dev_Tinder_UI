import axios from "axios";
import React, { useState } from "react";



const Login = () => {

const[emailId , setemailId] = useState("");
const[password , setpassword] = useState("");

const handleLogin = async () => {
   try{
    const res = await axios.post("http://localhost:3000/login",{
      emailId,
      password,
  });
   }catch(err){
    console.log(err);
   } 
};

  return (
    <div className="flex justify-center my-10">
      <div className="card card-dash bg-base-300 w-96 ">
        <div className="card-body">
          <h1 className="card-title justify-center">Login</h1>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email_Id</legend>
              <input type="text" 
              value={emailId} 
              className="input" placeholder="Enter your Email_id.." 
               onChange={(e)=> setemailId(e.target.value)}
               />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="password"
               value={password} 
               className="input" placeholder="Enter your Password.." 
               onChange={(e)=> setpassword(e.target.value)}
               />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
