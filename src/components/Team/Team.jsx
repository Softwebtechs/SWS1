import React from "react";
import Card from "./Card";
import person from "./img/person.png";
import profile1 from "./img/profile1.jpg";
import profile2 from "./img/profile2.jpg";
import profile3 from "./img/profile3.jpg";
import profile4 from "./img/profile4.jpg";
import profile5 from "./img/profile5.jpg";

const Team = () => {
  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px-10 xl:px-[15%] items-center flex flex-col gap-6 justify-center">
        <h1 className="text-white font-semibold md:text-4xl xl:text-5xl text-6xl ">
          Team
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-3 ">
            <h1 className="text-sm text-gray-400">HOME</h1>
            <p className="text-sm text-gray-400">|</p>
            <h1 className="text-sm text-gray-400">Team</h1>
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
        <div className="flex flex-col gap-14 items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-white lg:text-5xl md:max-lg:w-[700px] lg:max-xl:w-[800px] xl:w-full text-3xl w-[400px] md:max-lg:text-5xl font-bold text-center">
              Want the right solution for your business?
            </h1>
            <p className="text-white xl:text-base text:sm md:max-lg:w-[600px] xl:w-full  w-[400px]  text-center">
              Clients count on us every day to help transform uncertainty into
              possibility
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="bg-orange-600 h-12 w-36 text-white font-normal text-base hover:text-gray-500 hover:bg-white duration-500 outline-none">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="h-auto w-full xl:flex xl:flex-row flex flex-col gap-5 ">
        <div className="h-auto xl:w-1/2 w-full xl:p-32 p-10 flex flex-col items-center justify-start gap-10 xl:pl-72">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-blue-900 text-2xl font-semibold">
              We are here to
            </h1>
            <h1 className="h-auto xl:w-[500px] w-[450px] xl:text-5xl xl:font-semibold text-3xl">
              <span className="text-blue-900  ">Helping Firms Innovate,</span>
              <span className="text-orange-600 "> Transform, and Lead</span>
            </h1>
          </div>
          <p className="h-auto xl:w-[500px] w-[450px] text-sm text-gray-500 leading-6 ">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </p>
          <div className="flex flex-col items-start justify-center xl:w-[500px] w-[450px] gap-5 ">
            <div className="flex flex-col gap-3 w-[550px]">
              <div className="flex justify-between">
                <h1 className="text-base text-blue-950">
                  Production Management
                </h1>
                <h1>80%</h1>
              </div>
              <div className="realtive">
                <div className=" absolute border-b-8 w-[550px] border-gray-200"></div>
                <div className="relative border-b-8  w-[420px] border-blue-900"></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-[550px]">
              <div className="flex justify-between">
                <h1 className="text-base text-blue-950">
                  International Communication
                </h1>
                <h1>72%</h1>
              </div>
              <div className="realtive">
                <div className=" absolute border-b-8 w-[550px] border-gray-200"></div>
                <div className="relative border-b-8  w-[360px] border-blue-900"></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-[550px]">
              <div className="flex justify-between">
                <h1 className="text-base text-blue-950">
                  Customer Satifaction
                </h1>
                <h1>95%</h1>
              </div>
              <div className="realtive">
                <div className=" absolute border-b-8 w-[550px] border-gray-200"></div>
                <div className="relative border-b-8  w-[500px] border-blue-900"></div>
              </div>
            </div>
          </div>
          <div className="xl:w-[500px] w-[450px]">
            <button className="h-12 w-36 bg-blue-900 text-white hover:bg-orange-600 duration-700">
              Contact now
            </button>
          </div>
        </div>
        <div className=" h-auto xl:w-1/2 w-full xl:p-32 p-12 flex items-center justify-center">
          <div className="relative group h-[510px] xl:w-[370px] w-[450px] border-8 border-gray-200 hover:border-blue-900 flex justify-center items-end duration-700">
            <div className="flex  justify-center items-start ">
              <img
                src={person}
                alt="person"
                className="absolute -top-12 h-auto w-80 left-5"
              />
              <div
                className=" h-56 absolute border-t-[220px] border-t-transparent
                    border-r-[370px] border-r-gray-200
                    border-b-transparent flex items-center justify-center top-[280px] group-hover:border-r-blue-900 duration-700"
              >
                <h1 className="absolute -right-[350px] -top-36 w-28 text-end  text-2xl font-normal text-blue-900 group-hover:text-white leading-8">
                  <span className="text-orange-500 group-hover:text-white  text-5xl font-semibold ">
                    14+
                  </span>{" "}
                  Years Experience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
