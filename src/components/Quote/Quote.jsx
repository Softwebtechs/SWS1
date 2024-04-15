import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "./Component/Card.jsx";
import qone from "./img/q1.png";
import qtwo from "./img/q2.png";
import qthree from "./img/q3.png";

const Quote = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-20  ">
        <h1 className="text-blue-900  w-[400px] md:max-lg:w-[600px] lg:w-[800px] md:text-5xl font-bold text-4xl ">
          Get a Quote Instantly
          <span className="text-orange-600 md:text-5xl text-4xl font-bold">
            {" "}
            Calculator
          </span>
        </h1>
      </div>
      <div className="lg:flex lg:flex-row flex flex-col gap-14 items-center justify-center mt-20 lg:max-xl:flex lg:max-xl:flex-col lg:max-xl:items-start lg:max-xl:ml-48">
        <div className="lg:flex lg:flex-row flex flex-col flex-wrap gap-14 justify-start items-center  ">
          <Card img_url={qone} title={"Fill the Details"} />
          <FaArrowRightLong style={{ fontSize: 30 }} color="#172554" />
          <Card img_url={qtwo} title={"Get the Estimate"} />
          <FaArrowRightLong style={{ fontSize: 30 }} color="#172554" />
          <Card img_url={qthree} title={"Confirmation"} />
        </div>
      </div>
      <div className="xl:flex xl:flex-row gap-10 items-center justify-center flex flex-col lg:max-xl:w-full ">
        <div className="flex flex-col">
          <h1 className="text-blue-900 text-3xl font-bold mt-20 text-start ml-20">
            Fill the Details of Your Projects
          </h1>
          <div className="md:flex md:flex-row flex flex-col gap-10 mt-10 items-start ml-20">
            <div>
              <select
                name="cars"
                id="Project types"
                className="h-10 w-72 bg-white border border-gray-300 text-sm text-gray-400 font-semibold p-2 outline-none"
              >
                <option value="Project Type">Project Type</option>
                <option value="saab">Electronic Material</option>
                <option value="mercedes">Power Systems</option>
                <option value="audi">Heavy Machinery</option>
                <option value="audi">Auto Parts</option>
                <option value="audi">Oil and Mineral oil</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Quality required*"
                className="h-10 w-72 bg-white border border-gray-300 text-sm text-gray-400 font-semibold p-2 outline-none"
              />
            </div>
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-10 mt-10 items-start ml-20">
            <div>
              <input
                type="text"
                placeholder="Scheduled days*"
                className="h-10 w-72 bg-white border border-gray-300 text-sm text-gray-400 font-semibold p-2 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Required Person"
                className="h-10 w-72 bg-white border border-gray-300 text-sm text-gray-400 font-semibold p-2 outline-none"
              />
            </div>
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-10 mt-10 items-start ml-20">
            <div>
              <input
                type="text"
                placeholder="Company name*"
                className="h-10 w-72 bg-white border border-gray-300 text-sm text-gray-400 font-semibold p-2 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company Address"
                className="h-10 w-72 bg-white border border-gray-300 text-sm text-gray-400 font-semibold p-2 outline-none"
              />
            </div>
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-10 mt-10 items-start ml-20">
            <div>
              <input
                type="digits"
                placeholder="Phone No*"
                className="h-10 w-72 bg-white border border-gray-300 text-sm text-gray-400 font-semibold p-2 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address*"
                className="h-10 w-72 bg-white border border-gray-300 text-sm text-gray-400 font-semibold p-2 outline-none"
              />
            </div>
          </div>
          <h1 className="text-gray-500 ml-20 mt-20 h-auto md:w-[700px] w-80">
            {" "}
            *Need to fill marked. Make a call for more details required. We will
            call you and give a cost estimate of your project upon your
            submission.
          </h1>
          <input
            type="text"
            placeholder="Any information"
            className="h-36 md:w-[650px] w-80 bg-white border  pl-4 border-gray-400 ml-20 mt-20 text-start text-base outline-none"
          />
          <button className="h-12 w-40 bg-orange-600 mt-20 ml-20 text-white text-base hover:bg-blue-950   ">
            Submit Now
          </button>
        </div>
        <div className="h-[1000px] w-[500px] bg-orange-600 mt-20 flex flex-col items-center justify-center lg:max-xl:h-auto lg:max-xl:w-[900px] p-10 ">
          <h1 className="h-auto w-[300px] text-white text-6xl font-bold text-start leading-snug lg:max-xl:w-[850px] lg:max-xl:text-5xl lg:max-xl:p-10 lg:max-xl:leading-snug">
            Any Industrial Solution... We Are Available For You!
          </h1>
          <div className="flex flex-col gap-8 mt-10 ">
            <p className="text-blue-900 text-3xl font-semibold text-center">
              Contact Us
            </p>
            <p className="text-white text-4xl font-semibold text-center">
              1-800-123-45678
            </p>
            <p className="text-white text-4xl font-semibold text-center ">
              admin@example.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
