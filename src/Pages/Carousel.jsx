import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousel2 from "../assets/campaign.jpg";
import carousel3 from "../assets/massmedia.jpg";
import sustain from "../assets/sustain.jpg";

const Carousels = () => {
  return (
    <Carousel infiniteLoop className="text-center">
      <div>
        <img
          src={sustain}
          className="object-cover h-[72vh] w-full bg-top"
          alt="carousel first view"
        />
        <p className="legend ">
          Cultivating Agricultural Sustainability Across Generations: Harvesting
          Wisdom, Nurturing Tomorrow's Resilience
        </p>
      </div>
      <div>
        <img
          src={carousel2}
          className="object-cover h-[72vh] w-full bg-top"
          alt="carousel second view"
        />
        <p className="legend">
          Seeding Sustainability, Nourishing Generations: Cultivating a Thriving
          Future through Sustainable Agriculture
        </p>
      </div>
      <div>
        <img
          src={carousel3}
          className="object-cover h-[72vh] w-full bg-top"
          alt="carousel third view"
        />
        <p className="legend">
          Unlocking Potential, Feeding Tomorrow: Empowering Youth in Sustainable
          Agriculture for a Hunger-Free Future.
        </p>
      </div>
    </Carousel>
  );
};

export default Carousels;
