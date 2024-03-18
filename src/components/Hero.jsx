import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Hero = () => {
  return (
    <>
      <div className="flex h-[39rem] items-center bg-gray-500">
        <div className="h-12 w-12 ml-16 md:flex hidden justify-center items-center text-white bg-orange-600">
          <ArrowBackIosIcon />
        </div>

        <div className="flex flex-col text-white gap-5 justify-center items-center h-[39rem] bg-gray-500">
          <div className="flex flex-col flex-wrap justify-center items-center font-semibold md:text-4xl text-2xl gap-1">
            <h1 className="text-white">
              We are{" "}
              <span className="bg-orange-600 px-1">
                No.1 Industrial Service
              </span>
            </h1>
            <h1 className="text-white "> Providers in Worldwide!</h1>
          </div>
          <div className="md:h-auto md:w-1/2 w-full px-8">
            <p className="md:text-base text-sm font-normal text-center">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, ehoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt.
            </p>
          </div>
          <div className="flex gap-2 text-sm text-white font-normal ">
            <button className="px-5 py-2 bg-blue-900 text-white">
              READ MORE
            </button>
            <button className="px-5 py-2 bg-orange-600">Our Solutions</button>
          </div>
        </div>

        <div className="h-12 w-12 md:flex hidden justify-center items-center text-white bg-blue-900">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
};

export default Hero;
