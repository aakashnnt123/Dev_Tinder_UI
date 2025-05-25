import React from "react";

const NavBar = () => {
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
      <div className="flex gap-2">
        <div className="dropdown dropdown-end mx-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar border-0 hover:border-0 hover:bg-transparent"
          >
            <div className="w-14 rounded-md">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-base-300"
          >
            <li>
              <a className="justify-between">
                Profile <span className="badge badge-accent">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
