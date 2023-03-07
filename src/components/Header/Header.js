import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/5f69042c3080b1195a9a5c91_tiny-logo.svg";

const Header = () => {
  return (
    <div className="py-6 px-10">
      <div className="navbar">
        <div className="flex-1">
          <img className="w-[58px] h-[34px]" src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li className="text-white">
              <a>Companies</a>
            </li>
            <li className="text-white">
              <a>About</a>
            </li>
            <li className="text-white">
              <a>Podcast</a>
            </li>
            <li tabIndex={0} className="text-white">
              <a>
                More
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 text-[#0e0066]">
                <li>
                  <a>Writing</a>
                </li>
                <li>
                  <a>Scout</a>
                </li>
                <li>
                  <a>Newsletter</a>
                </li>
                <li>
                  <a>Foundation</a>
                </li>
                <li>
                  <a>Rolling Fund</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button className="btn border-white bg-[#1a21ff] hover:bg-white hover:text-[#1a21ff]">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Header;
