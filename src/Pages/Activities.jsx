import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import upcoming1 from "../assets/pexels-anna-shvets-5231143.jpg";
import Carousels from "./Carousel";
import sample from "../assets/YOSATECH.mp4";

const Activities = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div>
      <Carousels />
      <div className="p-8 titled_underline mt-10">
        <h2 className="text-3xl font-bold pb-[1rem] z-10 ">UPCOMING EVENTS</h2>
        <div>
          <div className="grid_functioning  justify-center items-start">
            <div className=" overflow-hidden">
              {" "}
              <img
                src={upcoming1}
                className="   md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                alt="Farmers workshop series "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Famers Workshop Series
              </h3>

              <p>
                In response to the pressing need for sustainable farming
                practices in our local agricultural landscape, we are excited to
                announce our upcoming series of workshops, thoughtfully designed
                to cater to both seasoned farmers and the younger generation of
                aspiring agriculturists. Our commitment to nurturing a greener
                future extends beyond conventional farming methods, as we delve
                deep into the realms of sustainable agriculture, organic
                farming, and the dynamic integration of technology, all while
                addressing key topics such as soil health, crop rotation, and
                effective pest management. These workshops offer a unique
                opportunity to cultivate a vibrant community of informed and
                forward-thinking farmers, working collaboratively to cultivate a
                more eco-conscious, thriving agricultural ecosystem.
              </p>
            </div>
          </div>

          <div className="grid_functioning  justify-center items-start">
            <div className="overflow-hidden">
              {" "}
              <img
                src={upcoming1}
                className="md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                alt="Farmers workshop series "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Youth Agriculture Camp
              </h3>

              <p>
                Organize a vibrant and enriching summer camp for young people
                with a fervent interest in agriculture. This exceptional camp is
                not only an opportunity for participants to gain hands-on
                experience in farming, learning the intricacies of planting,
                harvesting, and the vital principles of sustainable farming
                methods but also a chance to immerse themselves in an immersive
                agricultural ecosystem that fosters a profound connection with
                the land. Moreover, our camp aims to go beyond the practical
                aspects of agriculture by offering a holistic experience that
                includes educational workshops, interactive discussions, and
                guest lectures from seasoned agricultural experts. Through this
                multifaceted approach, we hope to inspire and empower our young
                participants, equipping them with the knowledge, skills, and
                passion needed to become future leaders in the field of
                sustainable agriculture. Join us on this transformative journey
                where the seeds of curiosity and eco-consciousness are nurtured,
                and the roots of sustainable farming take hold.
              </p>
            </div>
          </div>

          <div className="grid_functioning  justify-center items-start">
            <div className="overflow-hidden">
              {" "}
              <img
                src={upcoming1}
                className="md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                alt="Farmers workshop series "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Sustainable Farm Tours
              </h3>

              <p>
                Plan captivating and informative tours of sustainable farms
                throughout the region, immersing participants in a diverse
                tapestry of agricultural practices that exemplify the very
                essence of sustainability. Our guided tours not only provide
                valuable insights into the innovative techniques and holistic
                approaches adopted by these farms but also allow participants to
                witness firsthand the profound impact of sustainable agriculture
                on local communities and ecosystems. Additionally, these tours
                are designed to foster a sense of community among participants,
                offering opportunities for engaging discussions, networking with
                like-minded individuals, and connecting with the passionate
                farmers who are at the forefront of sustainable agricultural
                transformation. Join us on this journey of exploration,
                discovery, and inspiration as we celebrate the remarkable
                achievements of sustainable farming in our region and
                collectively pave the way for a greener, more resilient future.
              </p>
            </div>
          </div>

          <div className="grid_functioning  justify-center items-start">
            <div className="overflow-hidden">
              {" "}
              <img
                src={upcoming1}
                className="md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                alt="Farmers workshop series "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Online Webinars
              </h3>

              <p>
                Host engaging and informative webinars featuring renowned
                experts in the dynamic realm of sustainable agriculture. These
                webinars serve as a platform for in-depth exploration, allowing
                participants to delve into a wide spectrum of topics, from the
                ecological advantages of regenerative farming to the innovative
                techniques of aquaponics and the space-efficient wonders of
                vertical farming. Furthermore, our webinars foster a vibrant
                community of learners and practitioners, providing a forum for
                interactive discussions, Q&A sessions, and the exchange of
                invaluable insights. By uniting individuals passionate about
                sustainable agriculture with leading experts, we aspire to
                cultivate a global network committed to nurturing our planet
                through sustainable farming practices. Join us in this virtual
                journey of knowledge-sharing and empowerment as we sow the seeds
                of a more sustainable agricultural future together.
              </p>
            </div>
          </div>

          <div className="grid_functioning  justify-center items-start">
            <div className="overflow-hidden">
              {" "}
              <img
                src={upcoming1}
                className="md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                alt="Farmers workshop series "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Community Garden Initiatives
              </h3>

              <p>
                Forge meaningful partnerships with local communities to create
                and cultivate vibrant community gardens, transforming these
                green spaces into hubs of sustainable agricultural education and
                active engagement. Our collaborative initiative not only
                empowers residents with knowledge about sustainable farming but
                also offers them the opportunity to roll up their sleeves and
                actively participate in the cultivation of these gardens,
                fostering a deeper connection between people and the land.
                Moreover, these community gardens serve as a living testament to
                the power of collective action, nurturing a sense of shared
                responsibility for our environment and strengthening the bonds
                of community as we collectively reap the benefits of sustainable
                agriculture. Join us in this inspiring journey of co-creation,
                where the seeds of knowledge and camaraderie flourish into a
                harvest of sustainable living and thriving local communities.
              </p>
            </div>
          </div>

          <div className="grid_functioning  justify-center items-start">
            <div className="overflow-hidden">
              {" "}
              <img
                src={upcoming1}
                className="md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                alt="Farmers workshop series "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Youth Agriculture Competitions
              </h3>

              <p>
                Energize the youth in your community by orchestrating
                stimulating competitions that challenge their creative prowess
                in devising groundbreaking solutions to the pressing challenges
                of agricultural sustainability. These contests not only
                encourage inventive thinking but also cultivate a spirit of
                problem-solving, equipping our young talents with the skills
                they need to lead the charge towards a more sustainable
                agricultural future. Furthermore, by offering enticing prizes or
                scholarships to the winners, we aim to recognize and reward
                their ingenuity, nurturing a generation of change-makers who are
                inspired to apply their ideas in real-world agricultural
                contexts, thus catalyzing a transformative shift towards
                sustainable farming practices in our region. Join us in igniting
                the spark of innovation and fostering a legacy of sustainability
                through the boundless potential of our youth.
              </p>
            </div>
          </div>

          <div className="grid_functioning  justify-center items-start">
            <div className="overflow-hidden">
              {" "}
              <img
                src={upcoming1}
                className="md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                alt="Farmers workshop series "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Farmers' Market
              </h3>

              <p>
                Establish a vibrant and recurring farmers' market that not only
                serves as a marketplace for local farmers to showcase their
                bountiful, sustainable, and organic harvests but also creates a
                dynamic community space for fostering connections between
                growers and consumers. Our farmers' market endeavors to go
                beyond commerce by offering interactive workshops, engaging
                demonstrations, and educational sessions that enlighten the
                public about the profound advantages of embracing sustainable
                agricultural practices in our daily lives. Moreover, through
                this grassroots initiative, we aim to sow the seeds of awareness
                and inspire a collective shift towards conscious consumption,
                empowering individuals to make informed choices that benefit
                their health, the environment, and our local farming
                communities. Join us in this journey of reconnection with our
                food sources, where every purchase at the market is a vote for a
                greener, healthier, and more sustainable future.
              </p>
            </div>
          </div>

          <div className="grid_functioning  justify-center items-start">
            <div className="overflow-hidden relative">
              <video
                className="md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                muted
                loop
                ref={vidRef}
                src={sample}
                type="video/mp4"
              />
              <div
                className={
                  playVideo
                    ? "flex flex-row  md:w-[20rem] md:h-[15rem] items-center  justify-center -inset-0 w-full absolute bg-transparent"
                    : "flex flex-row  md:w-[20rem] md:h-[15rem] items-center  justify-center -inset-0 w-full absolute bg-[rgba(0,0,0,0.45)]"
                }
              >
                <div
                  className="flex flex-row justify-center items-center w-[50px] h-[50px] rounded-[30%] pointer border-2 border-slate-100"
                  onClick={handleVideo}
                >
                  {" "}
                  {playVideo ? (
                    <BsPauseFill
                      color="#fff"
                      fontSize={30}
                      className="cursor-pointer"
                    />
                  ) : (
                    <BsFillPlayFill
                      color="#fff"
                      fontSize={30}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Green Technology Showcase
              </h3>

              <p>
                Curate a remarkable event or exhibition that serves as a dynamic
                platform for highlighting the cutting-edge innovations in
                sustainable agriculture, unveiling a world of possibilities that
                harness technology for the greater good of farming and the
                environment. Beyond mere displays, this immersive experience
                invites attendees to engage directly with these innovations,
                offering hands-on demonstrations, expert-led discussions, and
                interactive workshops that empower them to envision a future
                where sustainable farming thrives through the integration of
                green technologies. Furthermore, our event seeks to foster
                partnerships and collaborations among industry leaders, farmers,
                researchers, and tech enthusiasts, catalyzing a movement that
                drives the adoption of these transformative technologies on a
                broader scale. By coming together to explore, learn, and
                innovate, we aim to cultivate a greener, smarter, and more
                sustainable agricultural landscape for generations to come. Join
                us in this extraordinary journey of discovery and progress,
                where the fusion of agriculture and technology paves the way for
                a brighter, more sustainable future.
              </p>
            </div>
          </div>

          <div className="grid_functioning  justify-center items-start">
            <div className="overflow-hidden">
              {" "}
              <img
                src={upcoming1}
                className="md:w-[20rem] md:h-[15rem] object-cover hover:scale-125 duration-700 ease-in-out"
                alt="Farmers workshop series "
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#11661f] text-2xl font-bold">
                Sustainable Farming Documentary Screening
              </h3>

              <p>
                Organize an event to showcase the latest green technologies and
                innovations in agriculture, such as solar-powered irrigation
                systems and smart farming apps. This immersive experience
                invites attendees to engage directly with these innovations,
                empowering them to envision a future where sustainable farming
                thrives through the integration of green technologies. Join us
                in this journey of discovery and progress, where agriculture and
                technology pave the way for a brighter, more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
