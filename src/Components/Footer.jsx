import React from "react";
import logo from "../assets/YOSA Logo.jpg";
import { RiInstagramFill } from "react-icons/ri";
// import { PiInstagramLogoLight } from "react-icons/pi";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[rgb(14,13,13)]    border-t-4 border-slate-100 p-8 static bottom-0 left-0 right-0">
      <div className=" grid grid-rows-2 md:flex md:flex-row gap-8 md:gap-[8rem]">
        <div className="flex flex-row gap-8 items-center text-left justify-center">
          <div>
            {" "}
            <img src={logo} alt="Footer-logo" className="" />
          </div>

          <div className="text-white font-bold">
            <h1 className="text-xl mb-2">
              Youths Organizing for Sustainability in Agriculture
            </h1>
            <p className="font-extralight">
              Address: Nsukka, Enugu State. Nigeria
            </p>
            <p className="font-extralight">Tel: +234 701 461 3087</p>
            <p className="font-extralight">&copy; Copyright 2023.</p>
          </div>
        </div>

        <div className="text-white font-extralight text-left flex  justify-center items-center gap-[5rem] md:gap-[9rem]">
          <div className=" flex flex-col  justify-center items-center">
            {" "}
            <ul className="flex flex-col gap-2 tracking-[2px] ">
              <li className="cursor-pointer hover:underline ease-in-out duration-500">
                About
              </li>
              <li className="cursor-pointer hover:underline ease-in-out duration-500">
                Membership
              </li>
              <li className="cursor-pointer hover:underline ease-in-out duration-500">
                Contacts
              </li>
              <li className="cursor-pointer hover:underline ease-in-out duration-500">
                Support
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-16 justify-center items-center">
            <AiFillLinkedin className="iconsfoot hover:text-[#11661f] ease-in-out duration-500 hover:scale-110" />
            <BiLogoFacebookSquare className="iconsfoot hover:text-[#11661f] ease-in-out duration-500 hover:scale-110" />
            <RiInstagramFill className="iconsfoot hover:text-[#11661f] ease-in-out duration-500 hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
