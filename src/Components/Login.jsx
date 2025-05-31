import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { Base_Url } from "../../Utils/Constants";

const Login = () => {
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [Error, setError] = useState("");

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!isValidEmail(emailId)) {
      setError("⚠️Enter an email in valid format");
      return;
    }

    try {
      const res = await axios.post(
        Base_Url + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login successful", res.data);
      dispatch(addUser(res.data.user));
      return navigate("/");
    } catch (err) {
      setError("⚠️" + err.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-800 via-pink-600 to-yellow-400 ">
      <div className="card w-96 shadow-2xl bg-black bg-opacity-80 text-white border-2 border-pink-500 rounded-2xl ">
        <div className="card-body">
          <h1 className="card-title justify-center text-3xl font-extrabold text-transparent bg-gradient-to-r from-pink-500  to-yellow-400 bg-clip-text">
            Login
          </h1>

          <div className="space-y-5 mt-6">
            <div>
              <label className="block text-sm font-bold mb-1">Email</label>
              <input
                type="text"
                value={emailId}
                placeholder="Enter registered email"
                onChange={(e) => {
                  setemailId(e.target.value);
                }}
                className="input w-full border-2 border-yellow-300 bg-transparent text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setpassword(e.target.value)}
                className="input w-full border-2 border-purple-300 bg-transparent text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-xl"
              />
            </div>
          </div>
          {Error && (
            <p className="text-sm text-red-400 font-medium animate-pulse">
              {Error}
            </p>
          )}
          <div className="card-actions justify-center mt-8">
            <button
              className="btn bg-gradient-to-r from-pink-500  to-yellow-400 text-black font-bold hover:scale-105 transition-transform rounded-full px-8"
              onClick={handleLogin}
            >
              Let's Go 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
