import React from "react";
import Card from "./Card";
import profile1 from "./img/profile1.jpg";
import profile2 from "./img/profile2.jpg";
import profile3 from "./img/profile3.jpg";
import profile4 from "./img/profile4.jpg";
import profile5 from "./img/profile5.jpg";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Team = () => {
  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px-10 xl:px-28 items-center flex flex-col gap-6 justify-center">
        <h1 className="text-white font-semibold md:text-4xl xl:text-6xl text-6xl">
          Team
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-5 ">
            <h1 className="text-lg text-gray-300">HOME</h1>
            <p>|</p>
            <h1 className="text-lg text-gray-300">Team</h1>
          </div>
        </div>
      </div>
      {/* body section */}
      <div className=" flex flex-col items-center">
        <div>
          <div className=" xl:flex xl:flex-row flex-col m-5">
            <div className="flex flex-col md:flex md:flex-row">
              <Card
                name={"Jason Smith"}
                position={"Founder / Ceo"}
                img={profile1}
              />
              <Card
                name={"Linda Johns"}
                position={"Money Management"}
                img={profile2}
              />
            </div>

            <div className="flex flex-col md:flex md:flex-row">
              <Card
                name={"Bill Goldberg"}
                position={"Production Head"}
                img={profile3}
              />
              <Card
                name={"Mark Hendry"}
                position={"Quality In charge"}
                img={profile4}
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" xl:flex xl:flex-row flex-col m-5">
            <div className="flex flex-col md:flex md:flex-row">
              <Card
                name={"Jason Smith"}
                position={"Founder / Ceo"}
                img={profile5}
              />
              <Card
                name={"Linda Johns"}
                position={"Money Management"}
                img={profile2}
              />
            </div>

            <div className="flex flex-col md:flex md:flex-row">
              <Card
                name={"Bill Goldberg"}
                position={"Production Head"}
                img={profile1}
              />
              <Card
                name={"Mark Hendry"}
                position={"Quality In charge"}
                img={profile4}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full bg-blue-900 mt-20 flex items-center justify-center">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-white lg:text-5xl md:max-lg:w-[700px] lg:max-xl:w-[800px] xl:w-full text-3xl w-[400px] md:max-lg:text-5xl font-bold text-center">
            Want the right solution for your business?
          </h1>
          <p className="text-white xl:text-lg text:sm md:max-lg:w-[600px] xl:w-full  w-[400px]  text-center">
            Clients count on us every day to help transform uncertainty into
            possibility
          </p>
          <div className="flex flex-col items-center justify-center">
            <button className="bg-orange-600 h-16 w-44 text-white font-semibold text-xl ">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="h-auto w-full xl:flex xl:flex-row flex flex-col gap-5 ">
        <div className="h-auto xl:w-1/2 w-full xl:p-32 p-10 flex flex-col items-center justify-start gap-10 xl:pl-72">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-blue-900 text-2xl font-semibold">
              We are here to
            </h1>
            <h1 className="h-auto xl:w-[500px] w-[450px] xl:text-5xl xl:font-bold text-3xl">
              <span className="text-blue-900  ">Helping Firms Innovate,</span>
              <span className="text-orange-600 "> Transform, and Lead</span>
            </h1>
          </div>
          <p className="h-auto xl:w-[500px] w-[450px] ">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </p>
          <div className="flex flex-col items-start justify-center xl:w-[500px] w-[450px] gap-10 ">
            <div>
              <h1>Production Management</h1>
              <div className="border-b-8  w-96 bg-gray-900"></div>
            </div>
            <div>
              <h1>International Communication</h1>
              <div className="border-b-8 w-96 bg-gray-900"></div>
            </div>
            <div>
              <h1>Customer Satifaction</h1>
              <div className="border-b-8 w-96 bg-gray-900"></div>
            </div>
          </div>
          <div className="xl:w-[500px] w-[450px]">
            <button className="h-14 w-32 bg-blue-900 text-white">
              Contact now
            </button>
          </div>
        </div>
        <div className="h-auto xl:w-1/2 w-full xl:p-32 p-12 flex items-center justify-center">
          <div className="h-[530px] xl:w-[500px] w-[450px] bg-gray-400"></div>
        </div>
      </div>
    </>
  );
};

export default Team;
