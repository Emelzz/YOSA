import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../assets/analysis.jpg";
import carousel2 from "../assets/campaign.jpg";
import carousel3 from "../assets/massmedia.jpg";

const Carousels = () => {
  return (
    <Carousel infiniteLoop className="text-center">
      <div>
        <img
          src={carousel1}
          className="object-cover h-[72vh] w-full bg-top"
          alt="carousel first view"
        />
        <p className="legend ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          magni officiis necessitatibus mollitia doloremque animi nam distinctio
          quia perspiciatis corrupti itaque sequi quis esse qui ut, ipsum nemo
          consequuntur aliquid.
        </p>
      </div>
      <div>
        <img
          src={carousel2}
          className="object-cover h-[72vh] w-full bg-top"
          alt="carousel second view"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          src={carousel3}
          className="object-cover h-[72vh] w-full bg-top"
          alt="carousel third view"
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Carousels;
