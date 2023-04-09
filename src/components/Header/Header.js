import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <div className="w-4/5 mx-auto py-6 ">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Service
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 shadow bg-base-100">
                  <li>
                    <Link to="/service">Service 1</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/result">Results</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            <img className="w-[58px] h-[34px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link>
                Service
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="/service">Service 1</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/result">Results</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn border-white bg-[#1a21ff] hover:bg-white hover:text-[#1a21ff]">
            Get in touch
          </button>
        </div>
      </div>
      {/* <div className="navbar">
        <div className="flex-1">
          <Link to="/">
            <img className="w-[58px] h-[34px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li className="text-white">
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0} className="text-white">
              <Link to="/service">
                Service
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100 text-[#0e0066]">
                <li>
                  <a>Service </a>
                </li>
                <li>
                  <a>Service</a>
                </li>
                <li>
                  <a>Service</a>
                </li>
                <li>
                  <a>Service</a>
                </li>
                <li>
                  <a>Service Fund</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0} className="text-white">
              <Link to="/result">Results</Link>
            </li>
            <li className="text-white">
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <button className="btn border-white bg-[#1a21ff] hover:bg-white hover:text-[#1a21ff]">
          Get in touch
        </button>
      </div> */}
    </div>
  );
};

export default Header;
