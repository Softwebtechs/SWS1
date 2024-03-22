import StarIcon from "@material-ui/icons/Star";
import React from "react";

const Content4 = () => {
  return (
    <>
      <div className="sm:flex sm:flex-row flex-row h-96 sm:mb-10 mb-96 ">
        <div className="bg-orange-500 h-full sm:w-1/2 w-full flex flex-col justify-center items-start">
          <div className="flex flex-col justify-center items-start sm:ml-28 ml-10 text-white gap-5 ">
            <h1 className="text-2xl font-medium">
              From Our <br /> Client's Speak
            </h1>
            <div className="">
              <p className="">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                modi.
              </p>
            </div>
            <button className="bg-blue-900 mr-6 px-6 py-2">Read more</button>
          </div>
        </div>
        <div className="flex flex-row bg-blue-900 h-full sm:w-1/2 w-full overflow-hidden">
          <div className="flex flex-col text-white sm:gap-5 gap-10 justify-center sm:ml-28 ml-16 items-start mt-10">
            <div className="h-16 w-16 rounded-full bg-white"></div>
            <h1>Jessy Smith</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="flex flex-row text-orange-600 h-5 w-20">
              <StarIcon style={{ fontSize: "small" }} />
              <StarIcon style={{ fontSize: "small" }} />
              <StarIcon style={{ fontSize: "small" }} />
              <StarIcon style={{ fontSize: "small" }} />
              <StarIcon style={{ fontSize: "small" }} />
            </div>
          </div>
          <div className="sm:flex hidden flex-col text-white gap-5 justify-center ml-28 items-start mt-10">
            <div className="h-16 w-16 rounded-full bg-white"></div>
            <h1>Wills Doe</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="flex flex-row text-orange-600 h-5 w-20">
              <StarIcon style={{ fontSize: "small" }} />
              <StarIcon style={{ fontSize: "small" }} />
              <StarIcon style={{ fontSize: "small" }} />
              <StarIcon style={{ fontSize: "small" }} />
              <StarIcon style={{ fontSize: "small" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content4;
