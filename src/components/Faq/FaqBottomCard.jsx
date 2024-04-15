import React from "react";

const FaqBottomCard = ({ title, img }) => {
  return (
    <>
      {" "}
      <div className="h-[470px]  relative  transition-all duration-500">
        <div className="group h-56 w-80 relative flex overflow-hidden  ">
          <img
            src={img}
            alt=""
            className="h-64 w-96  group-hover:-translate-y-10 transition-all duration-500 "
          />
          <div className="h-56 w-96 bg-blue-900 opacity-45 absolute " />
        </div>
        <div className="h-72 w-72 bg-white absolute top-52 left-5 flex flex-col justify-start ">
          <div className="h-10 w-44 bg-orange-600 absolute -top-5 left-5 text-white text-center pt-2">
            FEBRUARY 27,2019
          </div>
          <div className="h-auto w-64 flex flex-col items-center justify-center gap-5 pt-10">
            <h1 className="text-lg font-semibold text-blue-900 hover:text-orange-600">
              {title}
            </h1>
            <p className="text-gray-700 w-44">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus...
            </p>
            <h1 className="text-orange-600 hover:text-blue-900">
              Read More &gt;{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqBottomCard;
