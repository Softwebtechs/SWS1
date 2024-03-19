import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import atIcon from "../../../assets/icons/atIcon.png";
import csIcon from "../../../assets/icons/csIcon.png";
import dtIcon from "../../../assets/icons/dtIcon.png";
import expertIcon from "../../../assets/icons/expertIcon.png";

const Content2 = () => {
  return (
    <>
      <div className="flex flex-row h-screen text-white">
        <div className="bg-gray-500 h-4/5 w-1/4"></div>
        <div className="bg-black h-4/5 w-1/4">
          <div className="flex flex-col justify-center items-center h-3/6 gap-4">
            <h1 className="text-orange-500">
              Why We are <br /> Best i Industry
            </h1>
            <p className="">Lorem ipsum dolor sit amet. </p>
          </div>
          <div className="flex flex-col justify-center items-center h-3/6 gap-3">
            <div className="bg-gray-300 h-20 w-20 rounded-full"></div>
            <h1>JOHN DOE - FOUNDER</h1>
            <h2 className="text-orange-500">Patrai Industry Limited</h2>
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="flex flex-col text-white bg-blue-900 h-4/5 w-1/4 ">
          <div className="flex flex-col gap-3 h-3/6 justify-center items-center">
            <img src={atIcon} alt="Advanced Technology" />
            <h1 className="text-xl font-semibold">Advanced Technology</h1>
            <ArrowForwardIcon />
          </div>
          <div className="flex flex-col gap-3 h-3/6 justify-center items-center bg-orange-500">
            <img src={expertIcon} alt="expert_icon_img" />
            <h1 className="text-xl font-semibold"> Expert Engineers</h1>
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="text-white bg-orange-500 h-4/5 w-1/4">
          <div className="flex flex-col gap-3 h-3/6 justify-center items-center">
            <img src={dtIcon} alt="delivery_on_time_img" />
            <h1 className="text-xl font-semibold">Delivery on time</h1>
            <div className="w-3/4 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                labore .
              </p>
            </div>
            <ArrowForwardIcon />
          </div>
          <div className="flex flex-col gap-3 h-3/6 justify-center items-center bg-blue-900">
            <img src={csIcon} alt="costumer_support_icon" />
            <h1 className="text-xl font-semibold">Customer Support</h1>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
