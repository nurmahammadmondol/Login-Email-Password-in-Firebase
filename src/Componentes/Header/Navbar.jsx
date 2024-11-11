import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const Links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/User">User</NavLink>
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="/Registration">Registration</NavLink>
    </>
  );

  return (
    <nav className="navbar bg-[#d6f2f4] py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Webpage</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4 ">{Links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn  btn-accent text-white">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
