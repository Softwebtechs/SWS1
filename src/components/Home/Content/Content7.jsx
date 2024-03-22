import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";

const Content7 = () => {
  return (
    <>
      <div className="h-screen p-16 ">
        <div className="flex flex-row  justify-around items-center sm:gap-48">
          <h1 className="sm:text-6xl text-3xl font-bold text-blue-900 sm:ml-0 ml-12 mb-5">
            Latest from <span className="text-orange-500">Blog</span>
          </h1>
          <div className="flex gap-1">
            <div className="h-8 w-8 ml-16 md:flex hidden justify-center items-center text-white bg-orange-600">
              <ArrowBackIosIcon style={{ fontSize: "small" }} />
            </div>
            <div className="h-8 w-8 md:flex hidden justify-center items-center text-white bg-blue-900">
              <ArrowForwardIosIcon style={{ fontSize: "small" }} />
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-row flex-col items-center justify-center">
          <div className=" m-5 sm:mt-10 flex flex-row gap-10 ">
            <div className="h-80 w-96 bg-blue-900 pt-64 sm:flex sm:flex-col ">
              <div className="h-12 w-12 bg-orange-500 ml-4 flex flex-col justify-center items-center  ">
                <h1 className="font-bold text-white text-xl">05</h1>
                <h1 className="font-bold text-white text-sm">AUG</h1>
              </div>
              <div className="h-64 w-[350px] bg-white ml-4 drop-shadow-md flex flex-col p-6 gap-5">
                <h1 className="text-blue-900 font-bold text-lg">
                  Production of goods <br /> or related services <br /> within
                  an economy
                </h1>
                <div className="w-full">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nemo aspernatur.
                  </p>
                </div>
                <a href="#" className="text-orange-500  text-sm font-semibold">
                  Read more &gt;
                </a>
              </div>
            </div>
            <div className="h-80 w-96 bg-blue-900 pt-64 sm:flex sm:flex-col hidden">
              <div className="h-12 w-12 bg-orange-500 ml-4 flex flex-col justify-center items-center  ">
                <h1 className="font-bold text-white text-xl">05</h1>
                <h1 className="font-bold text-white text-sm">AUG</h1>
              </div>
              <div className="h-64 w-[350px] bg-white ml-4 drop-shadow-md flex flex-col p-6 gap-5">
                <h1 className="text-blue-900 font-bold text-lg">
                  Production of goods <br /> or related services <br /> within
                  an economy
                </h1>
                <div className="w-full">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nemo aspernatur.
                  </p>
                </div>
                <a href="#" className="text-orange-500  text-sm font-semibold">
                  Read more &gt;
                </a>
              </div>
            </div>
            <div className="h-80 w-96 bg-blue-900 pt-64 sm:flex sm:flex-col hidden">
              <div className="h-12 w-12 bg-orange-500 ml-4 flex flex-col justify-center items-center  ">
                <h1 className="font-bold text-white text-xl">05</h1>
                <h1 className="font-bold text-white text-sm">AUG</h1>
              </div>
              <div className="h-64 w-[350px] bg-white ml-4 drop-shadow-md flex flex-col p-6 gap-5">
                <h1 className="text-blue-900 font-bold text-lg">
                  Production of goods <br /> or related services <br /> within
                  an economy
                </h1>
                <div className="w-full">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nemo aspernatur.
                  </p>
                </div>
                <a href="#" className="text-orange-500  text-sm font-semibold">
                  Read more &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content7;
