import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Base_Url } from "../../Utils/Constants";
import { removeUser } from "../../Utils/UserSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();


const handleLogout = async () => {
  try {
    const res = await axios.post(
      Base_Url + "/logout",
      {},
      {
        withCredentials: true,
      }
    );
    localStorage.clear();
    navigate("/login");
    dispatch(removeUser());
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


  return (
    <div className="navbar bg-black text-primary-content shadow-md px-6 fixed top-0 z-30">
      <div className="flex-1 flex  items-center gap-4">
        <a className="text-2xl flex items-center gap-2">
          <img
            className="w-14 h-14 rounded-[4px] border-2 border-accent"
            src="Utils/Logo.png"
            alt="DevMate Logo"
          />
          <span className="font-extrabold tracking-widest bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 text-transparent bg-clip-text">
            DevMate
          </span>
        </a>
      </div>

      {/* Right: Avatar Dropdown */}
      {user && (
        <div>
          <div className="flex items-center justify-center">
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-0 hover:border-0 hover:bg-transparent"
              >
                <div className="w-14 rounded-md">
                  <img alt="User Avatar" src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box z-10 mt-8 w-52 p-2 shadow-lg border border-base-300"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile <span className="badge badge-accent">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="px-[-50px]">Welcome {user.firstName}</p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
