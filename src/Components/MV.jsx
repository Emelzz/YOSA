import React from "react";
import thevision from "../assets/pexels-roland-dumke-943700.jpg";
import { GiCow, GiRoastChicken, GiCorn, GiPlantWatering } from "react-icons/gi";

const MV = () => {
  return (
    <div className="bg-[#184d18] flex p-8">
      <div className="grid grid-rows-1 md:grid-cols-2 gap-16  mb-8 ">
        <div className="">
          <div className="flex flex-col justify-center md:justify-start text-center md:text-left">
            <h1 className="text-white text-4xl mt-4 tracking-[1px] mb-4 font-bold">
              Our Mission
            </h1>

            <p className="text-[#fefefed7] pr-10">
              To consolidate ourselves with the global sustainability campaign
              in order to reform, transform and accelerate technologies,
              innovations, and practices for a sustainable agricultural system.
              We provide a platform that unites youths and their voices for
              positive change in agriculture and food systems and to be part of
              the forces driving real change.
            </p>
          </div>

          <div className="flex flex-col text-center md:justify-start md:text-left">
            <h1 className="text-white text-4xl mt-4 tracking-[1px] mb-4 font-bold">
              Our Vision
            </h1>

            <p className="text-[#fefefed7] pr-10">
              We hope to achieve an all-encompassing, resilient, and sustainable
              agri-food system where humanity (present and future) can live and
              carry out its primary and social function without putting their
              health and earth in peril.
            </p>

            <div className=" mt-9 grid grid-cols-4 gap-[4rem] md:gap-[6rem] px-8">
              <GiCow className="text-[#ffffa9] iconscow hover:scale-110 ease-in-out duration-700" />
              <GiPlantWatering className="text-[#ffffa9] icons hover:scale-110 ease-in-out duration-700" />
              <GiCorn className="text-[#ffffa9] icons hover:scale-110 ease-in-out duration-700" />
              <GiRoastChicken className="text-[#ffffa9] icons hover:scale-110 ease-in-out duration-700" />
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[3px] md:w-[95%]">
          <img
            src={thevision}
            alt="the YOSA vision"
            className=" rounded-[3px] w-[95%] shadow-xl min-h-full h-[25rem] hover:scale-[1.05] ease-in-out duration-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default MV;
