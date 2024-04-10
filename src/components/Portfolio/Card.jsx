import React from "react";
import link from "./img/link.png";
import search from "./img/search.png";

const Card = ({ title, img }) => {
  return (
    <>
      <div className="h-[300px] w-[350px] bg-gray-600 group transition-all duration-500 m-2 ">
        <div>
          <img src={img} alt="" className="h-[300px] w-[350px] absolute" />
          <div className="h-[300px] w-[350px] flex flex-col gap-5 items-center justify-center bg-orange-600 relative opacity-0 hover:opacity-70 ">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <div className="border-b-2 w-20 "></div>
            <div className="flex flex-row gap-5">
              <div className="h-10 w-10 bg-white flex items-center justify-center">
                <img src={link} alt="" className="h-6 w-6 " />
              </div>
              <div className="h-10 w-10 bg-white flex items-center justify-center">
                <img src={search} alt="" className="h-6 w-6 " />
              </div>
            </div>
          </div>

          <div className="h-20 w-[350px] bg-blue-950 group-hover:hidden relative ">
            <h1 className="text-white text-2xl font-semibold text-center p-4 ">
              {title}
            </h1>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
