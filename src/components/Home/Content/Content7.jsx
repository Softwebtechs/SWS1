import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";

const Content7 = () => {
  return (
    <>
      <div className="h-[800px] flex flex-col items-center justify-start pt-28">
        <div className="md:flex md:flex-row flex flex-col gap-5 justify-between items-center w-[600px]  md:mb-16  mb:10">
          <h1 className="md:text-4xl text-3xl font-bold text-blue-900  ">
            Latest from <span className="text-orange-500">Blog</span>
          </h1>
          <div className="gap-1 flex ">
            <div className="h-8 w-8  flex justify-center items-center text-white bg-orange-600 ">
              <ArrowBackIosIcon style={{ fontSize: "small" }} />
            </div>
            <div className="h-8 w-8  flex justify-center items-center text-white bg-blue-900">
              <ArrowForwardIosIcon style={{ fontSize: "small" }} />
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-row flex-col items-center justify-center ">
          <div className=" m-5 flex flex-row gap-10 ">
            <div className="xl:h-72 xl:w-80  md:max-xl:h-64 md:max-xl:w-72 h-80 w-96 bg-blue-900 xl:pt-56 lg:max-xl:pt-48 md:max-lg:pt-[190px] pt-64 flex flex-col ">
              <div className="h-12 w-12 bg-orange-500 ml-4 flex flex-col justify-center items-center  ">
                <h1 className="font-bold text-white text-xl">05</h1>
                <h1 className="font-bold text-white text-sm">AUG</h1>
              </div>
              <div className=" xl:w-72 md:w-[260px] h-64 w-[350px] bg-white ml-4 drop-shadow-md flex flex-col p-6 gap-5">
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

            <div className="xl:h-72 xl:w-80 md:max-xl:h-64 md:max-xl:w-72 h-80 w-96 bg-blue-900 xl:pt-56 lg:max-xl:pt-48 md:max-lg:pt-[190px] pt-64 md:flex md:flex-col hidden">
              <div className="h-12 w-12 bg-orange-500 ml-4 flex flex-col justify-center items-center  ">
                <h1 className="font-bold text-white text-xl">05</h1>
                <h1 className="font-bold text-white text-sm">AUG</h1>
              </div>
              <div className="xl:w-72 md:w-[260px] h-64 w-[350px] bg-white ml-4 drop-shadow-md flex flex-col p-6 gap-5">
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

            <div className="xl:h-72 xl:w-80 md:max-xl:h-64 md:max-xl:w-72 h-80 w-96 bg-blue-900 xl:pt-56 lg:max-xl:pt-48 pt-64 lg:flex lg:flex-col hidden">
              <div className="h-12 w-12 bg-orange-500 ml-4 flex flex-col justify-center items-center  ">
                <h1 className="font-bold text-white text-xl">05</h1>
                <h1 className="font-bold text-white text-sm">AUG</h1>
              </div>
              <div className="xl:w-72 md:w-[260px] h-64 w-[350px] bg-white ml-4 drop-shadow-md flex flex-col p-6 gap-5">
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
