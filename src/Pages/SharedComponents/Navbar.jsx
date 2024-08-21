import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = (props) => {
  const {user}=useContext(AuthContext)
    const navItem=<>
    <li >
        <NavLink to={'/'}>
            Home
        </NavLink>
    </li>
    <li>
        <NavLink to={'/about'}>
            About
        </NavLink>
    </li>
    <li>
        <NavLink to={'/services'}>
            Services
        </NavLink>
    </li>
    <li>
        <NavLink>
            Blog
        </NavLink>
    </li>
    <li>
        <NavLink>
            Contact
        </NavLink>
    </li>
    </>
  return (
    <div>
      <div className="navbar bg-white rounded-lg container mx-auto min-h-28 ">
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {
                navItem
              }
            </ul>
          </div>
            <Link to={'/'} className="btn btn-ghost text-xl h-full">
            <img src="https://raw.githubusercontent.com/SALEHINISLAM/car-doctor/main/public/assets/logo.svg" alt="" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                navItem
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-error" href={user? '/orders':'/login'}>Go to Dashboard</a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
