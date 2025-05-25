import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login successful", res.data);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-800 via-pink-600 to-yellow-400 p-4">
      <div className="card w-96 shadow-2xl bg-black bg-opacity-80 text-white border-2 border-pink-500 rounded-2xl ">
        <div className="card-body">
          <h1 className="card-title justify-center text-3xl font-extrabold text-transparent bg-gradient-to-r from-pink-500  to-yellow-400 bg-clip-text">
            Login
          </h1>

          <div className="space-y-6 mt-6">
            <div>
              <label className="block text-sm font-bold mb-1">Email</label>
              <input
                type="text"
                value={emailId}
                placeholder="you@example.com"
                onChange={(e) => setemailId(e.target.value)}
                className="input w-full border-2 border-yellow-300 bg-transparent text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">Password</label>
              <input
                type="password"
                value={password}
                placeholder="********"
                onChange={(e) => setpassword(e.target.value)}
                className="input w-full border-2 border-purple-300 bg-transparent text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-xl"
              />
            </div>
          </div>

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
