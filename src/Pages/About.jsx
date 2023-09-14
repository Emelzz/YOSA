import React from "react";
import Aboutimg from "../assets/pexels-kindel-media-7456788.jpg";
import { SiAtom } from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { PiTreeFill } from "react-icons/pi";
import img1 from "../assets/community.jpg";
import img2 from "../assets/campaign2.jpg";
import img3 from "../assets/Maintreeplanting.jpg";
import img4 from "../assets/massmedia.jpg";
import img5 from "../assets/womensensitize.jpg";
import img6 from "../assets/analysis.jpg";

const About = () => {
  return (
    <div className="overflow-hidden p-8">
      <div className="flex flex-col px-20">
        <div>
          <div className="grid grid-cols-2  justify-start   pt-4 pb-4">
            <div>
              <img
                className="h-[30rem] w-[30rem] object-cover object-top"
                src={Aboutimg}
                alt="About"
              />
            </div>
            <div className="text-[1.1rem] text-[#333] tracking-wider leading-[2.2rem]">
              In the year 2020, a passionate group of young individuals came
              together with a shared dream: to create a better world through
              sustainable agriculture. This vision gave birth to the remarkable
              organization known as "Youths Organizing for Sustainability in
              Agriculture," or simply YOSA. YOSA is more than just an
              organization; it's a movement, a beacon of hope for a brighter and
              more sustainable future. At YOSA, our vision is crystal clear: we
              aim to be the driving force behind a profound and positive
              transformation in the agri-food system. We believe in harnessing
              the energy and innovative spirit of youth to steer real change,
              not just for ourselves but for generations to come. Our mission is
              firmly rooted in environmental and social sustainability advocacy,
              passionately championed by dedicated young leaders who are
              determined to make a meaningful difference in the world.
            </div>
          </div>
          <div className="text-[1.1rem] text-[#333] tracking-wider leading-[2.2rem]  ">
            At the core of YOSA's philosophy is the belief that transformative
            and sustainable leadership can light the path towards a more
            sustainable future. We recognize that technological advancements,
            combined with social innovation, hold the keys to unlocking a better
            world. Moreover, we emphasize the importance of people-centered
            governance, ensuring that the voices of the marginalized and
            underserved are heard and valued. A Successful Transition for
            Sustainable Development YOSA envisions a future where sustainable
            agriculture is not just a buzzword but a way of life. We see a world
            where communities thrive, ecosystems flourish, and food security is
            a reality for all. To achieve this, we are committed to continuous
            learning, innovation, and action. YOSA believes that by working
            together, we can pave the way for a successful transition towards
            sustainable development, leaving behind a legacy of prosperity and
            harmony for future generations.
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-[2.45rem] text-[#333] font-bold gap-[1rem] mt-11">
            OUR <span className="ml-4 text-[#11661f]">APPROACH</span>
          </h1>
          <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-2 pt-8  ">
            <div className="flex flex-col items-center gap-4 p-8 hover:shadow-xl shadow-[#333] hover:scale-110 ease-in-out duration-500 rounded-md">
              <div>
                <SiAtom className="text-[#0d3a15] md:h-[5rem] md:w-[5rem] " />
              </div>
              <div>
                We base all of our decisions and actions on scientific
                principles and rely on data to guide us
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-8 hover:shadow-xl shadow-[#333] hover:scale-110 ease-in-out duration-700 rounded-md">
              <div>
                <RiRobot2Line className="text-[#0d3a15] md:h-[5rem] md:w-[5rem] " />
              </div>
              <div>
                We will promote technologies, innovations, and nature-based
                farming models verified by global and regional researchers in
                peer-reviewed journals
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-8 hover:shadow-xl shadow-[#333] hover:scale-110 ease-in-out duration-700 rounded-md">
              <div>
                <FaUniversity className="text-[#0d3a15] md:h-[5rem] md:w-[5rem] " />
              </div>
              <div>
                Re-adapting brilliant research outputs to include the unique
                multicultural issues of the locales
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-8 hover:shadow-xl shadow-[#333] hover:scale-110 ease-in-out duration-700 rounded-md">
              <div>
                <BsFileEarmarkSpreadsheet className="text-[#0d3a15] md:h-[5rem] md:w-[5rem] " />
              </div>
              <div>
                We will make use of statistics derived from credible and
                reputable service statistics
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-8 hover:shadow-xl shadow-[#333] hover:scale-110 ease-in-out duration-700 rounded-md">
              <div>
                <PiTreeFill className="text-[#0d3a15] md:h-[5rem] md:w-[5rem] " />
              </div>
              <div>
                We will demand that our associates take action in solidarity
                with our community
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-[6rem]">
            <h1 className="text-3xl md:text-[2.45rem] text-[#333] font-bold gap-[1rem] mt-11">
              AIMS <span className="ml-4 text-[#11661f]">&</span> OBJECTIVES
            </h1>
          </div>
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-7">
            <div className="flex flex-col items-center gap-4 shadow-lg text-center md:text-left shadow-[#adacac] rounded-b-2xl md:p-16 p-4 hover:scale-110  ease-in-out duration-700">
              <div>
                {" "}
                <img
                  src={img1}
                  className="rounded-full md:h-[15rem] md:w-[20rem] object-cover brightness-75"
                  alt="card1"
                />
              </div>
              <div className="text-[0.67rem] md:text-[1.2rem]">
                Bringing together a community of people with shared concerns for
                a sustainable agri-food system in the region.
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 shadow-lg text-center md:text-left shadow-[#adacac] rounded-b-2xl md:p-16 p-4 hover:scale-110  ease-in-out duration-700">
              <div>
                {" "}
                <img
                  src={img2}
                  className="rounded-full md:h-[15rem] md:w-[20rem] object-cover brightness-75"
                  alt="card2"
                />
              </div>
              <div className="text-[0.67rem] md:text-[1.2rem]">
                Targeted campaigns on campuses; through the distribution of
                fliers that would educate the students (especially agricultural
                students) on the risks of unsustainable farming practices.
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 shadow-lg text-center md:text-left shadow-[#adacac] rounded-b-2xl md:p-16 p-4 hover:scale-110  ease-in-out duration-700">
              <div>
                {" "}
                <img
                  src={img3}
                  className="rounded-full md:h-[15rem] md:w-[20rem] object-cover brightness-75"
                  alt="card3"
                />
              </div>
              <div className="text-[0.67rem] md:text-[1.2rem]">
                Promoting recreational tree-planting in communities, not only
                through our advocacy but by showing exemplary tree-planting
                practices.
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 shadow-lg text-center md:text-left shadow-[#adacac] rounded-b-2xl md:p-16 p-4 hover:scale-110  ease-in-out duration-700">
              <div>
                {" "}
                <img
                  src={img4}
                  className="rounded-full md:h-[15rem] md:w-[20rem] object-cover brightness-75"
                  alt="card4"
                />
              </div>
              <div className="text-[0.67rem] md:text-[1.2rem]">
                Taking advantage of mass media to communicate to a broader
                audience; through outreaches on radio and campaigns on social
                media platforms.
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 shadow-lg text-center md:text-left shadow-[#adacac] rounded-b-2xl md:p-16 p-4 hover:scale-110  ease-in-out duration-700">
              <div>
                {" "}
                <img
                  src={img5}
                  className="rounded-full md:h-[15rem] md:w-[20rem] object-cover brightness-75"
                  alt="card5"
                />
              </div>
              <div className="text-[0.67rem] md:text-[1.2rem]">
                Promoting public health through sensitization, especially the
                women - who are mostly affected - on the dangers associated with
                the use of unsustainable agricultural practices.
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 shadow-lg text-center md:text-left shadow-[#adacac] rounded-b-2xl md:p-16 p-4 hover:scale-110  ease-in-out duration-700">
              <div>
                {" "}
                <img
                  src={img6}
                  className="rounded-full md:h-[15rem] md:w-[20rem] object-cover brightness-75"
                  alt="card6"
                />
              </div>
              <div className="text-[0.67rem] md:text-[1.2rem]">
                Review progress reports to analyze our experiences and find ways
                to improve the campaign.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
