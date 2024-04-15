import React from "react";
import checkBox from "./check_box.png";

const HistoryCard2 = ({ year, selectedYear, title1, title2, img }) => {
  if (year != selectedYear) return null;
  return (
    <>
      <div className="xl:flex xl:flex-row flex flex-col lg:flex lg:flex-row w-full items-center justify-center gap-10">
        <div className="xl:w-1/2 w-full flex items-center justify-center">
          <div className="h-80 w-[350px] md:max-lg:w-[700px] lg:w-[450px] bg-gray-900 relative">
            <img
              src={img}
              alt=""
              className="absolute h-full w-auto object-fill"
            />
            <div className="relative bg-gray-800 bg-opacity-50 h-full w-full " />
          </div>
        </div>
        <div className="xl:w-1/2 w-full flex  flex-col justify-center gap-5 ">
          <div className="flex flex-col xl:flex xl:flex-col items-start justify-center  gap-6">
            <h1 className="text-blue-900 text-2xl font-bold">
              {title1}{" "}
              <span className="text-orange-500 text-2xl font-bold">
                {" "}
                {title2}
              </span>
            </h1>
            <p className="text-gray-700 h-auto lg:w-[550px] w-[350px] md:max-lg:w-[700px] text-sm leading-6">
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras dapibus. Vivamus elementum semper nisi.
            </p>
          </div>
          <div className="flex md:max-lg:w-[700px] w-[350px]   flex-col gap-5 text-sm text-gray-500">
            <div className="flex gap-2 justify-start items-center">
              <img src={checkBox} alt="" className="h-4" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <img src={checkBox} alt="" className="h-4" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <img src={checkBox} alt="" className="h-4" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <img src={checkBox} alt="" className="h-4" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <img src={checkBox} alt="" className="h-4" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryCard2;
