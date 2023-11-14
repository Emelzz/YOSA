import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/YOSA.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const activate = () => {
    setToggle(!toggle);
  };
  return (
    <div className="justify-between px-4 py-2 flex md:flex-row md:justify-around items-center md:gap-10 sticky shadow-md  ">
      <div className="">
        {" "}
        <img
          className=" h-[2rem] w-[2rem] md:h-[5rem] md:w-[8rem] object-contain"
          src={logo}
          alt="Organization's Logo"
        />
      </div>
      <div className="md:flex flex-row gap-[70px]  hidden mt-4">
        <Link to="/">
          {" "}
          <ul className="cursor-pointer hover:text-[#418606]">Home</ul>
        </Link>
        <Link to="/about">
          {" "}
          <ul className="cursor-pointer hover:text-[#418606]">About</ul>
        </Link>
        <Link to="/membership">
          <ul className="cursor-pointer hover:text-[#418606]">Membership</ul>
        </Link>
        <Link to="/activities">
          {" "}
          <ul className="cursor-pointer hover:text-[#418606]">Activities</ul>
        </Link>
        <Link to="/contact">
          {" "}
          <ul className="cursor-pointer hover:text-[#418606]">Contact Us</ul>
        </Link>
      </div>
      <div className="flex md:hidden w-full justify-end">
        {toggle ? (
          <AiOutlineClose
            size={20}
            className="cursor-pointer"
            onClick={activate}
          />
        ) : (
          <HiMenuAlt1 size={20} className="cursor-pointer" onClick={activate} />
        )}

        <div
          className={
            toggle
              ? "fixed left-0 top-0 h-full w-[60%] bg-[rgb(94,96,12)] border-r border-r-slate-300 ease-in-out duration-1000 navigations"
              : "fixed left-[-100%]"
          }
        >
          <div className=" p-2 ">
            {" "}
            <img
              className=" h-[3rem] w-[3rem] object-cover "
              src={logo}
              alt="Organization's Logo"
            />
          </div>

          <ul className="p-4 hover:underline text-white  w-full  cursor-pointer">
            Home
          </ul>
          <ul className="p-4 hover:underline text-white  w-full cursor-pointer">
            About
          </ul>
          <ul className="p-4 hover:underline text-white  w-full cursor-pointer">
            Membership
          </ul>
          <ul className="p-4 hover:underline text-white  w-full cursor-pointer">
            Activities
          </ul>
          <ul className="p-4 hover:underline text-white  w-full cursor-pointer">
            Contact Us
          </ul>
        </div>
      </div>
      <Link to="/Support">
        <div className="hidden md:flex border-[2.25px] cursor-pointer border-black py-2 px-6 mt-2 hover:bg-[#184d18] hover:border-transparent hover:text-white ease-in duration-300">
          {" "}
          SUPPORT US
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
