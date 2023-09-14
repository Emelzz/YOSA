import React from "react";
import { FaGlobe } from "react-icons/fa";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { LiaTractorSolid } from "react-icons/lia";
const About = () => {
  return (
    <div className=" flex justify-center flex-col pb-16">
      <div>
        {" "}
        <h1 className="text-4xl md:text-6xl text-[#a88383] font-bold gap-[1rem]">
          ADVOCATING <span className="ml-4 text-[#11661f]">CHANGE</span>
        </h1>
      </div>
      <div>
        <p className="text-[1rem] tracking-[0.3px] md:text-[1.3rem] md:tracking-[1px] mt-4 text-[#000]">
          Encouraging Youths to Impact Positively in Sustainable Agriculture
        </p>
      </div>
      <div className="px-8">
        {" "}
        <p className="md:text-[1rem] text-[0.78rem] mt-3">
          Global agriculture, especially in rural Africa, has long been a
          primary livelihood source. However, concerns are rising over its
          severe environmental, health, and socio-economic impacts. Unintended
          agricultural practices have led to significant ecological harm, second
          only to a global nuclear catastrophe. Urgent action is needed to
          create an agricultural system that sustains ecosystems while meeting
          present and future food demands.
        </p>
      </div>
      <div className="flex flex-col gap-[1.8rem] md:flex-row mt-12 justify-between px-16">
        <div className="flex flex-col gap-4 justify-center items-center">
          <FaGlobe className="text-[#083610fa] h-[3.8rem] w-[4rem] md:w-16 md:h-16 cursor-pointer hover:scale-110 ease-in-out duration-700" />

          <p className="font-bold text-[1rem] text-[#333] ">
            Enlightening Youths <br></br> Worldwide
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <GiPublicSpeaker className="text-[#083610fa] h-[4rem] w-[4rem] md:w-[5rem] md:h-[5rem] cursor-pointer hover:scale-110 ease-in-out duration-700" />

          <p className="font-bold text-[1rem] text-[#333] ">
            Outreach Campaigns <br></br>on Campuses
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center  items-center">
          <FaHandshake className="text-[#083610fa] h-[4rem] w-[4rem] md:w-[5rem] md:h-[5rem] cursor-pointer hover:scale-110 ease-in-out duration-700" />

          <p className="font-bold text-[1rem] text-[#333] ">
            Fostering connections <br></br>of like-minded youths
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center  items-center">
          <LiaTractorSolid className="text-[#083610fa] h-[4rem] w-[4rem] md:w-[5rem] md:h-[5rem] cursor-pointer hover:scale-110 ease-in-out duration-700" />

          <p className="font-bold text-[1rem] text-[#333] ">
            Encouraging eco-friendly and <br></br>innovative Farming practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
