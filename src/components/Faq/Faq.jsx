import React, { useState } from "react";
import FaqQes from "./FaqQes";
import check from "./check_box.png";
import img from "./man-image.jpg";
import FaqBottomCard from "./FaqBottomCard";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const Faq = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState(isSelected);

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-5xl mt-20 font-bold gap-3">
          <h1 className="text-blue-900">Faq’s</h1>
          <h1 className="text-orange-600">Common Questions</h1>
        </div>

        <div className="lg:flex lg:flex-row lg:gap-5  flex flex-col gap-10 md:max-lg:gap-0 items-center justify-center">
          <div className="flex flex-col gap-5 mt-20 items-center justify-center m-5 ">
            <FaqQes title={"What services can I outsource?"} />
            <FaqQes
              title={
                "How Can I View Your Annual Report To Know That How You Use OurMoney"
              }
            />
            <FaqQes title={"Don't Goverment Provide Any Support?"} />
            <FaqQes
              title={"Does Provide Information About Where My spares Is Used?"}
            />
            <FaqQes title={"Hoe Does Your Team Raised Fund for Resourses"} />
            <FaqQes
              title={
                "What Method Do Charity Use To Choose Project For Its Support?"
              }
            />
            <FaqQes title={"How Does Charity Work To Ensure Child Rights?"} />
            <FaqQes title={"Will My Little Contribution Be Helpful For You?"} />
          </div>
          <div className="flex flex-col gap-10 md:max-lg:gap-6 mt-20">
            <div className="h-72 lg:max-xl:h-56 md:max-lg:h-96 md:max-lg:w-[700px] lg:max-xl:w-64 w-96 bg-gray-400"></div>
            <div className="h-72 lg:max-xl:h-96 md:max-lg:w-[700px] lg:max-xl:w-64 w-96 bg-blue-900 bg-opacity-90">
              <div className="flex flex-col items-center justify-center gap-5 mt-10">
                <h1 className="text-orange-600 lg:max-xl:w-36 text-2xl  font-semibold leading-7">
                  You still have questions ?
                </h1>
                <p className="text-white text-sm w-64 text-center lg:max-xl:w-36 leading-7  ">
                  Is there any query left? You can directly share with us and
                  clear away all your confusions.
                </p>
                <button className="h-12 w-36 bg-orange-600 text-white text-sm hover:bg-white hover:text-blue-950 ">
                  Ask Question?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second part of the page */}
      <div className="md:h-screen h-[900px]   mt-10  lg:flex lg:flex-row flex flex-row items-center  lg:justify-end  ">
        <img
          src={img}
          alt="xyz"
          className="h-full w-auto object-cover relative"
        />
        <div className=" lg:w-1/2 w-full absolute flex flex-col   gap-10">
          <div className=" flex flex-col gap-5 ">
            <h1 className="text-blue-900 text-3xl font-medium ">
              You need more information
            </h1>
            <h1 className="text-orange-600 text-5xl font-semibold">
              Helping Firms Innovate, Transform, and Lead.
            </h1>
          </div>
          <div className="flex flex-col gap-0 ">
            <div className="flex flex-row gap-0.5 ">
              <button
                onClick={() => {
                  setIsSelected("1");
                }}
                className={` ${
                  isSelected == "1"
                    ? "bg-orange-600 text-white "
                    : " bg-white text-blue-900"
                } h-12 w-32   text-base font-bold text-center p-2 `}
              >
                Innovation
              </button>
              <button
                onClick={() => {
                  setIsSelected("2");
                }}
                className={`${
                  isSelected == "2"
                    ? "bg-orange-600 text-white "
                    : " bg-white text-blue-900"
                } h-12 w-32  text-base font-bold text-center p-2 `}
              >
                Production
              </button>
              <button
                onClick={() => {
                  setIsSelected("3");
                }}
                className={`${
                  isSelected == "3"
                    ? "bg-orange-600 text-white "
                    : " bg-white text-blue-900"
                } h-12 w-32  text-base font-bold text-center p-2 `}
              >
                Quality
              </button>
              <button
                onClick={() => {
                  setIsSelected("4");
                }}
                className={`${
                  isSelected == "4"
                    ? "bg-orange-600 text-white "
                    : " bg-white text-blue-900"
                } h-12 w-32   text-base font-bold text-center p-`}
              >
                Guarantee
              </button>
            </div>
            <div className="h-auto w-full bg-gray-50 flex flex-col gap-5  p-10 bg-opacity-80 ">
              <p className="text-gray-500 ">
                Vivamus elementum semper nisi. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,{" "}
              </p>
              <div className="md:flex md:flex-row flex flex-col gap-10 ">
                <div className="flex flex-col gap-5 text-sm ">
                  <div className="flex gap-2 justify-start items-center">
                    <img src={check} alt="" className="h-4" />
                    <h1 className="text-gray-500">In enim justo rhoncus ut.</h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <img src={check} alt="" className="h-4" />
                    <h1 className="text-gray-500">
                      Nullam dictum felis eu pede.
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <img src={check} alt="" className="h-4" />
                    <h1 className="text-gray-500">
                      Vivamus elementum semper nisi.
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <img src={check} alt="" className="h-4" />
                    <h1 className="text-gray-500">
                      Aenean vulputate. eleifend tellus.
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-5 text-sm ">
                  <div className="flex gap-2 justify-start items-center">
                    <img src={check} alt="" className="h-4" />
                    <h1 className="text-gray-500">In enim justo rhoncus ut.</h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <img src={check} alt="" className="h-4" />
                    <h1 className="text-gray-500">
                      Nullam dictum felis eu pede.
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <img src={check} alt="" className="h-4" />
                    <h1 className="text-gray-500">
                      Vivamus elementum semper nisi.
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <img src={check} alt="" className="h-4" />
                    <h1 className="text-gray-500">
                      Aenean vulputate. eleifend tellus.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      {/* last part of the page */}
      <div className="mt-20">
        <div className="flex flex-row text-5xl font-bold  gap-2 ml-28">
          <h1 className="text-blue-900">
            Our Experience and{" "}
            <span className="text-orange-600"> Industry Knowledge. </span>
          </h1>
        </div>
        <div className="flex flex-row gap-16 justify-center items-center p-10">
          <FaqBottomCard title={"Puzzle Knowledge"} img={img1} />
          <FaqBottomCard title={"Electric Power Station"} img={img2} />
          <FaqBottomCard title={"Changing Engine Gear"} img={img3} />
        </div>
      </div>
    </>
  );
};

export default Faq;
