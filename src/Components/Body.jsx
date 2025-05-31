import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Base_Url } from '../../Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../Utils/UserSlice'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Body = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const userData = useSelector((store) => store.user);
   
  const fetchUser = async()=>{
    if(userData) return;
    try{
      const res = await axios.get(Base_Url+"/profile/view", {
      withCredentials : true
    });
    dispatch(addUser(res.data.user))
    }catch(error){
      if(error.status == 401){
          navigate('/login')
      }
       console.log(error);
    }
  };

  useEffect(()=>{
      fetchUser();
  },[]);

  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body