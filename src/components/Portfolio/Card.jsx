import React from "react";
import link from "./img/link.png";
import search from "./img/search.png";

const Card = ({ selectedType, selected, title, img }) => {
  if (selected != selectedType) return null;

  return (
    <>
      <div className=" flex flex-col">
        <div className="relative group h-80 w-80 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 flex flex-col items-end ">
          <img
            src={img}
            alt=""
            className="absolute group-hove:h-[350px] group-hover:w-80 h-[268px] w-full z-10"
          />
          <div className="md:max-lg:h-80 md:max-lg:w-80 h-80 w-80 p-5 bg-orange-600 text-white  transition duration-300 opacity-0  hover:opacity-80 flex flex-col justify-center items-center gap-5 z-30 ">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="border-b-4 w-10 border-white " />
            <div className="flex gap-2">
              <div className=" flex justify-center items-center  hover:hover:bg-blue-900 ">
                <img
                  src={link}
                  alt=""
                  className="h-10 w-10 bg-white p-3   cursor-pointer hover:invert  "
                />
              </div>
              <div className=" flex justify-center items-center  hover:hover:bg-blue-900 ">
                <img
                  src={search}
                  alt=""
                  className="h-10 w-10 bg-white p-3   cursor-pointer hover:invert  "
                />
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-16 w-full  bg-blue-900 text-white opacity-100 transition-opacity duration-500 group-hover:opacity-0 ">
            <h1 className="font-semibold text-xl">{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
