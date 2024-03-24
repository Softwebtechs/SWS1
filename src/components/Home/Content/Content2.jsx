import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import atIcon from "../../../assets/icons/atIcon.png";
import csIcon from "../../../assets/icons/csIcon.png";
import dIcon from "../../../assets/icons/dtIcon.png";
import expertIcon from "../../../assets/icons/expertIcon.png";

const Content2 = () => {
  return (
    <>
      <div className="max-xl:h-[900px] w-full xl:flex-row xl:flex flex flex-col xl:h-screen text-white md:max-xl:mb-[650px] mb-[1650px] xl:mb-16">
        <div className="md:max-xl:flex xl:flex xl:flex-row xl:w-1/2">
          <div className="bg-gray-500 xl:h-full h-[500px] xl:w-1/2 md:max-xl:w-1/2 w-full md:flex hidden "></div>
          <div className="bg-black xl:h-full h-[500px] xl:w-1/2 md:max-xl:w-1/2 w-full">
            <div className="flex flex-col justify-center items-center gap-4 h-1/2 ">
              <h1 className="text-orange-500">Why We are Best i Industry</h1>
              <p className="">Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="flex flex-col items-center h-1/2 gap-3">
              <div className="bg-gray-300 h-20 w-20 rounded-full"></div>
              <h1>JOHN DOE - FOUNDER</h1>
              <h2 className="text-orange-500">Patrai Industry Limited</h2>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>

        {/* 4 box div */}
        <div className="md:max-xl:flex md:max-xl:flex-col xl:flex xl:flex-row  xl:w-1/2 ">
          <div className=" md:max-xl:flex xl:flex xl:flex-col xl:w-1/2 w-full">
            {/* Advanced Technology */}
            <div className=" xl:h-1/2 group bg-blue-900 h-[500px] w-full md:max-xl:w-1/2  flex flex-col justify-center items-center">
              <div className="group-hover:-translate-y-5 transition duration-300 flex flex-col items-center">
                <img
                  src={atIcon}
                  className="h-24 w-36"
                  alt="Advanced Technology"
                />
                <h1 className="text-xl font-semibold">Advanced Technology</h1>
              </div>
              <div className="h-auto w-64 text-center ">
                <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                <ArrowForwardIcon />
              </div>
            </div>

            {/* Delivery on Time */}
            <div className="xl:h-1/2 group  h-[500px] md:max-xl:w-1/2 w-full flex flex-col justify-center items-center  bg-orange-500 ">
              <div className="group-hover:-translate-y-5 transition duration-300 flex flex-col items-center">
                <img
                  src={dIcon}
                  className="h-24 w-36"
                  alt="Advanced Technology"
                />
                <h1 className="text-xl font-semibold">Delivery on Time</h1>
              </div>
              <div className="h-auto w-64 text-center ">
                <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                <ArrowForwardIcon />
              </div>
            </div>
          </div>

          <div className=" md:max-xl:flex xl:flex xl:flex-col xl:w-1/2 w-full">
            {/* Costumer Support */}
            <div className=" group xl:h-1/2 h-[500px] md:max-xl:w-1/2 w-full flex flex-col justify-center items-center  md:bg-orange-500 bg-blue-900">
              <div className="group-hover:-translate-y-5 transition duration-300 flex flex-col items-center">
                <img
                  src={csIcon}
                  className="h-24 w-36"
                  alt="Advanced Technology"
                />
                <h1 className="text-xl font-semibold">Costumer Support</h1>
              </div>
              <div className="h-auto w-64 text-center ">
                <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                <ArrowForwardIcon />
              </div>
            </div>

            {/* Expert Engineer */}
            <div className=" group  xl:h-1/2 h-[500px] md:max-xl:w-1/2 w-full flex flex-col justify-center items-center  md:bg-blue-900 bg-orange-500">
              <div className="group-hover:-translate-y-5 transition duration-300 flex flex-col items-center">
                <img
                  src={expertIcon}
                  className="h-24 w-36"
                  alt="Advanced Technology"
                />
                <h1 className="text-xl font-semibold">Expert Engineer</h1>
              </div>
              <div className="h-auto w-64 text-center ">
                <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                <ArrowForwardIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
