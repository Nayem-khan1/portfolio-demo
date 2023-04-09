import React from "react";
import { Link } from "react-router-dom";

import footer1 from "../../assets/pageimg/footer1.png";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div>
      <div
        data-aos="zoom-in-up"
        className=" bg-white md:flex justify-between  container mx-auto  px-10 pt-20 rounded-xl mt-10 md:mt-[200px] box-border"
      >
        <div className="md:w-1/2 text-[#0e0066]">
          <h2 className=" text-lg tmd:text-[30px] font-bold mb-6">
            Know someone we should talk to?
          </h2>
          <p className="text-[18px] font-[400] mb-8">
            Scout a deal for us and we'll make it worth your while! We pay
            finders fees of $25,000 to $200,000+, all you have to do is intro
            us.
          </p>
          <button className="btn border-[#1a21ff]  hover:bg-[#1a21ff] bg-white text-[#1a21ff] hover:text-white">
            Send us a lead
          </button>
        </div>
        <div className="">
          <img className="w-[250px]" src={footer1} alt="" />
        </div>
      </div>
      <div className="w-4/5 md:w-2/3 mx-auto">
        <div
          data-aos="zoom-in-up"
          className="text-white grid md:grid-cols-3 md:mt-[150px] mt-10"
        >
          <div>
            <img className="w-[58px] h-[34px]" src={logo} alt="" />
          </div>
          <div className="list-none ">
            <p className="text-[18px] font-bold text-left mb-4">
              Vertical Ventures{" "}
            </p>
            <div className="flex text-left">
              <div className="mr-[50px]">
                <li className="mb-3">
                  <Link>Companies</Link>
                </li>
                <li className="mb-3">
                  <Link>About</Link>
                </li>
                <li className="mb-3">
                  <Link>Contact</Link>
                </li>
                <li className="mb-3">
                  <Link>Podcast</Link>
                </li>
              </div>
              <div>
                <li className="mb-3">
                  <Link>Writing</Link>
                </li>
                <li className="mb-3">
                  <Link>Newsletter</Link>
                </li>
                <li className="mb-3">
                  <Link>The Foundation</Link>
                </li>
              </div>
            </div>
          </div>
          <div className="text-left ml-10 list-none mt-5">
            <p className="text-[18px] font-bold text-left mb-4">Work With us</p>
            <li className="mb-3">
              <Link>Work for company</Link>
            </li>
            <li className="mb-3">
              <Link>Become scout</Link>
            </li>
          </div>
          <div></div>
        </div>
        <div data-aos="zoom-in-up" className="mt-[100px]">
          <p className="text-[20px]  text-left text-white">
            Sign up for the vertical ventures FBA program.
          </p>
          <input
            className="w-full bg-[#1a21ff] text-[22px] font-bold mt-16 outline-none text-white border-b"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="py-[100px] flex justify-between ">
          <p className="text-white">© 2023 Vertical Ventures</p>
          <Link to="/">
            <button className="btn btn-active btn-link text-white">
              BACK TO TOP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
