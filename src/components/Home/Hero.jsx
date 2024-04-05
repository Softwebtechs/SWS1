import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import Content1 from "./Content/Content1";
import Content2 from "./Content/Content2";
import Content3 from "./Content/Content3";
import Content4 from "./Content/Content4";
import Content5 from "./Content/Content5";
import Content6 from "./Content/Content6";
import Content7 from "./Content/Content7";

const Hero = () => {
  return (
    <>
      <div className="flex md:h-[600px] w-full h-96 items-center bg-gray-500">
        <div className="h-12 w-12 ml-20 md:flex hidden justify-center items-center text-white bg-orange-600 p-5">
          <ArrowBackIosIcon />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 text-white w-auto ml-14">
          <div className="flex flex-col text-center font-semibold text-4xl gap-2">
            <h1 className="text-white">
              We are{" "}
              <span className="bg-orange-600 px-1">
                No.1 Industrial Service
              </span>
            </h1>
            <h1 className="text-white "> Providers in Worldwide!</h1>
          </div>
          <div className="md:h-auto xl:w-1/2 w-full px-8">
            <p className="md:text-base text-sm font-normal text-center sm:flex hidden">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, ehoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt.
            </p>
          </div>
          <div className="flex gap-2 text-sm text-white md:font-normal font-semibold">
            <button className="px-5 py-2 bg-blue-900 text-white">
              READ MORE
            </button>
            <button className="px-5 py-2 bg-orange-600">Our Solutions</button>
          </div>
        </div>

        <div className="h-12 w-12 md:flex hidden justify-center items-center text-white bg-blue-900 mr-20 p-5">
          <ArrowForwardIosIcon />
        </div>
      </div>

      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
    </>
  );
};

export default Hero;
