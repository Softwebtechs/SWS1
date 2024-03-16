import React from "react";

import img from "../assets/img.png";

const Footer = () => {
  return (
    <>
      <div>
        <img src={img} className="h-full " alt="img" />
      </div>

      <div className="flex flex-col">
        <div className="h-64  bg-white pt-10 ml-72 ">
          <div className="flex flex-col gap-4 ml-5">
            <h1 className="text-blue-900 text-4xl font-bold ">
              Subscribe <span className="text-orange-500 ">For Newsletter</span>
            </h1>
            <div className="flex flex-row items-center gap-20 mb-20">
              <p>Sign up to get latest updates and news</p>
              <div className="flex flex-row max-w-screen-md gap-5">
                <input
                  className="border w-96 h-10 p-3 text-gray-400"
                  type="text"
                  value="Enter your mail address"
                />
                <button className="bg-blue-950 h-10 w-28 text-white">
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div className="h-96 w-80 bg-gray-300 ml-4 drop-shadow-md flex flex-col gap-5">
            <div className="bg-orange-500 w-full h-10 p-2 text-white font-normal">
              Follow us :
            </div>
            <div className="pl-7 flex flex-col gap-4">
              <h1 className="text-blue-950 text-2xl font-bold">PATRAI</h1>
              <div className="w-64">
                <p className="text-gray-700 text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="pl-5 text-blue-950 font-semibold flex flex-col gap-4">
                <p>
                  Manufactory, 2nd Cross Street, <br />
                  Newyork, USA 10205.
                </p>
                <p>
                  +00-123-456-7890 <br /> +00-123-456-7891
                </p>
                <p>
                  admin@domain.com <br /> support@domain.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white h-96 flex justify-end">
          <div className="flex flex-row gap-16 pt-6 pr-56">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-medium ">Best Services</h1>
              <div className="flex flex-col pl-5 text-gray-200 text-base font-normal gap-1">
                <p>Material Engineering</p>
                <p>Agriculture proceessing</p>
                <p>Mechanical Engineering</p>
                <p>Chemical Research</p>
                <p>Material Engineering</p>
                <p>Agriculture Processing</p>
                <p>Mechanical Engineering</p>
                <p>Chemical Reseach </p>
                <p>Power & Energy</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-medium ">Best Services</h1>
              <div className="flex flex-col pl-5 text-gray-200 text-base font-normal gap-1">
                <p>Material Engineering</p>
                <p>Agriculture proceessing</p>
                <p>Mechanical Engineering</p>
                <p>Chemical Research</p>
                <p>Material Engineering</p>
                <p>Agriculture Processing</p>
                <p>Mechanical Engineering</p>
                <p>Chemical Reseach </p>
                <p>Power & Energy</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-medium ">Best Services</h1>
              <div className="flex flex-col pl-5 text-gray-200 text-base font-normal gap-1">
                <p>Material Engineering</p>
                <p>Agriculture proceessing</p>
                <p>Mechanical Engineering</p>
                <p>Chemical Research</p>
                <p>Material Engineering</p>
                <p>Agriculture Processing</p>
                <p>Mechanical Engineering</p>
                <p>Chemical Reseach </p>
                <p>Power & Energy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white h-10 flex items-center justify-center">
          <p className="text-sm">@2018. All Rights Reserved by designthemes</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
